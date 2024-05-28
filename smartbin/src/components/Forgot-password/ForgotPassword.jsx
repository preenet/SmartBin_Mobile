import * as React from "react";

export default function Forgot() {
  return (
    <>
      <section className="main-container">
        <header className="header">
          <div className="smart-bin-icon">SMART BIN ICON</div>
        </header>
        <div className="content">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fef8381d04643b55c1fca60fa2e9c0ad2cc8083567944c536841bf54f7bd3e87?apiKey=e36162eb1f314ee4a7604edd117f93c9&"
            alt="Smart Bin Icon"
            className="smart-bin-image"
          />
          <h1 className="title">รีเซ็ตรหัสผ่านของคุณ</h1>
          <p className="description">
            ป้อนหมายเลขโทรศัพท์ของคุณ ที่ลงทะเบียนไว้กับ Smart Bin ที่นี่
          </p>
          <label htmlFor="phoneNumberInput" className="sr-only">
            หมายเลขโทรศัพท์
          </label>
          <input
            className="phone-input"
            type="tel"
            id="phoneNumberInput"
            placeholder="หมายเลขโทรศัพท์"
            aria-label="หมายเลขโทรศัพท์"
          />
          <button className="submit-button" type="submit">
            ยืนยัน
          </button>
        </div>
      </section>
      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
        .main-container {
          background-color: #fff;
          display: flex;
          width: auto;
          padding: 53px 17px;
          flex-direction: column;
          margin: 0 auto;
          height: auto;
          justify-content: center;
          align-items: center;
        }
        .header {
          backdrop-filter: blur(50px);
          background-color: rgba(255, 255, 255, 0.7);
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 80px 20px 0;
          text-align: center;
        }
        .smart-bin-icon {
          margin-top: 30px;
          font: 700 16px Mitr, sans-serif;
        }
        .content {
          border-radius: 20px;
          box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25),
            0px -1px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          display: flex;
          width: auto;
          flex-direction: column;
          align-items: flex-start;
          font-size: 15px;
          font-weight: 400;
          margin: 0 auto;
          padding: 53 17px;
        }
        .smart-bin-image {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .title {
          margin: 20px 0 0 12px;
          font: 700 20px Mitr, sans-serif;
        }
        .description {
          font-family: Mitr, sans-serif;
          padding-right: 54px;
          margin: 0 -3px 0 14px;
        }
        .form-wrapper {
          display: flex;
          flex-direction: column;
          align-items: start;
          margin: 15px 0 0 14px;
        }
        .phone-input {
          border-radius: 10px;
          box-shadow: 0px 0.05px 2px 0px rgba(0, 0, 0, 0.25) inset;
          background-color: #fff;
          margin: 10px -3px 0 14px;
          align-items: start;
          color: #000;
          justify-content: center;
          padding: 11px 12px;
          font: 400 15px Mitr, sans-serif;
        }
        .submit-button {
          border-radius: 20px;
          box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          align-self: center;
          margin-top: 15px;
          width: 199px;
          max-width: 100%;
          align-items: center;
          border-color: #fff;
          color: #000;
          text-align: center;
          justify-content: center;
          padding: 12px 60px;
          font: 400 15px Mitr, sans-serif;
          margin: 20px 0 15px;
        }
      `}</style>
    </>
  );
}