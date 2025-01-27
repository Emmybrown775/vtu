import Button from "../Common/Button";
function Header() {
  return (
    <>
      <div className="flex justify-between items-center pt-20 px-24">
        <h1>Hello</h1>
        <div className="lg:flex gap-10 items-center hidden">
          <div className="flex gap-10 text-[18px]">
            <a>Home</a>
            <a>About</a>
            <a>Services</a>
            <a>Contact</a>
          </div>
          <div className="flex text-[18px] gap-8">
            <button className="bg-white py-3 px-9 rounded-4xl">Login</button>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
