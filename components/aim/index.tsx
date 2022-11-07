interface Props {
  title: string;
  text: string;
  step: string;
  className?: string;
  titleClass?: string;
}
export default function Aim({
  title,
  text,
  step,
  className,
  titleClass,
}: Props) {
  return (
    <div className={`flex w-full lg:w-[33.31rem] ${className}`}>
      <div className="mr-4 lg:mr-6 flex flex-col items-center">
        <div className="min-h-[3rem] w-12 lg:min-h-[5rem] lg:w-20 rounded-full flex items-center justify-center border lg:border-[3px] border-qala-secondary">
          <p className="font-Gilroy font-extrabold text-2xl lg:text-[2.5rem] text-qala-secondary m-0 p-0">
            {step}
          </p>
        </div>
        <div className="w-[1px] lg:w-[3px] h-full bg-qala-secondary"></div>
      </div>
      <div className="flex flex-col">
        <h4
          className={`text-qala-secondary font-semibold text-base lg:text-2xl mb-4 ${titleClass}`}
        >
          {title}
        </h4>
        <p className="text-light-bg lg:font-semibold text-base lg:text-lg">
          {text}
        </p>
      </div>
    </div>
  );
}
