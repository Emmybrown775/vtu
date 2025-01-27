function Footer() {
  return (
    <>
      <div className="bg-blue-950 px-7 mt-36 pt-32 text-center">
        <h3 className="text-xl pb-7 text-gray-500">
          Subscribe to get our Newsletter
        </h3>
        <input
          type="email"
          placeholder="Your Email"
          className="border-2 outline-0 rounded-full px-3 py-2 border-gray-500 text-lg text-gray-500"
        />
        <button className="ms-5 px-5 py-2 bg-blue-600 rounded-full text-white text-lg">
          Subscribe
        </button>
        <div className="flex text-gray-500 items-center justify-center  py-7">
          <a>Carrers</a>
          <div className="h-4 w-px bg-gray-500 mx-2"></div>
          <a>Privacy Policy</a>
          <div className="h-4 w-px bg-gray-500 mx-2"></div>

          <a>{`Terms & Conditions`}</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
