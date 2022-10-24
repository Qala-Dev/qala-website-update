interface Props {
  label: string;
  id: string;
  value: string;
  name: string;
  className?: string;
}
export default function RadioButton({
  value,
  id,
  name,
  label,
  className,
}: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      <input type="radio" value={value} id={id} name={name} />
      <label
        htmlFor={id}
        className="text-sm lg:text-lg ml-3 dark:text-light-blue text-nav-blue"
      >
        {label}
      </label>
    </div>
  );
}
