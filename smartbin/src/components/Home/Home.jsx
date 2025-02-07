import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function UserCard({ title, units, value }) {
  return (
    <div className="points-card">
      <p className="points-card-title">{title}</p>
      <p className="points-card-value">{value}</p>
      <p className="points-card-units">{units}</p>
    </div>
  );
}

function Transaction({placeName, date, points}) {
  return (
    <div className="transaction">
      <div className="transaction-details">
        <p className="transaction-place-name">{placeName}</p>
        <p className="transaction-date">{date}</p>
      </div>
      <p className="transaction-points" tabIndex="0">
          <span className="points-highlight">+{points}</span> คะแนน
      </p>
    </div>
  );
}

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

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
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
          font-size: 16px;
          font-family: 'Mitr', sans-serif;
          padding: 51px 33px;
          border-radius: 20px;
          border-color: #fff;
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
      `}</style>
      <section className="container">
        <section className="container-2">
          <div className="user-greeting-container">
            <p className="user-greeting">สวัสดีคุณ Username</p>
            <p className="view-all">ดูทั้งหมด</p>
          </div>
          <section className="points-section">
            <UserCard title="คุณมีแต้มทั้งหมด" units="คะแนน" value="120" />
            <UserCard title="ลดคาร์บอนได้ทั้งหมด" units="ตัน" value="0.009" />
            <UserCard title="รีไซเคิลไปทั้งหมด" units="กรัม" value="120" />
          </section>
        </section>
        <div className="search-nearby-button" onClick={openModal}>
          <MapContainer center={[18.800525355582607, 98.9503902346]} zoom={17} className="small-map">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[18.800525355582607, 98.9503902346]}>
              <Popup>
                Smart Bin Location
              </Popup>
            </Marker>
          </MapContainer>
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
          <Transaction placeName="ชื่อสถานที่" date="02/05/2024 - 13:00 น." points="60" />
          <Transaction placeName="ชื่อสถานที่" date="01/05/2024 - 12:00 น." points="60" />
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
          },
        }}
      >
        <button onClick={closeModal}>Close</button>
        <MapContainer center={[18.800525355582607, 98.9503902346]} zoom={17} className="modal-map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[18.800525355582607, 98.9503902346]}>
            <Popup>
              Smart Bin Location
            </Popup>
          </Marker>
        </MapContainer>
      </Modal>
    </>
  );
}