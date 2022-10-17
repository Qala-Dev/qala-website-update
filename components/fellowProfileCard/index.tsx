import P from "~/components/resuable/paragraph";

interface Props {
  image: string;
  name: string;
  role: string;
}
export default function FellowProfileCard({ image, name, role }: Props) {
  return (
    <div className="flex flex-col w-[10.25rem] lg:w-[15.5rem] mt-[3rem] lg:mt-[5.5rem]">
      <img src={image} alt={name} className="" />
      <div className=" mt-3 lg:mt-8">
        <P>{name}</P>
        <p className=" font-semibold text-xs lg:text-base text-nav-blue dark:text-nav-white">
          {role}
        </p>
        <div className="flex items-center mt-[0.875rem] lg:mt-4">
          <div className="flex items-center justify-center mr-2 lg:mr-6">
            <div className="w-6 h-6 lg:h-8 lg:w-8 rounded flex items-center justify-center bg-brown dark:bg-light-bg mr-1 lg:mr-2 cursor-pointer">
              <img src="./github.svg" alt="Github" />
            </div>
            <div className="w-6 h-6 lg:h-8 lg:w-8 rounded flex items-center justify-center bg-brown dark:bg-light-bg cursor-pointer">
              <img src="./meduim.svg" className=" dark:hidden" />
              <img
                src="./dark-meduim.svg"
                alt="Meduim"
                className="hidden dark:flex"
              />
            </div>
          </div>
          <div className="rounded border border-nav-blue dark:border-light-bg cursor-pointer px-[0.875rem] py-[3px] lg:px-[1.125rem] lg:py-[0.34rem]">
            <p className="text-xs lg:text-sm text-nav-blue dark:text-light-bg">
              View Profile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
