interface Props {
  date: string;
  author: string;
  topic: string;
  description: string;
}
export default function FellowBlog({
  date,
  author,
  topic,
  description,
}: Props) {
  return (
    <div className="w-full flex flex-col p-[1.125rem] lg:p-4 rounded-lg  bg-dark-grey dark:bg-dark-fellow mt-4 cursor-pointer hover:bg-fellow_hover dark:hover:bg-primary-9">
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
    </div>
  );
}
