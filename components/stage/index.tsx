import style from "./stage.module.css";
interface Props {
  stage: string;
  stageTitle: string;
  objective: string;
  stageIntro?: string;
  className?: string;
}
export default function Stage({
  stage,
  stageTitle,
  objective,
  stageIntro,
  className,
}: Props) {
  return (
    <div
      className={`flex flex-col w-[16.5rem] lg:w-[19.38rem] mt-8 lg:mt-0 ${className}`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col relative items-center lg:items-start">
          <h3
            className={`${style.stage} font-extrabold font-Gilroy text-8xl lg:text-[7.23rem] text-primary-3 dark:text-primary-7 text-center lg:text-left`}
          >
            0{stage}
          </h3>
          <p className=" absolute font-Gilroy font-extrabold text-lg lg:text-2xl text-blue-main bottom-2 text-center lg:text-left">
            Stage {stage}
          </p>
        </div>
        <p className="text-sm lg:text-lg font-bold text-nav-blue dark:text-primary-1 -mt-2 text-center lg:text-left">
          {stageTitle}
        </p>
      </div>
      <div className=" mt-4 lg:mt-8">
        <p className="font-bold text-nav-blue dark:text-primary-1 text-sm lg:text-base text-center lg:text-left">
          {stageIntro}
        </p>
        <p className="text-center lg:text-left text-sm lg:text-lg text-nav-blue dark:text-primary-1">
          <span className="italic font-semibold text-blue-main">
            objective -{" "}
          </span>{" "}
          {objective}
        </p>
      </div>
    </div>
  );
}
