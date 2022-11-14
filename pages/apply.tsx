/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Prerequisite from "~/components/prerequisite";
import Button from "~/components/resuable/button";
import H1 from "~/components/resuable/H1";
import InvertedContainer from "~/components/resuable/invertedContainer";
import P from "~/components/resuable/paragraph";
import SectionTitle from "~/components/resuable/sectionTitle";
import Benefit from "~/components/benefit";
import Stage from "~/components/stage";
import Input from "~/components/resuable/input";
import TextArea from "~/components/resuable/textarea";

const Apply: NextPage = () => {
  return (
    <main>
      <div className="w-full relative flex justify-center items-center flex-col">
        <img
          src="./apply.png"
          className="dark:hidden absolute w-screen inset-0 z-0"
        />
        <img
          src="./dark_apply.png"
          alt=""
          className="hidden dark:flex absolute w-screen inset-0"
        />
        <div className="w-full lg:w-[52.9rem] lg:mt-[23.7rem] mt-[12.9rem] z-30 px-4 lg:px-0">
          <H1 className="text-center leading-[2.375rem] lg:leading-[4.75rem]">
            Kickstart Your Bitcoin Developer Career
          </H1>
          <div className="flex flex-col mt-4 lg:mt-6 px-4 lg:px-0">
            <P className="text-center font-normal lg:font-semibold">
              At Qala, our goal is to create a pathway for African software
              developers to transition into building for Bitcoin. Our core
              programme is a{" "}
              <span className=" font-bold lg:font-extrabold">fully-funded</span>{" "}
              13 week experience where you get to immerse in building Bitcoin &
              lightning applications while being positioned for and matched into
              Bitcoin jobs around the world.
            </P>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-center px-4 lg:px-0">
        <div className="mt-20 lg:mt-64 w-full flex flex-col lg:w-[54.125rem] items-center justify-center">
          <h2 className=" font-light text-xl lg:text-[2.5rem] text-center dark:text-nav-white font-Gilroy">
            To join the programme, you must
          </h2>
          <div className="flex flex-col mt-8 lg:mt-16 w-full items-center lg:w-[54.125rem]">
            <div className="flex flex-col lg:flex-row">
              <Prerequisite
                image="./experience.svg"
                text="Have 1-5 years of experience as a software developer in a production environment"
                className="lg:w-[16.615rem] lg:mr-12"
              />
              <Prerequisite
                image="./proof.svg"
                text="Have proof of your ability as evidenced by an active GitHub/GitLab account"
                className="lg:w-[16.615rem] lg:mr-12"
              />
              <Prerequisite
                image="./engage.svg"
                text="Demonstrate the ability to engage with the technical content of the programme"
                className="lg:w-[16.615rem]"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-12">
              <Prerequisite
                image="./commitment.svg"
                text="Commit full-time to the programme, including resigning from existing employment (where necessary)"
                className="lg:w-[16.615rem] lg:mr-12"
              />
              <Prerequisite
                image="./willing.svg"
                text="Demonstrate a willingness to learn and grow."
                className="lg:w-[16.615rem]"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 lg:mt-16">
            <div className="w-[10.3rem] lg:w-[12.375rem]">
              <Button>Apply Here</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 lg:mt-64">
        <SectionTitle className="text-center">
          What do you get from Qala?
        </SectionTitle>
        <div className="flex flex-col mt-4">
          <InvertedContainer className="before:bg-nav-white after:bg-nav-white dark:before:bg-dark-bg dark:after:bg-dark-bg after:hidden lg:after:block before:hidden lg:before:block">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <Benefit
                heading="Philosophy Immersion"
                text="Deep immersion into Bitcoin development philosophy so you understand why Bitcoin is built the way it is"
                className=" lg:mr-3"
              />
              <Benefit
                heading="Deep Learning"
                text="Introduction to Bitcoin & Lightning development methodology - theoretically & practically"
                className="lg:mr-3"
              />
              <Benefit
                heading="Proof of work"
                text="In form of concrete Bitcoin & Lightning projects that you build"
                className="lg:mr-3"
              />
              <Benefit
                heading="World-Class Faculty"
                text="Support from our world-class Bitcoin & lightning developer faculty"
              />
            </div>
          </InvertedContainer>
          <InvertedContainer className="before:bg-nav-white after:bg-nav-white dark:before:bg-dark-bg dark:after:bg-dark-bg after:hidden lg:after:block before:hidden lg:before:block">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <Benefit
                heading="Monthly Stipend"
                text="Over the 3 months of the programme so you can focus"
                className=" lg:mr-3"
              />
              <Benefit
                heading="Technology Support"
                text="Support to get your technology setup (internet, video & audio etc) up to muster for a global role"
                className="lg:mr-3"
              />
              <Benefit
                heading="Profile Building"
                text="Build your persona and profile in the extended Bitcoin developer ecosystem"
                className="lg:mr-3"
              />
              <Benefit
                heading="Employer Matching"
                text="Introduction to employers and support to get the best deal and to thrive in the roles"
              />
            </div>
          </InvertedContainer>
          <InvertedContainer className="before:bg-nav-white after:bg-nav-white dark:before:bg-dark-bg dark:after:bg-dark-bg after:hidden lg:after:block before:hidden lg:before:block">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <Benefit
                heading="Mentorship"
                text="Experienced mentors that support your journey through weekly one-on-one"
                className=" lg:mr-3"
              />
              <Benefit
                heading="Philosophy Immersion"
                text="A support community of talented developer peers going through the same experience with you"
              />
            </div>
          </InvertedContainer>
        </div>
      </div>
      <div className="flex flex-col w-full mt-12 lg:mt-0">
        <div className="w-screen relative">
          <img
            src="./steps.png"
            alt="Steps"
            className="w-screen object-cover"
          />
        </div>
        <div className="flex flex-col items-center px-6 lg:px-[10.9rem]">
          <div className="flex flex-col mt-8 lg:mt-20 lg:w-[40.2rem]">
            <SectionTitle className="text-center">
              The Selection Process
            </SectionTitle>
            <P className="mt-4 lg:mt-8 text-center">
              The Qala selection process is an intense learning experience to
              start you on building a career in Bitcoin development, even if you
              are not quite ready to join the next cohort of the programme.{" "}
            </P>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-12 lg:mt-20">
            <Stage
              stage="1"
              objective="So we know more about you and your suitability for the programme."
              stageTitle="Application Form"
              className="lg:mr-[5rem]"
            />
            <Stage
              stage="2"
              objective="So we know you have the basic technical foundation to thrive on the programme."
              stageTitle="Code Challenge"
              className="lg:mr-[5rem]"
            />
            <Stage
              stage="3"
              objective="So we see how you handle more complex information and how you work in a group."
              stageTitle="Study Group"
              stageIntro="Introduction to Bitcoin (6 weeks)"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:mt-12">
            <Stage
              stage="4"
              objective="So we see how you handle more complex information and how you work in a group."
              stageTitle="Seminar"
              className="lg:mr-[5rem]"
              stageIntro="Introduction to Bitcoin Protocol Development (5 weeks)"
            />
            <Stage
              stage="5"
              objective="So we learn more about you one-on-one to confirm your fit for the programme."
              stageTitle="Interviews"
              className="lg:mr-[5rem]"
            />
            <Stage
              stage="6"
              objective="So you can clear your schedule to focus on Qala full time."
              stageTitle="Selection & Prep"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-12 lg:mt-20">
          <div className="w-[10.2rem] lg:w-[12.375rem]">
            <Button>Apply Here</Button>
          </div>
        </div>
      </div>
      <div className="mt-20 bg-fellow dark:bg-dark-fellow py-16 lg:py-64 flex flex-col items-center">
        <div className="w-full lg:w-[40.25rem] flex flex-col px-4 lg:px-0 items-center">
          <p className="text-center font-light font-Gilroy text-nav-blue dark:text-primary-1 text-xl lg:text-[2.5rem] lg:leading-[2.875rem] w-[16.2rem] lg:w-full">
            Have any questions about the process? Drop us a question here.
          </p>
          <div className="mt-8 lg:mt-16 w-full">
            <div className="flex flex-col lg:flex-row w-full">
              <div className="w-full lg:mr-3">
                <Input label="First Name" placeholder="Enter your First Name" />
              </div>
              <div className="w-full lg:ml-3 mt-4 lg:mt-0">
                <Input label="Last Name" placeholder="Enter your Surname" />
              </div>
            </div>
            <div className="w-full mt-4 lg:mt-6">
              <Input label="Email Address" placeholder="Enter Email Address" />
            </div>
            <div className="w-full mt-4 lg:mt-6">
              <TextArea label="Message" placeholder="Enter your message here" />
            </div>
            <div className="w-full mt-4 lg:mt-6">
              <Button>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Apply;
