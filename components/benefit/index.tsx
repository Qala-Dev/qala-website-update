interface Props {
  heading: string;
  text: string;
  className?: string;
}

export default function Benefit({ heading, text, className }: Props) {
  return (
    <div
      className={`px-6 h-[19rem] lg:h-[25rem] flex flex-col pt-24 bg-blue-main dark:bg-dark-blue-main w-[16.5rem] mt-6 lg:mt-0 ${className}`}
    >
      <h4 className=" text-qala-secondary font-extrabold text-base lg:text-xl font-Gilroy">
        {heading}
      </h4>
      <p className="text-sm lg:text-lg text-nav-white mt-8">{text}</p>
    </div>
  );
}
