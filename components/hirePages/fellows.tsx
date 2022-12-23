import FellowOverwiewCard from "~/components/fellowOverviewCard";
import fellowsData from "../../fellows_data/data.json";
import { useRouter } from "next/router";

export default function Fellows() {
  const router = useRouter();
  return (
    <main>
      <div className="flex items-center px-4 lg:px-[10.9rem] mt-10 lg:mt-16 cursor-pointer">
        <img src="/back_icon.svg" alt="Back" className="mr-2" />
        <p
          className="text-sm lg:text-base text-nav-blue dark:text-primary-1"
          onClick={() => router.push("./")}
        >
          Back to Hire Page
        </p>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="font-Gilroy font-light mt-16 w-full lg:w-[48.4rem] text-xl lg:text-[2.5rem] lg:leading-[2.9rem] text-center">
          Check out our vast talent network of bitcoin developers
        </h2>
      </div>
      <div className="flex flex-wrap px-4 lg:px-[10.9rem] justify-between mb-8 lg:mb-32">
        {fellowsData.map((fellow, index) => (
          <div key={index} onClick={() => router.push(`./fellows/${index}`)}>
            <FellowOverwiewCard
              name={fellow.name}
              image={fellow.image}
              role={fellow.role}
              description={fellow.background}
              skills={fellow.skills}
              className={`lg:mt-16 mt-6`}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
