import * as React from "react";
import Modal from 'react-modal';
import useLoadScript from "../../hooks/useLoadScript";
import UserCard from './UserCard';
import Transaction from './Transaction';
import GoogleMap from "../GoogleMap";
import {getSmartbin, getUserActivitiesData, getUserPointSummary, getUser} from '../../services/api';
import useToken from "../../hooks/useToken";
import {Fragment, useEffect} from "react";
import Close from "../../images/left-arrow.png";
import './Home.css';

Modal.setAppElement('#root');

export default function Home() {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [userLocation, setUserLocation] = React.useState({lat: 18.80084905662726, lng: 98.950352098965380});
    const [locationLoaded, setLocationLoaded] = React.useState(false);
    const [activities, setActivities] = React.useState([]);
    const [summary, setSummary] = React.useState({total_point: 0, carbon_credit: 0, quantity: 0});
    const [isLoading, setIsLoading] = React.useState(true)
    const [user, setUser] = React.useState();
    const [smartbins, setSmartBins] = React.useState([]);
    const {reload, getUser, getToken} = useToken();
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const scriptLoaded = useLoadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDYt61BGbbbXwJ2ENe8WK4Glj3qMq1-_SY");

    function loadUserData() {
        setIsLoading(true)
        try {
            const userData = getUser();
            if (!userData) {
                alert('Please login');
                window.location.href = '/login'
            }
            setUser(userData)
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
        setIsLoading(false)
    }

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await getUserPointSummary(user.user_id);
            const responseA = await getUserActivitiesData(user.user_id);
            setActivities(responseA); // Assuming response contains activitiesData
            setSummary(response);
        } catch (error) {
            console.error("Error fetching activity data:", error);
        }
        setIsLoading(false)
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
                    // Handle error
                    setLocationLoaded(true); // Still set it to true to attempt loading the map with default center
                }
            );
        } else {
            setLocationLoaded(true); // Browser doesn't support Geolocation
        }

        try{
          const resp = await getSmartbin()
          console.log(resp);
          setSmartBins(resp)
        }catch(e) {
          console.error(e);
        }

    }

    useEffect(() => {
        loadUserData()
    }, []);

    useEffect(() => {
        fetchMappingAPI()
    }, [navigator.geolocation])
    useEffect(() => {
        fetchData()
    }, [user])


    return (
        <>
            {isLoading ?
                <Fragment>
                    <h3 className="loading">Loading...</h3>
                </Fragment>
                :
                <Fragment>
                    <section className="container">
                        <section className="container-2">
                            <div className="user-greeting-container">
                                <p className="user-greeting">สวัสดีคุณ {user.username} </p>
                                <p className="view-all">ดูทั้งหมด</p>
                            </div>
                            <section className="points-section">
                                <UserCard title="คุณมีแต้มทั้งหมด" units="คะแนน" value={summary.total_point}/>
                                <UserCard title="ลดคาร์บอนได้ทั้งหมด" units="ตัน" value={summary.carbon_credit}/>
                                <UserCard title="รีไซเคิลไปทั้งหมด" units="ชิ้น" value={summary.quantity}/>
                            </section>
                        </section>
                        <div className="search-nearby-button" onClick={openModal}>
                            {scriptLoaded && locationLoaded && (
                                <GoogleMap
                                    className="small-map"
                                    center={userLocation}
                                    zoom={17}
                                    smartbins={smartbins}
                                />
                            )}
                        </div>
                        <div className="action-buttons">
                            <button className="action-button">สแกนขยะ</button>
                            <button className="action-button">แลกรางวัล</button>
                        </div>
                        <section className="transaction-section">
                            <div className="history-header">
                                <p className="history-title">ประวัติการทำรายการ</p>
                                <p className="view-all-transactions">ดูทั้งหมด</p>
                            </div>
                            {isLoading ? (
                                <p className="t">กำลังโหลดประวัติการทำรายการ...</p>
                            ) : activities.length > 0 ? (
                                activities.map((activity, index) => (
                                    <Fragment>

                                        <Transaction
                                            key={index}
                                            placeName={activity.smartbin.name}
                                            date={activity.timestamp}
                                            point={activity.point}
                                        />
                                    </Fragment>
                                ))
                            ) : (
                                <p className="t">ยังไม่มีประวัติการทำรายการ</p>
                            )}
                        </section>
                    </section>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Map Modal"
                        style={{
                            content: {
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                marginRight: '-50%',
                                transform: 'translate(-50%, -50%)',
                                borderRadius: '20px',
                            },
                        }}
                    >
                        <button onClick={closeModal} className="buttonClose"><img
                            src={Close}
                            alt="Close"
                            className="close"
                        /></button>
                        <div className="full-map">
                            {scriptLoaded && locationLoaded && (
                                <GoogleMap
                                    className="modal-map"
                                    center={userLocation}
                                    zoom={17}
                                    smartbins={smartbins}
                                />
                            )}
                        </div>
                    </Modal>
                </Fragment>
            }
        </>
    );
}
