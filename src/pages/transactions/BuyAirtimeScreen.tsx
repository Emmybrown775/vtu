import Layout from "../../components/Layout/Layout";
import AppDropDown from "../../components/Common/AppDropDown";
import { Options } from "../../types/types";
import AppButton from "../../components/Common/AppButton";
import AppInput from "../../components/Common/AppInput";

function BuyAirtimeScreen() {
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
          <h1 className="text-xl text-blue-950">Buy Airtime</h1>
          <h2 className="text-gray-500">Home / Buy Airtime</h2>
        </div>
        <div className="bg-white my-6 px-6 py-7 md:w-[80%] rounded-lg shadow-lg">
          <AppDropDown title="Mobile Network" options={mobileNetworkOptions} />
          <AppInput label="Amount" name="amount" readonly={false} />
          <AppInput label="Mobile Number" name="number" readonly={false} />

          <AppButton title="Buy" />
        </div>
      </Layout>
    </>
  );
}

export default BuyAirtimeScreen;
