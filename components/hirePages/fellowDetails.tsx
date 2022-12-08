import FellowData from "../../fellows_data/data.json";
import Github from "~/components/resuable/github";
import Meduim from "~/components/resuable/meduim";
import LinkedIn from "~/components/resuable/linkedin";
import Twitter from "~/components/resuable/twitter";
import Skill from "~/components/resuable/skill";
import SubTitle from "~/components/resuable/subtitle";
import Paragraph from "~/components/resuable/paragraph";
import { useRouter } from "next/router";
import FellowBlog from "~/components/resuable/blog";

interface Props {
  fellowIndex: number;
  setCurrentPage: (page: number) => void;
}

interface Project {
  name: string;
  link: string;
}

export default function FellowDetails({ fellowIndex, setCurrentPage }: Props) {
  const fellowDetail = FellowData[fellowIndex];
  const skills: string[] = [
    "JavaScript",
    "ReactNative",
    "React",
    "Scala",
    "Python",
    "Android",
    "Vue",
    "Devops",
    "Data Engineer",
  ];

  const router = useRouter();

  const Projects: Project[] = [
    { name: "Fullstack JaveScript Bitcoin Wallet", link: "https://github.com" },
    { name: "Bitcoin Bank", link: "https://github.com" },
    { name: "Tora", link: "https://github.com" },
    { name: "TeamTREVLNpay", link: "https://github.com" },
  ];

  const handleProjectLink = (link: string) => {
    router.push(link);
  };

  return (
    <main className="px-4 lg:px-[10.9rem]">
      <div
        className="flex items-center mt-10 lg:mt-16 cursor-pointer"
        onClick={() => setCurrentPage(2)}
      >
        <img src="./back_icon.svg" alt="Back" className="mr-2" />
        <p className="text-sm lg:text-base text-nav-blue dark:text-primary-1">
          Back to Hire Page
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-8 lg:mt-16 lg:justify-between mb-20 lg:mb-60">
        <div className="w-full lg:w-[19.4rem] flex flex-col">
          <img src={fellowDetail.image} />
          <div className="flex flex-col mt-6 lg:mt-8">
            <p className=" text-base text-nav-blue dark:text-primary-1 lg:text-xl">
              {fellowDetail.name}
            </p>
            <p className="mt-1 text-nav-blue dark:text-primary-1 font-bold text-sm lg:text-lg">
              {fellowDetail.role}
            </p>
          </div>
          <div className="flex mt-4">
            <div className="mr-2">
              <Github link={fellowDetail.github} />
            </div>
            <div className="mr-2">
              <Meduim link={fellowDetail.medium} />
            </div>
            <div className="mr-2">
              <LinkedIn link={fellowDetail.linkedin} />
            </div>
            <div>
              <Twitter link={fellowDetail.twitter} />
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            {skills.map((skill, index) => (
              <div className="mr-2 mt-3" key={index}>
                <Skill skill={skill} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[40.25rem]">
          <div className="mt-8 md:mt-0">
            <SubTitle text="Technical background" />
            <Paragraph className="mt-4">{fellowDetail.background}</Paragraph>
          </div>
          <div className="mt-8">
            <SubTitle text="Why is Bitcoin important to you?" />
            <Paragraph className="mt-4">{fellowDetail.why_bitcoin}</Paragraph>
          </div>
          <div className="mt-8">
            <SubTitle text="What has been the best part about learning at Qala?" />
            <Paragraph className="mt-4">
              {fellowDetail.learning_at_qala}
            </Paragraph>
          </div>
          <div className="mt-8">
            <SubTitle text="Notable projects" />
            <ul className="mt-4">
              {fellowDetail.projects.map((project, index) => (
                <li
                  className=" italic list-disc text-nav-blue dark:text-primary-1 font-semibold text-sm md:text-lg ml-6"
                  key={index}
                >
                  <a href={project.link} className=" underline">
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col mt-8">
            <SubTitle text="Recent Medium articles" />
            <div className="flex flex-col">
              <FellowBlog
                date="07/7/2022"
                author="Raphael Osaze Eyerin"
                topic="How To Run Multiple Bitcoin Blockchain Networks On The Same Computer"
                description="I felt the need to write on this when someone asked me how he could run multiple Bitcoin networks on the same computer"
              />
              <FellowBlog
                date="13/6/2022"
                author="Raphael Osaze Eyerin"
                topic="Lightning Payment Channels"
                description="Payment channels are the backbone of the Lightning Network as they enable the sending and receiving of off-chain payments."
              />
              <FellowBlog
                date="04/6/2022"
                author="Raphael Osaze Eyerin"
                topic="Building A Bitcoin Bank That Supports Lightning Payments"
                description="In my previous Bitcoin bank article, I explained the concepts I used in building a simple Bitcoin bank, click on this link to read"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
