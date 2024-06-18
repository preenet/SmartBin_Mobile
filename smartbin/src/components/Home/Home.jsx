import * as React from "react";
import Modal from 'react-modal';
import useLoadScript from "../../hooks/useLoadScript";
import UserCard from './UserCard';
import Transaction from './Transaction';
import GoogleMap from "../GoogleMap";
import {getUserActivitiesData, getUser, getUserPointSummary} from '../../services/api';
import useToken from "../../hooks/useToken";
import {Fragment, useEffect} from "react";
import Close from "../../images/left-arrow.png";


Modal.setAppElement('#root');

const smartBinImage = '../../images/BIN/GREEN.png';


export default function Home() {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [userLocation, setUserLocation] = React.useState({lat: 18.80084905662726, lng: 98.950352098965380});
    const [locationLoaded, setLocationLoaded] = React.useState(false);
    const [activities, setActivities] = React.useState({point: 0, smartbin:{name:""}, timestamp: ""});
    const [summary, setSummary] = React.useState({total_point: 0, carbon_credit: 0, quantity: 0});
    const [isLoading, setIsLoading] = React.useState(true)
    const [user, setUser] = React.useState()
    const {reload, getUser, getToken} = useToken()
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const scriptLoaded = useLoadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDYt61BGbbbXwJ2ENe8WK4Glj3qMq1-_SY");

    //useLoadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY");

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
            console.log(response);
            console.log(responseA);
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
    }

    useEffect(() => {
        loadUserData()
    }, []);

    useEffect( () => {
        fetchMappingAPI()
    }, [navigator.geolocation])
    useEffect(() => {
        fetchData()
    }, [user])


    return (
        <>
            <style jsx>{`
              .container {
                display: flex;
                flex-direction: column;
                max-width: 390px;
                margin: 0 auto;
                padding: 53px 17px;
                background-color: #fffff;
                backdrop-filter: blur(0px);
                border-radius: 21px;
                gap: 10px;
              }

              .container-2 {
                width: auto;
                hight: 128px;
                margin: 0 auto;
                padding: 16px 10px;
                background-color: #fff;
                backdrop-filter: blur(50px);
                border-radius: 21px;
                box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
              }

              .user-greeting-container {
                display: flex;
                justify-content: space-between;
                margin-top: -10px;
                margin-left: 5px;
              }

              .user-greeting {
                font-weight: 600;
                font-size: 20px;
              }

              .view-all {
                font-weight: 400;
                font-size: 12px;
                cursor: pointer;
              }

              .points-section {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0px;
              }

              .points-card {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                background-color: #fff;
                box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
                padding: 10px;
                text-align: center;
                margin: 0 5px;
              }

              .points-card-title {
                font-size: 12px;
                margin-top: 8px;
                margin-bottom: 8px;
              }

              .points-card-value {
                font-size: 20px;
                font-weight: 700;
                margin-top: 8px;
                margin-bottom: 8px;
              }

              .points-card-units {
                font-size: 10px;
                margin-top: 8px;
                margin-bottom: 8px;
              }

              .points-highlight {
                color: rgba(52, 168, 83, 1);
              }

              .transaction-section {
                margin-bottom: 12px;
              }

              .transaction {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                border-radius: 15px;
                background-color: #fff;
                box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
                padding: 10px;
                text-align: left;
                margin-bottom: 0px;
              }

              .transaction-place-name {
                font-size: 20px;
                font-weight: bold;
                margin-top: 0px;
                margin-bottom: 0px;
              }

              .transaction-details {
                display: flex;
                justify-content: space-between;
                width: 100%;
                align-items: center;
              }

              .transaction-date {
                font-size: 10px;
                font-weight: 400;
                margin-top: 0px;
                margin-bottom: 0px;
              }

              .transaction-points {
                font-size: 20px;
                font-weight: 600;
                margin-top: 0px;
                margin-bottom: 0px;
                float: right;
              }

              .transaction-image {
                width: 13px;
                height: 13px;
                margin-left: 3px;
              }

              .action-buttons {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0px;
              }

              .action-button {
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 600;
                font-size: 23px;
                font-family: 'Mitr', sans-serif;
                padding: 51px 33px;
                border-radius: 20px;
                background-color: #fff;
                box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
                width: 175px;
                hight: auto;
              }

              .search-nearby-button {
                width: auto;
                height: 192px;
                padding: 0;
                margin-bottom: 0px;
                position: relative;
                box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
                border-radius: 20px;
              }

              .small-map {
                height: 100%;
                width: 100%;
                border-radius: 20px;
              }

              .modal-map {
                height: 80vh;
                width: 80vw;
                border-radius: 20px;
              }

              .history-header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
              }

              .history-title {
                font-size: 20px;
                font-weight: 700;
                margin-top: 0px;
                margin-bottom: 0px;
              }

              .view-all-transactions {
                font-size: 12px;
                font-weight: 400;
                cursor: pointer;
                margin-top: 8px;
                margin-bottom: 0px;
              }

              .close {
                aspect-ratio: 1;
                object-fit: auto;
                object-position: center;
                width: 24px;
              }

              .buttonClose {
                background-color: #fff;
                border: none;
              }

              .full-map {
                height: 100%;
                width: 100%;
                border-radius: 20px;
              }
              
              .t {
                font-weight: 600;
                font-size: 20px;
              }
            `}
            </style>
            {isLoading ?
                <Fragment>
                    <h3>Loading...</h3>
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
                                  <Transaction
                                    key={index}
                                    placeName={activity.smartbin.name}
                                    date={activity.timestamp}
                                    points={activity.point}
                                  />
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
                          src= {Close}
                          alt="Close"
                          className="close"
                        /></button>
                        <div className="full-map">
                          {scriptLoaded && locationLoaded && (
                              <GoogleMap
                                  className="modal-map"
                                  center={userLocation}
                                  zoom={17}
                              />
                          )}
                        </div>
                    </Modal>
                </Fragment>
            }
        </>
    );
}