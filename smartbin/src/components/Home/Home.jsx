import * as React from "react";
import { Fragment, useEffect } from "react";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import useLoadScript from "../../hooks/useLoadScript";
import useToken from "../../hooks/useToken";
import { getSmartbin, getUserActivitiesData, getUserPointSummary } from '../../services/api';
import GoogleMap from "../GoogleMap";
import Transaction from './Transaction';
import UserCard from './UserCard';

Modal.setAppElement('#root');

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [userLocation, setUserLocation] = React.useState({ lat: 18.80084905662726, lng: 98.950352098965380 });
  const [locationLoaded, setLocationLoaded] = React.useState(false);
  const [activities, setActivities] = React.useState([]);
  const [summary, setSummary] = React.useState({ total_point: 0, carbon_credit: 0, quantity: 0 });
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState();
  const [smartbins, setSmartBins] = React.useState([]);
  const { reload, getUser, getToken } = useToken();

  const scriptLoaded = useLoadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDYt61BGbbbXwJ2ENe8WK4Glj3qMq1-_SY");

  function loadUserData() {
    setIsLoading(true);
    try {
      const userData = getUser();
      if (!userData) {
        alert('Please login');
        window.location.href = '/login';
      }
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    setIsLoading(false);
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getUserPointSummary(user.user_id);
      const responseA = await getUserActivitiesData(user.user_id);
      setActivities(responseA);
      setSummary(response);
    } catch (error) {
      console.error("Error fetching activity data:", error);
    }
    setIsLoading(false);
  };

  const fetchMappingAPI = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLocationLoaded(true);
        },
        () => {
          setLocationLoaded(true); // Still set it to true to attempt loading the map with default center
        }
      );
    } else {
      setLocationLoaded(true); // Browser doesn't support Geolocation
    }

    try {
      const resp = await getSmartbin();
      console.log(resp);
      setSmartBins(resp);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    fetchMappingAPI();
  }, [navigator.geolocation]);

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <>
      {isLoading ?
        <Fragment>
          <section className="w-full mx-auto p-4 md:p-8 flex flex-col gap-4 items-center">
            <h3 className="text-lg font-medium">Loading...</h3>
          </section>
        </Fragment>
        :
        <Fragment>
          <section className="w-full mx-auto p-4 md:p-8 flex flex-col gap-4">
            <section className="flex flex-col gap-4 bg-white border border-gray-300 rounded-lg p-6 shadow">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-semibold">สวัสดีคุณ {user.username}</p>
                <Link to="/stat" className="text-sm text-blue-600">ดูทั้งหมด</Link>
              </div>
              <section className="grid grid-cols-3 gap-4">
                <UserCard title="คุณมีแต้มทั้งหมด" units="คะแนน" value={summary.total_point} />
                <UserCard title="ลดคาร์บอนได้ทั้งหมด" units="ตัน" value={summary.carbon_credit} />
                <UserCard title="รีไซเคิลไปทั้งหมด" units="ชิ้น" value={summary.quantity} />
              </section>
            </section>

            {scriptLoaded && locationLoaded && (
              <div className="rounded-lg overflow-hidden border border-gray-300 h-64 shadow">
                <GoogleMap
                  className="w-full h-full"
                  center={userLocation}
                  zoom={17}
                  smartbins={smartbins}
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <button className="w-full bg-white border border-gray-300 p-6 rounded-lg shadow text-lg font-semibold">สแกนขยะ</button>
              <button className="w-full bg-white border border-gray-300 p-6 rounded-lg shadow text-lg font-semibold" onClick={() => window.location.href = '/redeem-shop'}>
                แลกรางวัล
              </button>
            </div>

            <section className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">ประวัติการทำรายการ</p>
                <Link to="/all-transactions" className="text-sm text-blue-600">ดูทั้งหมด</Link>
              </div>
              {activities.length > 0 ? (
                activities.slice().reverse().map((activity, index) => (
                  <Fragment key={index}>
                    <Transaction
                      placeName={activity.smartbin.name}
                      date={activity.timestamp}
                      point={activity.point}
                      details={[{ material: activity.material, point: activity.point }]} // Wrap details in an array
                    />
                  </Fragment>
                ))
              ) : (
                <p className="text-center text-lg font-medium">ยังไม่มีประวัติการทำรายการ</p>
              )}
            </section>
          </section>
        </Fragment>
      }
    </>
  );
}
