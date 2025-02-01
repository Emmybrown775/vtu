interface AppInputInterface {
  label: string;
  name: string;
  readonly: boolean;
  isDigit?: boolean;
  isBody?: boolean;
}

function AppInput({
  label,
  name,
  readonly,
  isDigit = true,
  isBody = false,
}: AppInputInterface) {
  return (
    <>
      <div className="py-5">
        <label className="block" htmlFor={name}>
          {label}
        </label>
        {!isBody ? (
          <input
            className="border border-gray-500 px-3 py-1 md:w-[80%] w-[100%] rounded-md outline-none"
            id={name}
            name={name}
            placeholder={label}
            type={isDigit ? "number" : "password"}
            readOnly={readonly}
          />
        ) : (
          <textarea
            className="border border-gray-500 px-3 py-1 md:w-[80%] w-[100%] rounded-md outline-none"
            id={name}
            name={name}
            placeholder={label}
            readOnly={readonly}
          />
        )}
      </div>
    </>
  );
}

export default AppInput;
