import Header from "../components/Layout/Header";
import Card from "../components/Common/Cards";
import { BiWallet } from "react-icons/bi";
import Footer from "../components/Layout/Footer";
import { MdSpeed } from "react-icons/md";
import { GiPresent } from "react-icons/gi";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-orange-100 px-7 lg:pb-0 pb-10">
        <Header />
        <div id="home" className="flex justify-between items-center lg:px-36">
          <div>
            <h1 className="text-5xl font-bold text-blue-950 pb-9">
              <span className="text-orange">Better</span> Quick and reliable VTU
              services
            </h1>
            <p className="text-2xl font-normal pb-14 ">
              A technology platform delivering high-quality digital solutions at
              the best possible price.
            </p>
            <Link
              to="/signup"
              className="bg-orange text-white py-3 px-9 rounded-4xl"
            >
              SignUp
            </Link>
          </div>
          <div>
            <img
              className="w-[911px] lg:block hidden "
              src="images/person.png"
            />
          </div>
        </div>
      </div>

      <div id="about" className="text-center pt-20 px-7">
        <div className="lg:px-[545px]">
          <h1 className="font-bold text-4xl text-blue-950">
            Why <span className="text-orange">Choose Us ?</span>
          </h1>
        </div>
        <div className="grid lg:px-56 pt-24 lg:grid-cols-3 grig gap-14">
          <Card
            title="Affordable Pricing"
            description="Get the best deals on airtime, data, and bill payments without breaking the bank. Enjoy competitive rates and maximum value for your money."
            color="bg-blue-950"
            icon={BiWallet}
          />
          <Card
            title="Fast & Reliable Transactions"
            description="Experience instant top-ups and seamless transactions with our secure and efficient platform. No delays, no hassles."
            color="bg-orange"
            icon={MdSpeed}
          />
          <Card
            title="Exclusive Rewards & Bonuses"
            description="Get rewarded for every transaction! Enjoy cashback, discounts, and special offers as you save more with us."
            color="bg-blue-950"
            icon={GiPresent}
          />
        </div>
      </div>

      <div id="services" className="text-center pt-40 px-7">
        <div className="lg:px-[500px]">
          <h1 className="font-bold text-4xl text-blue-950">
            Our <span className="text-orange">Services</span>
          </h1>
        </div>
        <div className="lg:px-44 text-start pt-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="images/data.jpg" />
            </div>
            <div>
              <h1 className="font-bold text-4xl text-blue-950">
                Airtime/Data <span className="text-orange">Purchase</span>
              </h1>
              <p className="text-xl pt-7 text-gray-500">
                Instantly recharge airtime and data for all networks at
                unbeatable prices.
              </p>
            </div>
          </div>

          <div className="pt-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-bold text-4xl text-blue-950">
                TV <span className="text-orange">Subscription</span>
              </h1>
              <p className="text-xl pt-7 text-gray-500">
                Easily renew your DStv, GOtv, and Startimes subscriptions
                without stress.
              </p>
            </div>
            <div>
              <img src="images/tv.avif" />
            </div>
          </div>

          <div className="pt-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img className="size-full" src="images/bills.jpg" />
            </div>

            <div>
              <h1 className="font-bold text-4xl text-blue-950">
                Bill <span className="text-orange">Payments</span>
              </h1>
              <p className="text-xl pt-7 text-gray-500">
                Easily pay electricity, TV subscriptions, and other bills in
                just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default Home;
