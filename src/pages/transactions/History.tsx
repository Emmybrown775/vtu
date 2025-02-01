import AppButton from "../../components/Common/AppButton";
import AppDropDown from "../../components/Common/AppDropDown";
import Layout from "../../components/Layout/Layout";
import { Options } from "../../types/types";

function History() {
  const mobileNetworkOptions: Options[] = [
    { title: "--Select Network--", value: "all" },
    { title: "Data History", value: "data" },
    { title: "Airtime History", value: "airtime" },
    { title: "Exam Pin History", value: "exam" },
    { title: "Tv Subs History", value: "tv" },
    { title: "Bill History", value: "bill" },
    { title: "Fund History", value: "fund" },
  ];
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-xl text-blue-950">History</h1>
          <h2 className="text-gray-500">Home / Buy Airtime</h2>
        </div>
        <div className="bg-white my-6 px-6 py-7 md:w-[80%] rounded-lg shadow-lg">
          <div className="lg:w-[50%]">
            <AppDropDown
              title="Mobile Network"
              options={mobileNetworkOptions}
            />
          </div>
          <div className="md:flex  justify-between items-center">
            <div className="flex py-3">
              <h2>Show</h2>
              <select className="border rounded-sm mx-2">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <h2>entries</h2>
            </div>
            <div className="flex gap-3 items-center">
              <label>Search:</label>
              <input className=" px-3 py-2 w-[100%] border rounded-sm" />
            </div>
          </div>
          <div className="overflow-x-auto w-[100%]">
            <table className="text-center lg:min-w-[100%] min-w-[700px]   mt-6">
              <thead>
                <tr>
                  <td className="font-bold">Transaction ID</td>
                  <td className="font-bold">Recipient</td>
                  <td className="font-bold">Mobile Network</td>
                  <td className="font-bold">Amount</td>
                  <td className="font-bold">Status</td>
                  <td className="font-bold">Date/Time</td>
                </tr>
              </thead>
              <tbody className="bg-gray-500">
                <tr className="py-3">
                  <td className="text-center py-3" colSpan={6}>
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="md:flex justify-between items-center">
            <div className="md:pt-0 pt-5">
              <h2>Showing 0 to 0 of 0 entries</h2>
            </div>
            <div className="flex gap-5">
              <AppButton title="Previous" />
              <AppButton title="Next" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default History;
