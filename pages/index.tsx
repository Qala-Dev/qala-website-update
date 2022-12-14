// /* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import H1 from "~/components/resuable/H1";
import Button from "~/components/resuable/button";
import InvertedContainer from "~/components/resuable/invertedContainer";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import SectionTitle from "~/components/resuable/sectionTitle";
import FellowStage from "~/components/fellowStage";
import Window from "~/components/window";
import P from "~/components/resuable/paragraph";
import Blog from "~/components/blog";
import Shop from "~/components/shop";
import Input from "~/components/resuable/input";

const Carousels: string[] = [
  "qala_carousel.jpeg",
  "qala_carouse2.jpeg",
  "carousel_3.png",
  "carousel_4.png",
  "qala_carousel.jpeg",
  "qala_carouse2.jpeg",
  "carousel_4.png",
  "carousel_3.png",
];

const SponsorLight: string[] = [
  "./sponsor/bitnob-light.png",
  "./sponsor/human-light.png",
  "./sponsor/paxful-light.png",
  "./sponsor/bitcoin-foundation-light.png",
  "./sponsor/chaincode-light.png",
  "./sponsor/lunar-light.png",
  "./sponsor/coinbase-light.png",
  "./sponsor/okcoin-light.png",
];

const SponsorDark: string[] = [
  "./sponsor/bitnob-dark.png",
  "./sponsor/human-dark.png",
  "./sponsor/paxful-dark.png",
  "./sponsor/bitcoin-foundation-dark.png",
  "./sponsor/chaincode-dark.png",
  "./sponsor/lunar-dark.png",
  "./sponsor/coinbase-dark.png",
  "./sponsor/okcoin-dark.png",
];

