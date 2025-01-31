interface AppButtonProps {
  title: string;
}

function AppButton({ title }: AppButtonProps) {
  return (
    <>
      <div className="my-4">
        <button className="text-white px-3 py-2 rounded-sm bg-blue-950">
          {title}
        </button>
      </div>
    </>
  );
}

export default AppButton;
