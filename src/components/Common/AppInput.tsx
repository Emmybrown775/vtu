interface AppInputInterface {
  label: string;
  name: string;
  readonly: boolean;
}

function AppInput({ label, name, readonly }: AppInputInterface) {
  return (
    <>
      <div className="py-5">
        <label className="block" htmlFor={name}>
          {label}
        </label>
        <input
          className="border border-gray-500 px-3 py-1 md:w-[80%] w-[100%] rounded-md outline-none"
          id={name}
          name={name}
          placeholder={label}
          type="number"
          readOnly={readonly}
        />
      </div>
    </>
  );
}

export default AppInput;
