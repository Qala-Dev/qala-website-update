import style from "./hire.module.css";
interface Props {
  image: string;
  step: string;
  description: string;
  title: string;
  className: string;
  small_image: string;
}
export default function HireStep({
  image,
  step,
  description,
  title,
  className,
  small_image,
}: Props) {
  return (
    <div
      className={`py-6 lg:py-10 px-3 lg:px-6 flex flex-col w-[10.75rem] lg:w-[17.1rem] ${className}`}
    >
      <div className="flex justify-between items-end">
        <h2
          className={`${style.hire} font-Gilroy font-extrabold text-h1-grey text-8xl lg:text-[7.23rem]`}
        >
          {step}
        </h2>
        <img src={image} alt="Arrow" className="mb-5 hidden lg:flex" />
        <img src={small_image} alt="Arror" className="lg:hidden mb-4" />
      </div>
      <h3 className="font-Gilroy font-extrabold text-sm lg:text-xl text-qala-secondary mt-4 min-h-[3.2rem] leading-[1.1rem] lg:min-h-[4.3rem] lg:leading-[1.44rem]">
        {title}
      </h3>
      <p className="text-sm lg:text-lg text-light-bg mt-6">{description}</p>
    </div>
  );
}
