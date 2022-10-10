/* eslint-disable @next/next/no-img-element */
interface Props {
  window: string;
  month: string;
}

export default function Window({ window, month }: Props) {
  return (
    <div className="h-[23rem] w-[16.4rem] lg:h-[24.9rem] lg:w-[22.1rem] flex flex-col justify-center items-center bg-blue lg:mx-4">
      <p className="text-center mb-2 w-[5.3rem] text-base lg:text-2xl font-light lg:w-[8rem] dark:text-dark text-dark-white">
        {window}
      </p>
      <img src="./arrow.svg" alt="Arrow" />
      <p className="text-center mt-2 font-extrabold text-[2rem] lg:text-[2.5rem] text-dark-white dark:text-white">
        {month}
      </p>
    </div>
  );
}
