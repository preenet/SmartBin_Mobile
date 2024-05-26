import * as React from "react";

export default function Home() {
  const data = [
    {
      id: 1,
      name: "ชื่อสถานที่",
      dateTime: "02/05/2024 - 13:00 น.",
      points: "+60 คะแนน",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3489fdf780b6ca2d6011ce4e5a2af234de8e596035b7cd816bc6361602cd077d?apiKey=e36162eb1f314ee4a7604edd117f93c9&",
    },
    {
      id: 2,
      name: "ชื่อสถานที่",
      dateTime: "01/05/2024 - 12:00 น.",
      points: "+60 คะแนน",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3489fdf780b6ca2d6011ce4e5a2af234de8e596035b7cd816bc6361602cd077d?apiKey=e36162eb1f314ee4a7604edd117f93c9&",
    },
  ];
  return (
    <>
      <style jsx>
        {`
          .container {
            background-color: #fff;
            display: flex;
            max-width: 100%;
            flex-direction: column;
            color: #000;
            justify-content: center;
            margin: 0 auto;
            padding: 20px;
          }
          .blur-bg {
            backdrop-filter: blur(50px);
            background-color: rgba(255, 255, 255, 0.7);
            display: flex;
            width: 100%;
            flex-direction: column;
            padding: 20px;
          }
          .stats-section {
            border-radius: 21px;
            box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25),
              0px -1px 1px 0px rgba(0, 0, 0, 0.25);
            background-color: #fff;
            display: flex;
            width: 100%;
            flex-direction: column;
            padding: 11px 19px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .header-title {
            font-weight: 700;
            font-size: 20px;
            font-family: Roboto, sans-serif;
          }
          .view-all {
            font-weight: 400;
            font-size: 12px;
            font-family: Roboto, sans-serif;
          }
          .stats-group {
            display: flex;
            margin-top: 17px;
            gap: 18px;
            font-size: 10px;
            font-weight: 400;
            white-space: nowrap;
          }
          .stats-block {
            border-radius: 10px;
            box-shadow: 0px 1px 1px 0.05px rgba(0, 0, 0, 0.25),
              0px -1px 1px 0.05px rgba(0, 0, 0, 0.25);
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            padding: 8px 12px;
          }
          .stats-text {
            text-align: center;
            font-family: Roboto, sans-serif;
          }
          .stats-value {
            margin-top: 8px;
            font-weight: 700;
            font-size: 20px;
            font-family: Roboto, sans-serif;
          }
          .hero {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            position: relative;
            aspect-ratio: 1.85;
            margin-top: 11px;
            font-weight: 700;
            padding: 13px 80px 41px 12px;
          }
          .hero-img {
            position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
          }
          .hero-text {
            position: relative;
            font-family: Roboto, sans-serif;
            align-self: start;
          }
          .hero-icon {
            aspect-ratio: 0.4;
            object-fit: auto;
            object-position: center;
            width: 10px;
            align-self: center;
            margin-top: 99px;
          }
          .actions-group {
            display: flex;
            margin-top: 11px;
            gap: 6px;
            white-space: nowrap;
          }
          .actions-content {
            display: flex;
            flex-direction: column;
            font-size: 16px;
            font-weight: 700;
            flex: 1;
          }
          .actions-button {
            border-radius: 20px;
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25),
              0px -1px 2px 0px rgba(0, 0, 0, 0.25);
            background-color: #fff;
            text-align: center;
            justify-content: center;
            padding: 36px 53px;
            font-weight: 700;
            font-size: 16px;
            font-family: Roboto, sans-serif;
          }
          .actions-link {
            align-self: end;
            margin-top: 15px;
            font-weight: 400;
            font-size: 12px;
            font-family: Roboto, sans-serif;
          }
          .history-group {
            border-radius: 21px;
            box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25),
              0px -1px 1px 0px rgba(0, 0, 0, 0.25);
            background-color: #fff;
            display: flex;
            width: 100%;
            flex-direction: column;
            margin-top: 12px;
            margin-bottom: 62px;
            padding: 2px 0;
          }
          .history-item {
            border-radius: 21px 21px 0px 0px;
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25),
              0px -1px 2px 0px rgba(0, 0, 0, 0.25);
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 6px 14px;
            gap: 20px;
          }
          .history-title {
            font-weight: 700;
            font-size: 20px;
            font-family: Roboto, sans-serif;
          }
          .history-date {
            font-weight: 400;
            font-size: 13px;
            font-family: Roboto, sans-serif;
          }
          .history-details {
            display: flex;
            flex-direction: column;
          }
          .history-points {
            display: flex;
            margin-top: 7px;
            padding-left: 33px;
            flex-direction: column;
            font-weight: 700;
            font-size: 20px;
            text-align: right;
            font-family: Roboto, sans-serif;
          }
          .history-img {
            aspect-ratio: 1;
            object-fit: auto;
            object-position: center;
            width: 13px;
            align-self: end;
            margin-top: 7px;
          }
          .green-text {
            color: rgba(52, 168, 83, 1);
          }
          @media (max-width: 768px) {
            .container {
              padding: 10px;
            }
            .blur-bg {
              padding: 10px;
            }
            .hero {
              padding: 10px 40px 20px 6px;
            }
          }
          @media (min-width: 769px) and (max-width: 1440px) {
            .container {
              max-width: 768px;
            }
          }
        `}
      </style>
      <div className="container">
        <section className="blur-bg">
          <article className="stats-section">
            <header className="header">
              <h2 className="header-title">สวัสดีคุณ User</h2>
              <p className="view-all">ดูทั้งหมด</p>
            </header>
            <div className="stats-group">
              <div className="stats-block">
                <p className="stats-text">คุณมีแต้มทั้งหมด</p>
                <p className="stats-value">120</p>
                <p className="stats-text">คะแนน</p>
              </div>
              <div className="stats-block">
                <p className="stats-text">ลดคาร์บอนได้ทั้งหมด</p>
                <p className="stats-value">0.009</p>
                <p className="stats-text">ตัน</p>
              </div>
              <div className="stats-block">
                <p className="stats-text">รีไซเคิลไปทั้งหมด</p>
                <p className="stats-value">120</p>
                <p className="stats-text">กรัม</p>
              </div>
            </div>
          </article>
          <div className="hero">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4a8795060c1ed7fec06b0ea68cf923f5f9e098432f8d278edf80f2674bc6a9a?apiKey=e36162eb1f314ee4a7604edd117f93c9&"
              alt="Smart Bin"
              className="hero-img"
            />
            <p className="hero-text">ค้นหา Smart Bin ใกล้ฉัน</p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/718d9f42ebbcd0a894c8eb60ebb638c7dca4c2b8e879f7e449e7f1d0fd9115a2?apiKey=e36162eb1f314ee4a7604edd117f93c9&" alt="" className="hero-icon" />
          </div>
          <div className="actions-group">
            <div className="actions-content">
              <button className="actions-button">สแกนขยะ</button>
              <h3>
                {" "}
                ประวัติการทำรายการ{" "}
              </h3>
            </div>
            <div className="actions-content">
              <button className="actions-button">แลกรางวัล</button>
              <a href="#" className="actions-link">
                {" "}
                ดูทั้งหมด{" "}
              </a>
            </div>
          </div>
          <section className="history-group">
            {data.map((item) => (
              <div key={item.id} className="history-item">
                <p className="history-title">{item.name}</p>
                <div className="history-details">
                  <p className="history-date">{item.dateTime}</p>
                  <div className="history-points">
                    <p className="green-text">{item.points}</p>
                    <img
                      loading="lazy"
                      src={item.imgSrc}
                      alt=""
                      className="history-img"
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </div>
    </>
  );
}