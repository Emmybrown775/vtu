import Layout from "../../components/Layout/Layout";
import { Options } from "../../types/types";
import AppDropDown from "../../components/Common/AppDropDown";
import AppInput from "../../components/Common/AppInput";
import AppButton from "../../components/Common/AppButton";

function TVSubscriptionPage() {
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
          <h1 className="text-xl text-blue-950">TV Subscription</h1>
          <h2 className="text-gray-500">Home / Tv Subscription</h2>
        </div>
        <div className="bg-white my-6 px-6 py-7 md:w-[80%] rounded-lg shadow-lg">
          <AppDropDown title="Company Name" options={mobileNetworkOptions} />
          <AppInput
            label="IUC/Smart card number"
            name="amount"
            readonly={false}
          />

          <AppButton title="Purchase" />
        </div>
      </Layout>
    </>
  );
}

export default TVSubscriptionPage;
