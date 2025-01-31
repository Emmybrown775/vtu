import { ChangeEventHandler } from "react";
import { Options } from "../../types/types";

interface AppDropdownInterface {
  handleOptionChange?: ChangeEventHandler<HTMLSelectElement>;
  selectedOption?: string;
  title: string;
  options: Array<Options>;
}

function AppDropDown({
  handleOptionChange,
  selectedOption,
  title,
  options,
}: AppDropdownInterface) {
  return (
    <>
      <div className="py-3">
        <h2>{title}</h2>
        <select
          onChange={handleOptionChange}
          value={selectedOption}
          className="border rounded border-y-gray-500 md:w-[80%] w-[100%] px-4 py-1"
        >
          {options.map((option, index) => (
            <option
              key={index}
              value={option.value}
              className="bg-blue-950  text-white"
            >
              {option.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default AppDropDown;
