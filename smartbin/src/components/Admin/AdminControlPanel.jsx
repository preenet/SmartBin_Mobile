import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import GoogleMap from "../GoogleMap";
import useLoadScript from "../../hooks/useLoadScript";
import useToken from "../../hooks/useToken";
import { getSmartbin, getUserActivitiesData, getUserPointSummary } from '../../services/api';

export default function AdminControlPanel() {
    const [userLocation, setUserLocation] = React.useState({ lat: 18.80084905662726, lng: 98.950352098965380 });
    const [locationLoaded, setLocationLoaded] = React.useState(false);
    const [smartbins, setSmartBins] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const { reload, getUser, getToken } = useToken();
    const [user, setUser] = React.useState();
    const [summary, setSummary] = React.useState({ total_point: 0, carbon_credit: 0, quantity: 0 });
    const [activities, setActivities] = React.useState([]);
    const [materialSummary, setMaterialSummary] = React.useState({ plastic: 0, tin: 0, glass: 0 }); 

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
        const loadData = async () => {
          try {
            const userData = getUser();
            const token = getToken();
    
            if (!userData || !token) {
              alert('Please log in');
              window.location.href = '/login';
              return;
            }
    
            setUser(userData);
    
            const summaryResponse = await getUserPointSummary(userData.user_id);
            setSummary(summaryResponse);

            const activitiesResponse = await getUserActivitiesData(userData.user_id);
            setActivities(activitiesResponse);

            const materialSummary = { plastic: 0, tin: 0, glass: 0 };
            activitiesResponse.forEach(activity => {
              if (activity.material === 'plastic') materialSummary.plastic += activity.quantity;
              if (activity.material === 'tin') materialSummary.tin += activity.quantity;
              if (activity.material === 'glass') materialSummary.glass += activity.quantity;
            });
            setMaterialSummary(materialSummary);
    
          } catch (error) {
            console.error("Error loading data:", error);
            setIsLoading(false);
          }
        };
    
        loadData();
      }, []);
    


    const userChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Active Users',
                data: [12, 19, 3, 5, 2, 3, 9, 13, 10, 5, 2, 1],
                fill: false,
                backgroundColor: '#9E76B4',
                borderColor: '#9E76B4',
            },
        ],
    };

    return (
        <section className="w-full mx-auto p-4 md:p-8 flex flex-col gap-4">
            <header className="text-2xl font-bold text-center mb-3">แผงควบคุมผู้ดูแลระบบ</header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full bg-white border border-gray-300 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4 text-center">ผู้ใช้ทั้งหมด</h3>
                    <p className="text-3xl font-bold mb-4 text-center">165 บัญชี</p>
                    <Line data={userChartData} />
                </div>
                <div className="w-full bg-white border border-gray-300 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">จำนวนการรีไซเคิลทั้งหมด</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                            <div>
                                <p className="font-semibold">ขวดพลาสติก</p>
                                <p className="text-sm text-gray-600">สัปดาห์นี้</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-purple-600">{materialSummary.plastic} ขวด</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                            <div>
                                <p className="font-semibold">กระป๋องอลูมิเนียม</p>
                                <p className="text-sm text-gray-600">สัปดาห์นี้</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-purple-600">{materialSummary.tin} ขวด</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                            <div>
                                <p className="font-semibold">ขวดแก้ว</p>
                                <p className="text-sm text-gray-600">สัปดาห์นี้</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-purple-600">{materialSummary.glass} ขวด</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map-section">
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
            </section>
            <section className="grid grid-cols-2 gap-4 text-center">
                <Link to="/user-management" className="w-full bg-white border border-gray-300 p-6 rounded-lg shadow text-lg font-semibold">การจัดการบัญชีผู้ใช้</Link>
                <Link to="/shop-management" className="w-full bg-white border border-gray-300 p-6 rounded-lg shadow text-lg font-semibold">การจัดการร้านค้า</Link>
                <Link to="/issue-reports" className="w-full bg-white border border-gray-300 p-6 rounded-lg shadow text-lg font-semibold">ปัญหาที่ถูกรายงาน</Link>
                <Link to="/help-center" className="w-full bg-white border border-gray-300 p-6 rounded-lg shadow text-lg font-semibold">ศูนย์ช่วยเหลือ</Link>
            </section>
            
        </section>
    );
}