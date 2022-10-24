interface Props {
  label: string;
  type?: string;
  placeholder: string;
  labelSpan?: string;
}

export default function Input({
  label,
  type = "text",
  placeholder,
  labelSpan,
}: Props) {
  return (
    <div className="flex flex-col">
      <label className="text-sm lg:text-lg text-nav-blue dark:text-h1-grey mb-2 font-semibold">
        {label}{" "}
        <span className=" italic text-blue-main font-normal">{labelSpan}</span>
      </label>
      <input
        type={type}
        className="w-full text-sm lg:text-lg px-4 py-[0.7rem] rounded border text-nav-blue dark:text-h1-grey border-nav-blue dark:border-blue-main bg-transparent"
        placeholder={placeholder}
      />
    </div>
  );
}
