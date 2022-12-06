interface Props {
  title: string;
  date: string;
  author: string;
  description?: string;
  url: string;
  className?: string;
}
export default function Press({
  title,
  date,
  author,
  description,
  url,
  className,
}: Props) {
  return (
    <div
      className={`${className} px-[0.875rem] py-[1.125rem] lg:px-[1.125rem] lg:py-[1.125rem] w-full lg:w-[21.9rem] bg-dark-grey rounded-lg mb-4`}
    >
      <div className="flex justify-between items-center">
        <p className="text-nav-blue text-xs lg:text-base">by {author}</p>
        <p className="text-nav-blue text-xs lg:text-base">{date}</p>
      </div>
      <div className="mt-4 lg:mt-8">
        <h3 className="text-base lg:text-xl font-semibold text-blue-main">
          {title}
        </h3>
        {description && (
          <p className=" text-sm lg:text-base text-nav-blue mt-2 lg:mt-4">
            {description} <span className="font-bold">Read More</span>
          </p>
        )}
      </div>
      <div className="mt-[1.125rem] lg:mt-[1.625rem] flex items-center ml-auto">
        <img src="./share.svg" className="mr-3" />
        <p className="text-nav-blue text-base">Share</p>
      </div>
    </div>
  );
}
