import Layout from "../../components/Layout/Layout";

function Profile() {
  return (
    <>
      <Layout>
        <div className="pb-5">
          <h1 className="text-xl text-blue-950"> Profile</h1>
          <h2 className="text-gray-500">Home / Users / Profile</h2>
        </div>
        <div className=" bg-white px-5 py-7 rounded-lg shadow-lg">
          <div className="text-lg  border-b border-gray-300">
            <h1 className="text-blue-600 border-b-2 w-min px-3">Overview</h1>
          </div>
          <h1 className="pt-4 text-xl text-blue-950 font-bold">
            Profile Details
          </h1>
          <table className="hidden lg:block table-fixed border-separate border-spacing-y-5 w-full">
            <tr>
              <td className="lg:w-[400px] text-gray-500">Full Name</td>
              <td>Emmanuel Elumeze</td>
            </tr>
            <tr className="">
              <td className="w-[400px] text-gray-500">Email</td>
              <td>elumezeemma@gmail.com</td>
            </tr>
            <tr className="">
              <td className="w-[400px] text-gray-500">Username</td>
              <td>emmybrown775</td>
            </tr>
            <tr className="">
              <td className="w-[400px] text-gray-500">Phone Number</td>
              <td>07010891180</td>
            </tr>
          </table>

          <table className="md:hidden table-fixed border-separate border-spacing-y-5 w-full">
            <tr>
              <td>
                <div>
                  <h2 className="text-gray-500">Full Name</h2>
                  <h2>Emmanuel Elumeze</h2>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                <div>
                  <h2 className="text-gray-500">Email</h2>
                  <h2>elumezeemma@gmail.com</h2>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                <div>
                  <h2 className="text-gray-500">Username</h2>
                  <h2>emmybrown775</h2>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                <div>
                  <h2 className="text-gray-500">Phone Number</h2>
                  <h2>07010891180</h2>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </Layout>
    </>
  );
}

export default Profile;
