import P from "~/components/resuable/paragraph";
import GitHub from "~/components/resuable/github";
import Medium from "~/components/resuable/meduim";
import { useRouter } from "next/router";

interface Props {
  image: string;
  name: string;
  role: string;
  github: string;
  meduim: string;
  id: number;
}
export default function FellowProfileCard({
  image,
  name,
  role,
  github,
  meduim,
  id,
}: Props) {
  const router = useRouter();
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
            <div className="mr-1 lg:mr-2">
              <GitHub link={github} />
            </div>
            <Medium link={meduim} />
          </div>
          <div
            onClick={() => router.push(`/hire/fellows/${id}`)}
            className="rounded border border-nav-blue dark:border-light-bg cursor-pointer px-[0.875rem] py-[3px] lg:px-[1.125rem] lg:py-[0.34rem]"
          >
            <p className="text-xs lg:text-sm text-nav-blue dark:text-light-bg">
              View Profile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
