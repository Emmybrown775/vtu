import Layout from "../../components/Layout/Layout";
import AppInput from "../../components/Common/AppInput";
import AppButton from "../../components/Common/AppButton";

function ChangePin() {
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-xl text-blue-950">Change Pin</h1>
          <h2 className="text-gray-500">Home / Change Pin</h2>
        </div>
        <div className="bg-white my-6 px-6 py-7 md:w-[80%] rounded-lg shadow-lg">
          <AppInput
            label="Password"
            isDigit={false}
            name="current_password"
            readonly={false}
          />
          <AppInput
            label="New Pin"
            isDigit={false}
            name="new_pin"
            readonly={false}
          />

          <AppButton title="Change" />
        </div>
      </Layout>
    </>
  );
}

export default ChangePin;
