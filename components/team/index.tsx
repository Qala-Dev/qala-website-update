import Github from "~/components/resuable/github";
import Twitter from "~/components/resuable/twitter";
interface Props {
  image: string;
  name: string;
  description?: string;
  github: string;
  twitter: string;
  className?: string;
}

export default function Team({
  image,
  name,
  description,
  github,
  twitter,
  className,
}: Props) {
  return (
    <div
      className={`flex flex-col w-[10.25rem] lg:w-[15.5rem] mb-10 ${className}`}
    >
      <img src={image} alt={name} className="" />
      <div className="flex flex-col mt-4 lg:mt-8">
        <p className=" text-sm lg:text-lg font-semibold text-nav-blue dark:text-primary-1">
          {name}
        </p>
        {description && (
          <p className="text-xs lg:text-base text-nav-blue dark:text-primary-1 mt-1 h-[4.5rem] lg:h-[6rem]">
            {description}
          </p>
        )}
      </div>
      <div className="flex mt-3 lg:mt-6">
        <div className="mr-2">
          <Github link={github} />
        </div>
        <div>
          <Twitter link={twitter} />
        </div>
      </div>
    </div>
  );
}
