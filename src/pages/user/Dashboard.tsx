import Layout from "../../components/Layout/Layout";
import { IoWalletOutline, IoWifi } from "react-icons/io5";
import AppButton from "../../components/Common/AppButton";
import ServicesCard from "../../components/Common/ServicesCard";
import { BiPhone, BiTv } from "react-icons/bi";
import { GiLightBulb } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";

function Dashboard() {
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-xl text-blue-950"> Dashboard</h1>
          <h2 className="text-gray-500">Home / Dashboard</h2>
        </div>

        <div className="px-5 mt-4 lg:w-[500px]  rounded-md py-5 flex items-center gap-6 bg-white shadow-md">
          <div className="bg-orange-100 flex items-center justify-center size-16 rounded-full">
            <IoWalletOutline className="size-10 text-orange" />
          </div>
          <div>
            <h2 className="text-gray-500 pb-1">Current Balance</h2>
            <h1 className="text-2xl pb-2 text-blue-950">N0.00</h1>
            <AppButton title="Fund Wallet" />
          </div>
        </div>

        {/* SERVICES */}
        <div className="text-gray-500 pt-5">
          <h2>Services</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            <ServicesCard title="Data" subs="Purchase" icon={IoWifi} />
            <ServicesCard title="Airtime" subs="Purchase" icon={BiPhone} />
            <ServicesCard title="Tv Subsribtion" subs="Purchase" icon={BiTv} />
            <ServicesCard title="Electricity" subs="Bills" icon={GiLightBulb} />
            <ServicesCard
              title="Exam Pin"
              subs="Purchase"
              icon={FaGraduationCap}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
