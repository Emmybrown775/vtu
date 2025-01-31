import { ChangeEvent, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AppButton from "../../components/Common/AppButton";

function FundWallet() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return (
    <>
      <Layout>
        <div>
          <h1 className="text-xl text-blue-950">Fund Wallet</h1>
          <h2 className="text-gray-500">Home / Fund Wallet</h2>
        </div>

        <div className="lg:w-[50%] mt-5 bg-white px-6 pt-9 pb-10 shadow-lg rounded-lg">
          {selectedOption != "transfer" ? (
            <div>
              <h2>Method</h2>
              <select
                onChange={handleOptionChange}
                value={selectedOption}
                className="border rounded border-y-gray-500 md:w-[80%] w-[100%] px-4 py-1"
              >
                <option value="" className="bg-blue-950  text-white">
                  --Select Method--
                </option>
                <option value="transfer" className="bg-blue-950 text-white">
                  Bank Transfer
                </option>
                <option value="card" className="bg-blue-950 text-white">
                  ATM Card
                </option>
              </select>

              {selectedOption == "card" && (
                <div className="pt-5">
                  <label className="block" htmlFor="amount">
                    Amount
                  </label>
                  <input
                    className="border border-gray-500 px-3 py-1 md:w-[80%] w-[100%] rounded-md outline-none"
                    id="amount"
                    name="amount"
                    placeholder="Amount"
                    type="number"
                  />

                  <div className="pt-5">
                    <AppButton title="Next" />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h1 className="text-blue-950">Account Details</h1>
              <p className="text-sm text-gray-500">
                Your wallet will be funded as soon as you make transfer to any
                of the above bank details. Gateway charges of 1.7% will be
                deducted.
              </p>

              <div className="py-3">
                <label className="block" htmlFor="bankName">
                  Bank Name
                </label>
                <input
                  className="border border-gray-500 text-gray-500 px-3 py-1 md:w-[80%] w-[100%] rounded-md outline-none"
                  id="bankName"
                  name="bankName"
                  value={"Fidelity Bank"}
                  readOnly={true}
                />
              </div>

              <div className="pb-5 ">
                <label className="block" htmlFor="accountName">
                  Account Name
                </label>
                <input
                  className="border border-gray-500 text-gray-500 px-3 py-1 md:w-[80%] w-[100%] rounded-md outline-none"
                  id="accountName"
                  name="accountName"
                  value={"Elumeze Emmanuel"}
                  readOnly={true}
                />
              </div>

              <div className="pb-5">
                <label className="block" htmlFor="accountNumber">
                  Account Number
                </label>
                <input
                  className="border border-gray-500 text-gray-500 px-3 py-1 md:w-[80%] w-[100%] rounded-md outline-none"
                  id="accountNumber"
                  name="accountNumber"
                  value={"673698838"}
                  readOnly={true}
                />
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export default FundWallet;
