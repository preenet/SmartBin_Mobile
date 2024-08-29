import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ForgotPassword from './components/Forgot-password/ForgotPassword';
import Home from './components/Home/Home';
import Stat from './components/Stat/Stat';
import Settings from './components/Stat/Settings';
import RedeemShop from './components/RedeemShop/RedeemShop';
import ProductDetail from './components/RedeemShop/ProductDetail';
import EditProfile from './components/Stat/EditProfile';
import PrivacySettings from './components/Stat/PrivacySettings';
import NotificationSettings from './components/Stat/NotificationSettings';
import UpdateSettings from './components/Stat/UpdateSettings';
import HelpCenter from './components/Stat/HelpCenter';
import TermsAndConditions from './components/Stat/TermsAndConditions';
import AllTransactions from './components/Home/all-transactions';
import AllRewards from './components/RedeemShop/AllRewards';
import AdminControlPanel from './components/Admin/AdminControlPanel';
import UserManagement from './components/Admin/UserManagement';
import UserDetail from './components/Admin/UserDetail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stat" element={<Stat />} />
          <Route path="/redeem-shop" element={<RedeemShop />} />
          <Route path="/redeem-shop/:productId" element={<ProductDetail />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/privacy-settings" element={<PrivacySettings />}></Route>
          <Route path="/notification-settings" element={<NotificationSettings />}></Route>
          <Route path="/update-settings" element={<UpdateSettings />}></Route>
          <Route path="/help-center" element={<HelpCenter />}></Route>
          <Route path="/terms-and-conditions" element={<TermsAndConditions />}></Route>
          <Route path="/all-transactions" element={<AllTransactions />}></Route>
          <Route path="/all-rewards" element={<AllRewards />}></Route>
          <Route path="/admin-control-panel" element={<AdminControlPanel />}></Route>
          <Route path="/user-management" element={<UserManagement />}></Route>
          <Route path="/user-management/:userId" element={<UserDetail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
