import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useToken from "../../hooks/useToken";

export default function Settings() {
  const { getUser, updateToken } = useToken();
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from storage
    updateToken(null);

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <section className="p-4 flex flex-col gap-4">
      <header className="flex gap-2 items-center">
        <Link to="/stat">
          <button className="bg-purple-600 text-white rounded-full px-3 py-2 text-lg">←</button>
        </Link>
        <h1 className="font-bold text-xl">ตั้งค่า</h1>
      </header>

      <div className="flex flex-col gap-4 border p-4 rounded-md">
        <div className='flex flex-row justify-between items-center'>
        <span className="font-bold text-xl">{user?.username}</span>
        <Link to="/edit-profile" className="text-primary">แก้ไขข้อมูลส่วนตัว</Link>
        </div>


        <div className="flex flex-col gap-2">
          <Link to="/privacy-settings" className="border p-4 rounded-md text-left">
            ตั้งค่าความเป็นส่วนตัว
          </Link>
          <Link to="/notification-settings" className="border p-4 rounded-md text-left">
            การแจ้งเตือน
          </Link>
          <Link to="/update-settings" className="border p-4 rounded-md text-left">
            การอัพเดต
          </Link>
        </div>
        <hr></hr>
        <div className="flex flex-col gap-2">
          <Link to="/help-center" className="border p-4 rounded-md text-left">
            ศูนย์ความช่วยเหลือ
          </Link>
          <Link to="/terms-and-conditions" className="border p-4 rounded-md text-left">
            ข้อกำหนดและเงื่อนไข
          </Link>
          <button className="p-4 rounded-md text-left border text-red-500" onClick={handleLogout}>
            ออกจากระบบ
          </button>
        </div>
      </div>

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

        .settings-container {
          background-color: var(--primary-color-container);
          display: flex;
          flex-direction: column;
          max-width: 390px;
          margin: 0 auto;
          padding: 53px 17px;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          gap: 20px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-button {
          background-color: var(--primary-color);
          color: var(--secondary-color-font);
          border: none;
          padding: 10px;
          border-radius: var(--border-radius);
          cursor: pointer;
        }

        .title {
          font-family: var(--font-family);
          font-size: var(--font-size-large);
          font-weight: 700;
          color: var(--secondary-color);
        }

        .user-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--primary-color-container);
          border-radius: var(--border-radius);
          padding: 15px;
          box-shadow: var(--box-shadow);
        }

        .username {
          font-family: var(--font-family);
          font-size: var(--font-size-base);
          font-weight: 700;
          color: var(--secondary-color);
        }

        .edit-profile-link {
          font-family: var(--font-family);
          font-size: var(--font-size-small);
          color: var(--primary-color);
          text-decoration: none;
        }

        .settings-options, .support-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .settings-option {
          background-color: var(--primary-color-container);
          border-radius: var(--border-radius);
          padding: 15px;
          box-shadow: var(--box-shadow);
          font-family: var(--font-family);
          font-size: var(--font-size-base);
          color: var(--secondary-color);
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
