import Header from "../components/Layout/Header";
import Button from "../components/Common/Button";
import Card from "../components/Common/Cards";
import { FaPlay } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import Footer from "../components/Layout/Footer";

function Home() {
  return (
    <>
      <div className="bg-orange-100 px-7">
        <Header />
        <div className="flex justify-between items-center lg:px-36">
          <div>
            <h1 className="text-5xl font-bold text-blue-950 pb-9">
              <span className="text-orange">Studying</span> Online is now much
              easier
            </h1>
            <p className="text-2xl font-normal pb-14 ">
              Skilline is an interesting platform that will teach you in more an
              attractive way
            </p>
            <Button />
          </div>
          <div>
            <img
              className="w-[911px] lg:block hidden "
              src="src/assets/person.png"
            />
          </div>
        </div>
      </div>

      <div className="text-center pt-20 px-7">
        <div className="lg:px-[545px]">
          <h1 className="font-bold text-4xl text-blue-950">
            All-In-One <span className="text-orange">Cloud Software.</span>
          </h1>
          <p className="text-xl pt-7 text-gray-500">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>
        <div className="grid lg:px-56 pt-24 lg:grid-cols-3 grig gap-14">
          <Card
            title="Online Billing, Invoicing, & Contracts"
            description="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
            color="bg-blue-950"
            icon={FaPlay}
          />
          <Card
            title="Easy Scheduling & Attendance Tracking"
            description="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
            color="bg-orange"
            icon={BiCalendar}
          />
          <Card
            title="Online Billing, Invoicing, & Contracts"
            description="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
            color="bg-blue-950"
            icon={FaPlay}
          />
        </div>
      </div>

      <div className="text-center pt-40 px-7">
        <div className="lg:px-[500px]">
          <h1 className="font-bold text-4xl text-blue-950">
            Our <span className="text-orange">Services</span>
          </h1>
          <p className="text-xl pt-7 text-gray-500">
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <div className="lg:px-44 text-start pt-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="src/assets/data.jpg" />
            </div>
            <div>
              <h1 className="font-bold text-4xl text-blue-950">
                Airtime/Data <span className="text-orange">Purchase</span>
              </h1>
              <p className="text-xl pt-7 text-gray-500">
                Skilline is a platform that allows educators to create online
                classes whereby they can store the course materials online;
                manage assignments, quizzes and exams; monitor due dates; grade
                results and provide students with feedback all in one place.
              </p>
            </div>
          </div>

          <div className="pt-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-bold text-4xl text-blue-950">
                Airtime/Data <span className="text-orange">Purchase</span>
              </h1>
              <p className="text-xl pt-7 text-gray-500">
                Skilline is a platform that allows educators to create online
                classes whereby they can store the course materials online;
                manage assignments, quizzes and exams; monitor due dates; grade
                results and provide students with feedback all in one place.
              </p>
            </div>
            <div>
              <img src="src/assets/data.jpg" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
