import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/user/Dashboard";
import Profile from "./pages/user/Profile";
import FundWallet from "./pages/user/FundWallet";
import BuyDataScreen from "./pages/transactions/BuyDataScreen";
import BuyAirtimeScreen from "./pages/transactions/BuyAirtimeScreen";
import TVSubscriptionPage from "./pages/transactions/TVSubscriptionPage";
import ExamPinPage from "./pages/transactions/ExamPinPage";
import ElectricityPage from "./pages/transactions/ElectricityPage";
import History from "./pages/transactions/History";
import ChangePassword from "./pages/settings/ChangePassword";
import ChangePin from "./pages/settings/ChangePin";
import HelpDesk from "./pages/settings/HelpDesk";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/fund-wallet" element={<FundWallet />} />
          <Route path="/data" element={<BuyDataScreen />} />
          <Route path="/airtime" element={<BuyAirtimeScreen />} />
          <Route path="/tv-subs" element={<TVSubscriptionPage />} />
          <Route path="/exam-pin" element={<ExamPinPage />} />
          <Route path="/electricity" element={<ElectricityPage />} />
          <Route path="/transaction-history" element={<History />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/change-pin" element={<ChangePin />} />
          <Route path="/help-desk" element={<HelpDesk />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
