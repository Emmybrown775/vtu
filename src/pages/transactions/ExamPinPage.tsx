import Layout from "../../components/Layout/Layout";
import { Options } from "../../types/types";
import AppDropDown from "../../components/Common/AppDropDown";
import AppInput from "../../components/Common/AppInput";
import AppButton from "../../components/Common/AppButton";

function ExamPinPage() {
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
          <h1 className="text-xl text-blue-950">Exam Pin</h1>
          <h2 className="text-gray-500">Home / Exam Pin</h2>
        </div>
        <div className="bg-white my-6 px-6 py-7 md:w-[80%] rounded-lg shadow-lg">
          <AppDropDown title="Exam" options={mobileNetworkOptions} />
          <AppInput label="Price" name="amount" readonly={true} />

          <AppButton title="Buy" />
        </div>
      </Layout>
    </>
  );
}

export default ExamPinPage;
