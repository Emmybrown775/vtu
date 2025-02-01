import Layout from "../../components/Layout/Layout";
import AppInput from "../../components/Common/AppInput";
import AppButton from "../../components/Common/AppButton";

function HelpDesk() {
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-xl text-blue-950">Change Password</h1>
          <h2 className="text-gray-500">Home / Change Password</h2>
        </div>
        <div className="bg-white my-6 px-6 py-7 md:w-[80%] rounded-lg shadow-lg">
          <AppInput
            label="Email"
            isDigit={false}
            name="email"
            readonly={false}
          />
          <AppInput
            label="Subject"
            isDigit={false}
            name="subject"
            readonly={false}
          />
          <AppInput
            isDigit={false}
            label="Body"
            name="new_password"
            readonly={false}
            isBody={true}
          />

          <AppButton title="Submit" />
        </div>
      </Layout>
    </>
  );
}

export default HelpDesk;
