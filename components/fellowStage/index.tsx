/* eslint-disable @next/next/no-img-element */
interface Props {
  image: string;
  text: string;
  className: string;
}
export default function FellowStage({ image, text, className }: Props) {
  return (
    <div
      className={`flex justify-between mr-0 lg:mr-14 w-full mt-9 lg:mt-0 ${className}`}
    >
      <div className="relative min-h-[4.875rem] min-w-[4.875rem] lg:min-h-[7.75rem] lg:min-w-[7.75rem] mr-4">
        <div className="h-12 w-12 lg:h-16 mr-4 lg:w-16 rounded-full bg-primary-1 dark:bg-primary-9"></div>
        <div className="h-16 w-16 lg:h-24 left-[0.8rem] lg:w-24 absolute top-4 lg:top-6 lg:right-2">
          <img src={image} alt="holder" className="max-w-full max-h-full" />
        </div>
      </div>
      <p className="text-sm lg:text-lg text-nav-blue dark:text-primary-1">
        {text}
      </p>
    </div>
  );
}
