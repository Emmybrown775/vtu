import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/user/Dashboard";
import Profile from "./pages/user/Profile";
import FundWallet from "./pages/user/FundWallet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/fund-wallet" element={<FundWallet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
