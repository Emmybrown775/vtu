import Layout from "../../components/Layout/Layout";
import AppInput from "../../components/Common/AppInput";
import AppButton from "../../components/Common/AppButton";

function ChangePassword() {
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-xl text-blue-950">Change Password</h1>
          <h2 className="text-gray-500">Home / Change Password</h2>
        </div>
        <div className="bg-white my-6 px-6 py-7 md:w-[80%] rounded-lg shadow-lg">
          <AppInput
            label="Current Password"
            isDigit={false}
            name="current_password"
            readonly={false}
          />
          <AppInput
            label="New Password"
            isDigit={false}
            name="new_password"
            readonly={false}
          />
          <AppInput
            isDigit={false}
            label="Re-enter New Password"
            name="new_password"
            readonly={false}
          />

          <AppButton title="Change" />
        </div>
      </Layout>
    </>
  );
}

export default ChangePassword;
