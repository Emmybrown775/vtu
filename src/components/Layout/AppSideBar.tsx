import { RxDashboard } from "react-icons/rx";
import SideBarLink from "../Common/SideBarLink";
import {
  IoHelp,
  IoPersonOutline,
  IoWalletOutline,
  IoWifi,
} from "react-icons/io5";
import { BiPhone, BiTv } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa6";
import { GiLightBulb } from "react-icons/gi";
import { AiOutlineHistory } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { IoMdCode } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

function AppSideBar() {
  return (
    <>
      <div className="bg-blue-950 h-lvh w-[400px] px-5 py-5">
        <SideBarLink title="Dashboard" icon={RxDashboard} />
        <SideBarLink title="Profile" icon={IoPersonOutline} />
        <SideBarLink title="Fund Wallet" icon={IoWalletOutline} />
        <h3 className="px-5 text-gray-500">Transactions</h3>
        <SideBarLink title="Buy Data" icon={IoWifi} />
        <SideBarLink title="Buy Airtime" icon={BiPhone} />
        <SideBarLink title="TV Subscription" icon={BiTv} />
        <SideBarLink title="Exam Pin" icon={FaGraduationCap} />
        <SideBarLink title="Electricity" icon={GiLightBulb} />
        <SideBarLink
          title="History"
          icon={AiOutlineHistory}
          dropDown={true}
          dropDownItems={[
            "Data History",
            "Airtime History",
            "Data Card History",
            "Exam Pin History",
            "TV Subs History",
            "Bill History",
            "Fund History",
          ]}
        />
        <SideBarLink
          title="Settings"
          icon={CiSettings}
          dropDown={true}
          dropDownItems={["Change Password", "Change Transaction Pin"]}
        />
        <SideBarLink title="Help Desk" icon={IoHelp} />
        <SideBarLink title="Developer Tools" icon={IoMdCode} />
        <SideBarLink title="Log Out" icon={FiLogOut} />
      </div>
    </>
  );
}

export default AppSideBar;
