import AppButton from "../../components/Common/AppButton";
import AppDropDown from "../../components/Common/AppDropDown";
import Layout from "../../components/Layout/Layout";
import { Options } from "../../types/types";
import AppInput from "../../components/Common/AppInput";

function BuyDataScreen() {
  const mobileNetworkOptions: Options[] = [
    { title: "--Select Network--", value: "mtn" },
    { title: "MTN", value: "mtn" },
    { title: "Airtel", value: "airtel" },
    { title: "GLO", value: "glo" },
    { title: "9mobile", value: "9mobile" },
  ];
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-xl text-blue-950">Buy Data</h1>
          <h2 className="text-gray-500">Home / Buy Data</h2>
        </div>
        <div className="bg-white my-6 px-6 py-7 md:w-[80%] rounded-lg shadow-lg">
          <AppDropDown title="Mobile Network" options={mobileNetworkOptions} />
          <AppDropDown title="Type" options={mobileNetworkOptions} />
          <AppDropDown title="Plan" options={mobileNetworkOptions} />
          <AppInput label="Price" name="number" readonly={true} />
          <AppDropDown title="Mobile Number" options={mobileNetworkOptions} />

          <AppButton title="Buy" />
        </div>
      </Layout>
    </>
  );
}

export default BuyDataScreen;
