import * as React from "react";

const FormContainer = () => (
  <form className="form-wrapper">
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
  </form>
);

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
          <FormContainer />
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
          max-width: 480px;
          width: 100%;
          flex-direction: column;
          color: #000;
          justify-content: center;
          margin: 0 auto;
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
          font: 700 16px Roboto, sans-serif;
        }
        .content {
          border-radius: 21px;
          box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25),
            0px -1px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
          font-size: 15px;
          font-weight: 400;
          margin: 57px 0 -1px;
          padding: 11px 27px 19px 12px;
        }
        .smart-bin-image {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .title {
          margin: 20px 0 0 12px;
          font: 700 20px Roboto, sans-serif;
        }
        .description {
          font-family: Roboto, sans-serif;
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
          font-family: Roboto, sans-serif;
          border-radius: 5px;
          box-shadow: 0px 0.05px 2px 0px rgba(0, 0, 0, 0.25) inset;
          background-color: #fff;
          width: 329px;
          max-width: 100%;
          color: rgba(0, 0, 0, 0.3);
          margin-bottom: 15px;
          padding: 11px 33px 11px 12px;
        }
        .submit-button {
          font-family: Roboto, sans-serif;
          border-radius: 20px;
          box-shadow: 0px 0.05px 2px 1px rgba(0, 0, 0, 0.25);
          background-color: #fff;
          align-self: center;
          width: 199px;
          max-width: 100%;
          text-align: center;
          margin: 27px 0 17px;
          padding: 12px 60px;
        }
      `}</style>
    </>
  );
}