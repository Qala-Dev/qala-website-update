import FellowOverwiewCard from "~/components/fellowOverviewCard";
import fellowsData from "../../fellows_data/data.json";
interface Props {
  setCurrentPage: (page: number) => void;
  setFellowIndex: (index: number) => void;
}

interface fellow {
  skills: string[];
  name: string;
  role: string;
  image: string;
  background: string;
}

export default function Fellows({ setCurrentPage, setFellowIndex }: Props) {
  const selectFellowHandler = (index: number) => {
    setFellowIndex(index);
    setCurrentPage(3);
  };
  return (
    <main>
      <div
        className="flex items-center px-4 lg:px-[10.9rem] mt-10 lg:mt-16 cursor-pointer"
        onClick={() => setCurrentPage(1)}
      >
        <img src="./back_icon.svg" alt="Back" className="mr-2" />
        <p className="text-sm lg:text-base text-nav-blue dark:text-primary-1">
          Back to Hire Page
        </p>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="font-Gilroy font-light mt-16 w-full lg:w-[48.4rem] text-xl lg:text-[2.5rem] lg:leading-[2.9rem] text-center">
          Check out our vast talent network of blockchain developers
        </h2>
      </div>
      <div className="flex flex-wrap px-4 lg:px-[10.9rem] justify-between mb-8 lg:mb-32">
        {fellowsData.map((fellow, index) => (
          <div onClick={() => selectFellowHandler(index)} key={index}>
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
