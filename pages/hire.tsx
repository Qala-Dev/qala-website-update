import H1 from "~/components/resuable/H1";
import Button from "~/components/resuable/button";
import P from "~/components/resuable/paragraph";
import FellowOverviewCard from "~/components/fellowOverviewCard";
import HireStep from "~/components/hireStep";
import Input from "~/components/resuable/input";
import Checkbox from "~/components/resuable/checkbox";
import RadioButton from "~/components/resuable/radioButton";

const fellowData = [
  {
    image: "./fellows/omoniyi.png",
    name: "Omoniyi Ilesanmi",
    role: "Fullstack Developer",
  },
  {
    image: "./fellows/collins.png",
    name: "Collin Rukundo",
    role: "Fullstack Developer",
  },
  {
    image: "./fellows/enie.png",
    name: "Enigbe Ochekliye",
    role: "Fullstack Developer",
  },
];

const HireSteps = [
  {
    step: "1",
    name: "Tell us the skills you need",
    image: "./arrow_hire.svg",
    small_image: "./arrow_hire_s.svg",
    description:
      "We will schedule a call to learn more about your needs/requirements.",
    className: "bg-skill_blue",
  },
  {
    step: "2",
    name: "We match you with best talents that fit your needs",
    image: "./arrow_hire.svg",
    small_image: "./arrow_hire_s.svg",
    description: "Get a list of pre-vetted candidates within days.",
    className: "bg-primary-7",
  },
  {
    step: "3",
    name: "Schedule interviews",
    image: "./arrow_hire.svg",
    description: "Meet and select the developers you like.",
    className: "bg-interview-blue",
    small_image: "./arrow_hire_s.svg",
  },
  {
    step: "4",
    name: "Begin your trial",
    image: "./arrow_hire.svg",
    description: "Start building with a risk-free trial period of two weeks.",
    className: "bg-primary-9",
    small_image: "./arrow_hire_s.svg",
  },
];

const Skills = [
  { skill: "React", id: "react", value: "React" },
  { skill: "Android", id: "android", value: "Android" },
  { skill: "Devops", id: "devops", value: "Devops" },
  {
    skill: "Not sure, need advice",
    id: "need_help",
    value: "Not sure, need advice",
  },
  { skill: "Python", id: "python", value: "Python" },
  { skill: "Vue", id: "vue", value: "Vue" },
  { skill: "Data Engineer", id: "data_engineer", value: "Data Engineer" },
];

