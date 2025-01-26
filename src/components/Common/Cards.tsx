import { IconType } from "react-icons";

interface CardProps {
  title: string;
  description: string;
  color: string;
  icon: IconType;
}

function Card({ title, description, color, icon: Icon }: CardProps) {
  return (
    <>
      <div className=" relative rounded-xl pt-28 px-14 pb-4 shadow-2xl">
        <div
          className={`absolute -top-8 left-[50%] -translate-x-[50%] ${color} w-min  px-3 py-3 rounded-full`}
        >
          <Icon className="size-10 text-white" />
        </div>
        <h1 className="text-2xl text-blue-950">{title}</h1>
        <p className="text-base pt-4 text-gray-500">{description}</p>
      </div>
    </>
  );
}

export default Card;