const Home: NextPage = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel?.current?.scrollWidth - carousel.current?.offsetWidth);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Qala</title>
        <meta
          name="description"
          content="Qala is a program designed
                train the next generation of African Bitcoin and Lightning
                developers."
        />

        <link rel="icon" href="/qala.ico" />
      </Head>
      <main>
        <div className="flex items-center justify-center">
          <div className="mt-16 lg:mt-32 w-full lg:w-[50rem] flex flex-col items-center px-4 lg:px-0">
            <H1 className="leading-[2.375rem] lg:leading-[4.76rem] ">
              Bitcoin for Africa, by Africans.
            </H1>
            <P className=" text-center mt-6 w-full lg:w-[41.4rem]">
              Qala is a program designed to{" "}
              <span className="font-bold">
                train the next generation of African Bitcoin and Lightning
                developers.
              </span>{" "}
              Our goal is to create a pathway for African software developers to
              transition into building for Bitcoin and Lightning.
            </P>
            <div className="w-[12.4rem] mt-12">
              <Button href="https://qala.homerun.co/qala-application/apply">
                Join Qala
              </Button>
            </div>
          </div>
        </div>
        <InvertedContainer className=" before:bg-nav-white after:bg-nav-white dark:before:bg-dark-bg dark:after:bg-dark-bg after:hidden lg:after:block before:hidden lg:before:block">
          <motion.div
            ref={carousel}
            className="w-full overflow-hidden mt-8 lg:mt-0"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex"
            >
              {Carousels.map((image, index) => (
                <motion.div
                  key={index}
                  className={`min-w-[21.9rem] h-[24.9rem] ${
                    index !== 0 ? "ml-4" : "ml-0"
                  }`}
                >
                  <img
                    src={`/${image}`}
                    alt="caraousel"
                    className=" pointer-events-none w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </InvertedContainer>
        <div className="flex flex-col mt-28">
          <h3 className="font-light text-2xl text-nav-blue text-center dark:text-primary-1">
            Qala is proudly supported by
          </h3>
          <div className="mt-10 flex dark:hidden mx-4 lg:mx-[6rem] items-center justify-between flex-wrap">
            {SponsorLight.map((image, index) => (
              <img
                alt="Sponsor"
                src={image}
                key={index}
                className="mt-5 lg:mt-0"
              />
            ))}
          </div>
          <div className="mt-10 hidden dark:flex mx-4 lg:mx-[6rem] items-center justify-between flex-wrap">
            {SponsorDark.map((image, index) => (
              <img
                alt="Sponsor"
                src={image}
                key={index}
                className="mt-5 lg:mt-0"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-[10.95rem] items-center mt-20 lg:mt-24 mb-10 lg:mb-20">
          <div className="flex flex-col w-full lg:max-w-[26.4rem] items-center lg:items-start lg:mr-7">
            <SectionTitle className="mt-8 lg:mt-0 text-center md:text-left ">
              What is Qala
            </SectionTitle>
            <div className="flex flex-col mt-8 text-sm lg:text-lg text-nav-blue text-center lg:text-left dark:text-primary-1">
              <p>
                For many African software developers, the pathway to a career as
                a Bitcoin developer is not clear, and so it remains an untapped
                opportunity. This is the challenge that the team at Qala Africa
                is working to resolve.
              </p>
              <p className=" mt-6">
                Qala is a programme designed to train the next generation of
                Bitcoin and Lightning Network developers from across the African
                continent.
              </p>
            </div>
            <div className="w-[10.25rem] lg:w-[12.4rem] mt-8">
              <Button href="./about">Learn More</Button>
            </div>
          </div>
          <div className="w-full h-[13.2rem] lg:w-[40rem] lg:h-[24.6rem] flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/iQHhqxIKs4M"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <InvertedContainer className="before:bg-nav-white after:bg-dark-grey dark:before:bg-dark-bg dark:after:bg-dark-blue before:hidden lg:before:block after:hidden lg:after:block">
          <div className="bg-fellow dark:bg-dark-fellow  flex flex-col items-center py-16 lg:py-32">
            <div className="w-full lg:w-[40rem] flex flex-col items-center px-4 ">
              <SectionTitle className="text-center">
                Become a Qala Fellow!
              </SectionTitle>
              <p className=" mt-8 text-center text-nav-blue px-4 text-sm md:text-lg dark:text-primary-1">
                Our core programme is a fully funded 13-week experience where
                you get to immerse in building bitcoin & lightning applications
                while being positioned for and matched with jobs around the
                world.
              </p>
            </div>
            <div className="flex flex-col mt-20 w-full justify-center lg:flex-row px-4 lg:px-[10.95rem]">
              <FellowStage
                text="Are you a software developer with 1-5 years of experience in a production environment?"
                image="./experience.svg"
                className="lg:w-[20.4rem]"
              />
              <FellowStage
                text="Are you a software developer with 1-5 years of experience in a production environment?"
                className="lg:w-[20.4rem]"
                image="./proof.svg"
              />
              <FellowStage
                image="./engage.svg"
                text="Are you able to engage with the technical content of the programme"
                className="lg:w-[20.1rem]"
              />
            </div>
            <div className="lg:mt-16 flex flex-col w-full justify-center lg:flex-row px-4 lg:px-[10.95rem]">
              <FellowStage
                image="./commitment.svg"
                text="Are you available to commit full-time to the programme, including resigning from existing employment (where necessary)"
                className="lg:w-[22.93rem]"
              />
              <FellowStage
                image="./willing.svg"
                text="Are you willing to learn and grow in the bitcoin space"
                className="lg:w-[20.4rem]"
              />
            </div>
            <div className="w-[10.2rem] lg:w-[12.4rem] mt-16 block">
              <Button href="https://qala.homerun.co/qala-application/apply">
                Apply now
              </Button>
            </div>
            <InvertedContainer className="before:bg-fellow after:bg-fellow before:dark:bg-dark-fellow after:dark:bg-dark-fellow before:hidden lg:before:block after:hidden lg:after:block">
              <div className="flex flex-col lg:flex-row items-center justify-center bg-fellow dark:bg-dark-fellow">
                <Window window="Application Window 1" month="April" />
                <Window window="Application Window 2" month="June" />
                <Window window="Application Window 3" month="November" />
              </div>
            </InvertedContainer>
            <div className="mt-8 lg:mt-0">
              <p className="font-light text-base lg:text-2xl lg:w-[46.75rem] w-full text-nav-blue dark:text-primary-1 text-center px-2 mb-8">
                All applications for Qala will be treated in 3 application
                windows throughout the year. If you apply now, it will be
                processed and we will get back to you at the next application
                window.
              </p>
            </div>
          </div>
        </InvertedContainer>
        <div className="flex flex-col lg:flex-row items-center justify-center bg-dark-grey pt-8 lg:pt-0 dark:bg-dark-blue pb-12">
          <div className="flex dark:hidden items-center justify-center lg:mr-8">
            <img src="./africa.svg" alt="Africa" />
          </div>
          <div className="hidden dark:flex items-center justify-center lg:mr-8">
            <img src="./africa-dark.svg" alt="Africa" />
          </div>
          <div className="lg:ml-8 mt-8 lg:mt-0 w-full lg:w-auto flex flex-col items-center">
            <SectionTitle className="mt-8 w-full text-center lg:text-left">
              Our Community
            </SectionTitle>
            <div className="flex justify-around lg:justify-between w-full lg:w-[22.375rem] mt-8 lg:mt-16">
              <div className="flex flex-col text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start">
                  <h3 className="text-[2.5rem] font-extrabold lg:text-[4rem] text-blue">
                    13
                  </h3>
                  <p className="text-sm lg:lg:text-lg text-nav-blue dark:text-primary-1">
                    Fellows
                  </p>
                </div>
                <div className="flex flex-col text-center lg:text-left mt-3 lg:mt-8">
                  <h3 className="text-[2.5rem] font-extrabold lg:text-[4rem] text-blue ">
                    4
                  </h3>
                  <p className="text-sm lg:lg:text-lg text-nav-blue dark:text-primary-1">
                    Global Projects
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-center lg:text-left">
                <div className="flex flex-col">
                  <h3 className="text-[2.5rem] font-extrabold lg:text-[4rem] text-blue">
                    7
                  </h3>
                  <p className="text-sm lg:text-lg text-nav-blue dark:text-primary-1">
                    Countries
                  </p>
                </div>
                <div className="flex flex-col mt-3 lg:mt-8">
                  <h3 className="text-[2.5rem] font-extrabold lg:text-[4rem] text-blue">
                    100+
                  </h3>
                  <p className="text-sm lg:lg:text-lg text-nav-blue dark:text-primary-1">
                    Community Members
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center lg:justify-start">
              <div className="w-[10.2rem] lg:w-[10.9rem] mt-12">
                <Button href="./fellows">Meet the people</Button>
              </div>
            </div>
          </div>
        </div>
        <InvertedContainer className="before:bg-dark-grey after:bg-nav-white dark:before:bg-dark-blue dark:after:bg-dark-bg after:hidden lg:after:block before:hidden lg:before:block ">
          <div className="pt-32 pb-32 flex items-center lg:pr-[10.95rem] lg:pl-0 px-4 flex-col lg:flex-row">
            <div className=" min-w-full relative flex items-center justify-center lg:h-[28rem] lg:min-w-[40.75rem] rounded lg:mr-5">
              <img src="./gathering.png" alt="Qala Gathering" />
            </div>
            <div className=" lg:ml-5">
              <SectionTitle className="text-center lg:text-left mt-8 lg:mt-0">
                Qala Gathering
              </SectionTitle>
              <p className=" mt-8 text-center lg:text-justify text-sm lg:text-lg text-nav-blue dark:text-primary-1">
                The Qala Annual Gathering is a physical event designed to build
                the foundations of a thriving and vibrant African community of
                Bitcoin developers and spark discussions on delivering the
                promise that Bitcoin has for the African continent.
              </p>
              <p className="mt-6 text-center lg:text-justify text-sm lg:text-lg text-nav-blue dark:text-primary-1">
                The event brings together fellows of the Qala cohort, bitcoin
                enthusiasts, developers, and thought leaders in the African
                bitcoin community for stimulating conversations, design
                workshops, and mapping a strategy for bitcoin adoption on the
                continent, particularly as driven by the Qala community
              </p>
            </div>
          </div>
        </InvertedContainer>
        <div className="lg:px-[10.95rem] px-4 flex flex-col lg:flex-row lg:items-center pb-20">
          <div className="flex flex-col w-full max-w-[22.9rem] mr-0 lg:mr-[6.25rem]">
            <SectionTitle className="text-center lg:text-left">
              Qala???s Bit
            </SectionTitle>
            <div className="flex flex-col mt-8">
              <img src="./blog_cover.png" alt="Blog Cover" />
              <P className="mt-8 text-center lg:text-left">
                Learn more about Qala activities, impact, partnerships, and
                community via our blog, press releases, and upcoming podcast,
                with love from Qala???s Bit.
              </P>
            </div>
            <div className="lg:w-[12.4rem] mt-12 hidden lg:block">
              <Button href="https://blog.qala.dev/">Go to blog page</Button>
            </div>
          </div>
          <Blog />
          <div className="lg:hidden flex justify-center">
            <div className="w-[10.25rem] mt-8">
              <Button href="https://blog.qala.dev/">Go to blog page</Button>
            </div>
          </div>
        </div>
        <InvertedContainer className="before:bg-nav-white after:bg-nav-white dark:before:bg-dark-bg dark:after:bg-dark-bg after:hidden lg:after:block before:hidden lg:before:block">
          <div className="bg-blue dark:bg-dark-fellow py-32 flex flex-col justify-center items-center lg:px-[10.95rem] px-4">
            <p className="text-white font-light font-Gilroy text-center text-xl lg:leading-[2.9rem] lg:text-[2.5rem] w-[16.1rem] lg:w-[40.25rem]">
              Check out our merchandise! You just might see something you like.
            </p>
            <div className="w-full mt-10 lg:mt-16">
              <Shop />
            </div>
          </div>
        </InvertedContainer>
        <div className="flex flex-col justify-center items-center px-4 mb-32 mt-12 lg:mt-0">
          <div className="w-full lg:w-[40.25rem]">
            <p className="font-light text-Gilroy text-xl lg:text-[2.5rem] text-center text-nav-blue dark:text-primary-1">
              Know more about us
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-4 lg:mt-8">
              <div className="flex">
                {/* <a>
                  <div className="flex items-center justify-center h-[2.7rem] w-[2.7rem] lg:h-[4rem] lg:w-[4rem] bg-facebook-blue rounded-[5px] mx-2">
                    <img
                      src="./facebook.svg"
                      alt="Facebook"
                      className="w-[1.3rem] h-[1.3rem] lg:w-[2rem] lg:h-[2rem]"
                    />
                  </div>
                </a> */}
                <a href="https://twitter.com/QalaAfrica">
                  <div className="flex items-center justify-center h-[2.7rem] w-[2.7rem] lg:h-[4rem] lg:w-[4rem] bg-twitter-blue rounded-[5px] mx-2">
                    <img
                      src="./twitter.svg"
                      alt="Twitter"
                      className="w-[1.3rem] h-[1.3rem] lg:w-[2rem] lg:h-[2rem]"
                    />
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/qala-africa/">
                  <div className="flex items-center justify-center h-[2.7rem] w-[2.7rem] lg:h-[4rem] lg:w-[4rem] bg-linkedin-blue rounded-[5px] mx-2">
                    <img
                      src="./linkedin.svg"
                      alt="Facebook"
                      className="w-[1.3rem] h-[1.3rem] lg:w-[2rem] lg:h-[2rem]"
                    />
                  </div>
                </a>
              </div>
              <div className="w-[10.2rem] lg:w-[8.375rem] lg:ml-4 mt-6 lg:mt-0">
                <Button href="./about">Learn more</Button>
              </div>
            </div>
            <div className=" mt-16 lg:mt-32">
              <p className="font-light text-xl lg:text-[2.5rem] text-center lg:leading-[2.9rem] text-nav-blue dark:text-primary-1 font-Gilroy">
                Sign up for our weekly bitcoin newsletter written for African
                developers. All good stuff, no fluff.
              </p>
              <div className="flex flex-col w-full mt-8 lg:mt-16">
                <div className="mb-6">
                  <Input
                    placeholder="Enter email address"
                    label="Email Address"
                  />
                </div>
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full mr-0 lg:mr-3 mb-4 lg:mb-0">
                    <Input
                      placeholder="Enter your First Name"
                      label="First Name"
                    />
                  </div>
                  <div className="w-full ml-0 lg:ml-3">
                    <Input placeholder="Enter your Surname" label="Last Name" />
                  </div>
                </div>
                <div className=" mt-8 lg:mt-12">
                  <Button>Subscribe</Button>
                </div>
                <a href=" https://mailchi.mp/93359e2eb0bf/stay-in-touch">
                  <p className=" font-bold italic text-sm lg:text-lg text-blue-main cursor-pointer text-center mt-4">
                    Go to Qala Newsletter
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
