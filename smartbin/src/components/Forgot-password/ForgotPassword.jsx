import * as React from "react";

export default function Forgot() {
  return (
    <>
      <section className="main-container">
        <header className="header">SMART BIN ICON</header>
        <div className="registration-container">
          <h1 className="title">รีเซ็ตรหัสผ่านของคุณ</h1>
          <p className="description">
            ป้อนหมายเลขโทรศัพท์ของคุณ ที่ลงทะเบียนไว้กับ Smart Bin ที่นี่
          </p>
          <form className="form">
            {/* <label className="label" htmlFor="phoneNumberInput">
              หมายเลขโทรศัพท์
            </label> */}
            <input
              className="input"
              type="tel"
              id="phoneNumberInput"
              placeholder="หมายเลขโทรศัพท์"
              aria-label="หมายเลขโทรศัพท์"
            />
            <button className="submit-button" type="submit">
              ยืนยัน
            </button>
          </form>
        </div>
      </section>
      <style jsx>{`
        :root {
          --primary-color: #9E76B4;
          --primary-color-container: #fff;
          --secondary-color: #000;
          --secondary-color-font: #fff;
          --font-family: 'Mitr', sans-serif;
          --font-family-secondary: 'Roboto', sans-serif;
          --font-size-base: 18px;
          --font-size-large: 18px;
          --font-size-small: 16px;
          --border-radius: 20px;
          --box-shadow: 0px 0.05px 2px 1px rgba(0, 0, 0, 0.25);
          --box-shadow-button: 0px 1px 1px rgba(0, 0, 0, 0.25), 0px -1px 1px rgba(0, 0, 0, 0.25);
        }

        .main-container {
          background-color: var(--primary-color-container);
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
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow-button);
          background-color: var(--primary-color-container);
          align-self: center;
          margin-top: 19px;
          width: 115px;
          max-width: 100%;
          color: var(--secondary-color);
          text-align: center;
          justify-content: center;
          padding: 12px 17px;
          font: 700 16px var(--font-family);
        }

        .registration-container {
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow-button);
          background-color: var(--primary-color-container);
          display: flex;
          margin-top: 20px;
          max-width: 480px;
          width: 100%;
          flex-direction: column;
          padding: 10px 17px;
        }

        .title {
          color: var(--secondary-color);
          font: 700 25px var(--font-family);
          margin-bottom: 0px;
        }

        .description {
          font-family: var(--font-family);
          margin: 5px 0;
          margin-bottom: 0px;
          color: var(--secondary-color);
          font-size: 16px;
        }

        .form {
          display: flex;
          flex-direction: column;
        }

        .label {
          color: var(--secondary-color);
          margin-top: 10px;
          font: 600 15px var(--font-family);
        }

        .input {
          border-radius: 10px;
          box-shadow: var(--box-shadow) inset;
          border: none;
          background-color: var(--primary-color-container);
          margin-top: 6px;
          align-items: start;
          color: var(--secondary-color);
          justify-content: center;
          padding: 11px 12px;
          font: 400 15px var(--font-family);
        }

        .submit-button {
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow-button);
          background-color: var(--primary-color);
          align-self: center;
          margin-top: 15px;
          width: 199px;
          max-width: 100%;
          align-items: center;
          border: none;
          color: var(--secondary-color-font);
          text-align: center;
          justify-content: center;
          padding: 12px 60px;
          font: 400 15px var(--font-family);
        }
      `}</style>
    </>
  );
}