export default function Hire() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="px-4 lg:px-0 py-16 lg:py-32 lg:w-[48.4rem] flex flex-col items-center justify-center">
          <H1 className="leading-[2.75rem] lg:leading-[4.75rem]">
            Hire the top Bitcoin and Lightning Developers in Africa!{" "}
          </H1>
          <P className="text-center mt-4 lg:mt-6">
            Our developers help serve small start-ups and large corporations
            alike. When you hire a Qala Bitcoin developer, you get a
            professional who can execute projects quickly and efficiently.
          </P>
        </div>
      </div>
      <div className="flex px-4 lg:px-[10.9rem] flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col w-full lg:max-w-[40.25rem]">
          <div className="hidden lg:flex">
            <img src="./hire.png" alt="Hire" />
          </div>
          <div className="flex lg:hidden items-center justify-center">
            <img src="./hire_mobile.png" alt="Hire mobile" />
          </div>
          <div className="flex flex-col mt-4 lg:mt-11">
            <p className="text-center lg:text-left font-Gilroy text-sm text-nav-blue dark:text-primary-1 lg:text-2xl font-light">
              At Qala, we have trained dozens of African software developers on
              Bitcoin and Lightning while taking a select few into our dedicated
              13 weeks building fellowship in readiness for employment
            </p>
            <p className="text-center lg:text-left font-Gilroy text-sm text-nav-blue dark:text-primary-1 lg:text-2xl font-light mt-3 lg:mt-6">
              Tell us about your recruitment needs and we’ll be able to match
              you with suitable talent. View the profiles of our fellows for
              reference.
            </p>
          </div>
          <div className="hidden lg:flex w-[12.375rem] mt-12">
            <Button>View all profiles</Button>
          </div>
        </div>
        <div className="flex flex-col mt-12 lg:mt-0">
          {fellowData.map((fellow, index) => (
            <FellowOverviewCard
              key={index}
              image={fellow.image}
              description="Raphael is a fullstack engineer with 4 years of javaScript, ReactNative, and Scala. Along with being an experienced dev., Raphael loves to build and write."
              role="Bitcoin Developer"
              skills={["JavaScript", "ReactNative", "Scala"]}
              name={fellow.name}
              className={`${index != 0 ? "mt-6" : ""}`}
            />
          ))}
        </div>
        <div className="flex items-center justify-center lg:hidden">
          <div className=" w-[10.25rem] mt-8">
            <Button>View all profiles</Button>
          </div>
        </div>
      </div>
      <div className="mt-[5.5rem] lg:mt-64 w-full flex flex-col items-center px-4 lg:px-[10.9rem]">
        <h3 className="font-Gilroy font-light text-center text-nav-blue lg:text-[2.5rem] text-xl lg:w-[40.25rem] lg:leading-[2.4rem] dark:text-primary-1">
          Hire Qala Bitcoin developers in 4 easy steps
        </h3>
        <div className=" mt-8 lg:mt-16 flex flex-wrap justify-center">
          {HireSteps.map((hire, index) => (
            <HireStep
              key={index}
              step={hire.step}
              image={hire.image}
              description={hire.description}
              title={hire.name}
              className={hire.className}
              small_image={hire.small_image}
            />
          ))}
        </div>
      </div>
      <div className="mt-20 lg:mt-64 bg-fellow dark:bg-dark-fellow py-16 lg:py-48 flex flex-col items-center">
        <div className="w-full lg:w-[40.25rem] flex flex-col px-4 lg:px-0 items-center">
          <p className="text-center font-light text-nav-blue dark:text-primary-1 font-Gilroy text-xl lg:text-[2.5rem] lg:leading-[2.875rem] w-[16.2rem] lg:w-full">
            Fill the form below, tell us your recruitment needs and we will be
            in touch!
          </p>
          <div className="mt-8 lg:mt-16 w-full">
            <div className="flex flex-col">
              <p className="text-sm lg:text-lg text-nav-blue dark:text-h1-grey mb-2 font-semibold">
                Select at least one skill
              </p>
              <div className="flex flex-wrap gap-x-10">
                {Skills.map((skill) => (
                  <Checkbox
                    label={skill.skill}
                    id={skill.id}
                    value={skill.value}
                  />
                ))}
              </div>
            </div>
            <div className="w-full mt-4 lg:mt-6">
              <Input
                label="Work email address"
                placeholder="Enter work email address"
              />
            </div>
            <div className="flex flex-col mt-4 lg:flex-row w-full">
              <div className="flex w-full lg:w-[19.4rem] lg:mr-3 flex-col">
                <p className="text-sm lg:text-lg text-nav-blue dark:text-h1-grey mb-2 font-semibold">
                  What are your hiring needs?
                </p>
                <div className="flex flex-col">
                  <RadioButton
                    name="hire_type"
                    label="Part time"
                    id="part-time"
                    value="Part Time"
                  />
                  <RadioButton
                    name="hire_type"
                    label="Full time"
                    id="full-time"
                    value="Full Time"
                    className="mt-4"
                  />
                </div>
              </div>
              <div className="flex w-full lg:w-[19.4rem] lg:ml-3 mt-4 lg:mt-0 flex-col">
                <p className="text-sm lg:text-lg text-nav-blue dark:text-h1-grey mb-2 font-semibold">
                  Seed or Venture Capital funded?
                </p>
                <div className="flex flex-col">
                  <RadioButton
                    name="funding"
                    label="Yes"
                    id="yes"
                    value="Yes"
                  />
                  <RadioButton
                    name="funding"
                    label="No"
                    id="no"
                    value="No"
                    className="mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 lg:flex-row w-full">
              <div className="w-full lg:mr-3">
                <Input label="Company Name" placeholder="Enter company name" />
              </div>
              <div className="w-full lg:ml-3 mt-4 lg:mt-0">
                <Input
                  label="Phone number"
                  placeholder="Enter contact phone number"
                />
              </div>
            </div>
            <div className="w-full mt-4 lg:mt-6">
              <Input
                label="Company website"
                labelSpan="(optional)"
                placeholder="Enter company name"
              />
            </div>
            <div className="w-full mt-4 lg:mt-6">
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
