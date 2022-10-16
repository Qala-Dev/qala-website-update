interface Props {
  placeholder: string;
  label: string;
}
export default function TextArea({ placeholder, label }: Props) {
  return (
    <div className="flex flex-col">
      <label className="text-sm lg:text-lg text-nav-blue dark:text-h1-grey mb-2">
        {label}
      </label>
      <textarea
        className="w-full text-sm lg:text-lg px-4 py-[0.7rem] rounded border text-nav-blue dark:text-h1-grey border-nav-blue dark:border-blue-main bg-transparent"
        placeholder={placeholder}
        rows={5}
      />
    </div>
  );
}
