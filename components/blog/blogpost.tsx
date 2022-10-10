/* eslint-disable @next/next/no-img-element */
interface Props {
  lg_image: string;
  s_image: string;
  author: string;
  date: string;
  topic: string;
  description: string;
  views: string;
  tag: string;
}
export default function BlogPost({
  lg_image,
  s_image,
  author,
  date,
  topic,
  description,
  views,
  tag,
}: Props) {
  return (
    <div className="w-full flex flex-col lg:flex-row p-2 lg:p-4 rounded-lg h-[23.8rem] lg:h-[18rem] bg-dark-grey dark:bg-dark-fellow mb-8">
      <div className="relative mr-6">
        <img
          src={lg_image}
          alt="Blog"
          className="hidden lg:flex rounded max-w-[12.4rem]"
        />
        <img src={s_image} alt="" className="flex lg:hidden rounded" />
        <div className="absolute flex rounded border-r-[6px] border-b-[6px] top-0 border-dark-grey dark:border-fellow bg-blue-main dark:bg-weird-green px-[18px] py-1">
          <p className="text-sm text-nav-white dark:text-nav-blue">{tag}</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-nav-blue lg:text-base text-xs dark:text-light-blue">
          <p className="">
            By <span className=" underline">{author}</span>
          </p>
          <p>{date}</p>
        </div>
        <p className="mt-7 text-blue-main font-semibold text-base lg:text-[1.25rem]">
          {topic}
        </p>
        <p className="mt-4 lg:text-lg text-sm text-nav-blue dark:text-light-blue">
          {description} <span className=" font-bold">...read more</span>
        </p>
        <div className="flex mt-6 text-nav-blue dark:text-light-blue">
          <div className="flex items-center mr-4">
            <img src="./view.svg" alt="View" className="dark:hidden mr-2" />
            <img
              src="./view_dark.svg"
              alt="View"
              className="hidden dark:flex mr-2"
            />
            <p className="text-sm lg:text-base">{views}</p>
          </div>
          <div className="flex items-center">
            <img src="./share.svg" alt="View" className="dark:hidden mr-2" />
            <img
              src="./share_dark.svg"
              alt="View"
              className="hidden dark:flex mr-2"
            />
            <p className="text-sm lg:text-base">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}
