import { IconType } from "react-icons";
interface ServiceCardInterFace {
  title: string;
  subs: string;
  icon: IconType;
}

function ServicesCard({ title, subs, icon: Icon }: ServiceCardInterFace) {
  return (
    <>
      <div className="bg-white rounded-lg px-5 py-7 shadow-md">
        <div className="flex items-center gap-6">
          <Icon className="size-8 text-orange" />
          <div>
            <h1 className="text-2xl text-blue-950 font-bold">{title}</h1>
            <h2>{subs}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
