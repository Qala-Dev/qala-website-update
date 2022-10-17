import Button from "~/components/resuable/button";
import H1 from "~/components/resuable/H1";
import P from "~/components/resuable/paragraph";
import SectionTitle from "~/components/resuable/sectionTitle";
import FellowsData from "../fellows_data/data.json";
import FellowProfileCard from "~/components/fellowProfileCard";

export default function Fellows() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="px-4 lg:px-0 py-16 lg:py-32 lg:w-[40.3rem] flex flex-col items-center justify-center">
          <H1>Qala Fellows</H1>
          <P className="text-center mt-4 lg:mt-6">
            The Qala community is made up of hundreds of African software
            developers making the transition to building for Bitcoin and
            Lightning. Meet the fellows who have completed the Qala 13-weeks
            fellowship.
          </P>
          <div className="flex mt-16 flex-col">
            <p className="font-light text-xl lg:text-[2.5rem] lg:leading-[2.9rem] text-center text-nav-blue dark:text-primary-1">
              Apply to join the Qala community and potentially become a fellow
            </p>
            <div className="w-full flex items-center justify-center mt-6 lg:mt-12">
              <div className="w-[10.25rem] lg:w-[12.4rem]">
                <Button>Apply here</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 lg:py-32 bg-fellow dark:bg-dark-fellow items-center w-full flex flex-col lg:px-[10.94rem] px-4">
        <div className="flex flex-row items-center justify-center lg:justify-between w-full">
          <div className="hidden lg:flex h-[2px] w-[14rem] bg-blue-main"></div>
          <SectionTitle className="text-center">
            November 2021 Qala Fellows
          </SectionTitle>
          <div className="hidden lg:flex h-[2px] w-[14rem] bg-blue-main"></div>
        </div>
        <div className="flex justify-between flex-wrap">
          {FellowsData.map((fellow) => (
            <FellowProfileCard
              name={fellow.name}
              image={fellow.image}
              role={fellow.role}
            />
          ))}
        </div>
      </div>
      <div className="py-16 lg:py-32 items-center w-full flex flex-col lg:px-[10.94rem] px-4">
        <div className="flex flex-row items-center justify-center lg:justify-between w-full">
          <div className="hidden lg:flex h-[2px] w-[14rem] bg-blue-main"></div>
          <SectionTitle className="text-center">
            April 2022 Qala Fellows
          </SectionTitle>
          <div className="hidden lg:flex h-[2px] w-[14rem] bg-blue-main"></div>
        </div>
        <div className="flex justify-between flex-wrap">
          {FellowsData.map((fellow) => (
            <FellowProfileCard
              name={fellow.name}
              image={fellow.image}
              role={fellow.role}
            />
          ))}
        </div>
      </div>
      <div className="py-16 lg:py-32 bg-fellow dark:bg-dark-fellow items-center w-full flex flex-col lg:px-[10.94rem] px-4">
        <div className="flex flex-row items-center justify-center lg:justify-between w-full">
          <div className="hidden lg:flex h-[2px] w-[14rem] bg-blue-main"></div>
          <SectionTitle className="text-center">
            June 2022 Qala Fellows
          </SectionTitle>
          <div className="hidden lg:flex h-[2px] w-[14rem] bg-blue-main"></div>
        </div>
        <div className="flex justify-between flex-wrap">
          {FellowsData.map((fellow) => (
            <FellowProfileCard
              name={fellow.name}
              image={fellow.image}
              role={fellow.role}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
