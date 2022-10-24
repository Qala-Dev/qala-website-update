interface Props {
  label: string;
  id: string;
  value: string;
}
export default function Checkbox({ label, id, value }: Props) {
  return (
    <div className="flex items-center">
      <input type="checkbox" value={value} id={id} />
      <label
        htmlFor={id}
        className="text-sm lg:text-lg ml-3 dark:text-light-blue text-nav-blue"
      >
        {label}
      </label>
    </div>
  );
}
