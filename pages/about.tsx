import { NextPage } from "next";
import P from "~/components/resuable/paragraph";
import SectionTitle from "~/components/resuable/sectionTitle";
import Team from "~/components/team";
import Input from "~/components/resuable/input";
import TextArea from "~/components/resuable/textarea";
import Button from "~/components/resuable/button";
import H1 from "~/components/resuable/H1";
import Aim from "~/components/aim";
import Press from "~/components/press";

const About: NextPage = () => {
  return (
    <main>
      <div className="w-full relative flex justify-center items-center flex-col">
        <img
          src="./about.png"
          className="dark:hidden absolute w-screen inset-0 z-0"
        />
        <img
          src="./about_dark.png"
          alt=""
          className="hidden dark:flex absolute inset-0"
        />
        <div className="w-full lg:w-[40.2rem] lg:mt-[37.1rem] mt-[12.9rem] z-30 px-4 lg:px-0">
          <SectionTitle className="text-center">What is Qala?</SectionTitle>
          <div className="flex flex-col mt-4 lg:mt-8 px-4 lg:px-0">
            <P className="lg:text-justify text-center">
              For many African software developers, the pathway to a career as a
              Bitcoin developer is not clear, and so it remains an untapped
              opportunity. This is the challenge that the team at Qala Africa is
              working to resolve.
            </P>
            <P className="mt-3 lg:mt-4 lg:text-justify text-center">
              Qala is a programme designed to train the next generation of
              Bitcoin and Lightning Network developers from across the African
              continent. The goal is to find, upskill and match African
              developers with Bitcoin companies from around the globe.{" "}
            </P>
            <P className="mt-3 lg:mt-4 lg:text-justify text-center">
              The Qala curriculum is tailored to give developers the
              philosophical background and firm foundations of Bitcoin and the
              Lightning Network, with an acute focus on developing the most
              in-demand skills sought after by companies.
            </P>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(./aim_bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="px-4 lg:px-[10.9rem] py-16 lg:py-32 mt-20 lg:mt-48"
      >
        <div>
          <h3 className=" font-Gilroy font-extrabold lg:text-[2.5rem] text-light-bg">
            What Qala aims to achieve
          </h3>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-16 justify-between">
          <Aim
            step="1"
            title="African Perspectives on Bitcoin Development"
            text="Bitcoin remains the go-to leader in the cryptocurrency space, with the largest market capitalization and most secure, open, decentralized, and censorship-resistant network. Bitcoin is not going away anytime soon. We have an opportunity to ensure that African voices are represented in community conversations about the direction of Bitcoin. With time, we also hope this will stimulate the development of new use cases of Bitcoin to tackle important socio-economic challenges facing the continent. Qala is committed to facilitating this."
          />
          <Aim
            titleClass="w-full lg:w-[25.125rem]"
            className="lg:mt-0 mt-10"
            step="2"
            title="A Whole World of Job Opportunities"
            text="Beyond working on Bitcoin Core, there are numerous job opportunities for developers to work on the Lightning network, alternative software implementations of Bitcoin, the operating systems for Bitcoin nodes, utility and client libraries, and an assortment of wallets, payment processors and exchanges that support Bitcoin. Through Qala, African developers will be upskilled for and connected to these opportunities."
          />
          <Aim
            className="mt-10"
            step="3"
            title="Facilitating Learning Opportunities"
            text="Developers need challenges and opportunities that help them develop the in-demand skills that employers are seeking. In this light, Qala intends to organize hackathons and challenges for the African Bitcoin developer community to develop their skills, collaborate with peers, and build out a portfolio of projects that will help them grow in proficiency and marketability."
          />
          <Aim
            className="mt-10"
            step="4"
            title="Learning & Growing Together"
            text="Peer-to-peer engagement is a core part of the Bitcoin DNA and a foundational aspect endorsed by developers in the community driving its development from inception. Empirically, learning happens best when there is a communal element at play. Qala is committed to building an active community of African Bitcoin developers. This support group will be crucial for the development and growth of every developer in the programme."
          />
        </div>
      </div>
      <div className="lg:px-[10.9rem] px-4 flex items-center justify-center mt-20 lg:mt-48 flex-col">
        <div className="h-[21.44rem] lg:h-[34.1rem] w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oOLjeRwaPn0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="flex flex-col mt-8 lg:mt-16 w-full lg:w-[40.2rem]">
          <SectionTitle className="text-center">
            The Journey So Far{" "}
          </SectionTitle>
          <div className="mt-4 lg:mt-8">
            <P className="text-center lg:text-justify">
              Since opening a call in October 2021, more than 800 African
              developers have applied for a place on the Qala programme
            </P>
            <P className="mt-4 text-center lg:text-justify">
              After completing a code challenge and attending short interviews,
              the top 50 performers were invited to start their peer-to-peer
              learning journey through study groups and virtual seminars where
              they learnt the fundamentals and philosophy behind Bitcoin. From
              this cohort, the top 12 candidates were chosen to join in the
              3-month programme, where they gained advanced skills and have been
              matched with Bitcoin-first specific roles with organisations like
              Galoy and Btrust. Additionally, other fellows have turned into
              Qala mentors, sharing their Bitcoin insight with other
              up-and-coming African developers.
            </P>
            <P className="mt-4 text-center lg:text-justify">
              {" "}
              The new Qala cohort will follow the significant momentum of the
              first Qala cohort’s immersive bitcoin experience. Qala is
              currently accepting applications for the next cohort, beginning Q4
              2022. All skilled African software developers are encouraged to
              apply now and stay up to date with the latest information on the
              application process via the Qala Newsletter.
            </P>
          </div>
        </div>
      </div>
      <div className="mt-32 lg:mt-64 px-4 lg:px-[10.9rem]">
        <h2 className=" font-light font-Gilroy text-[2.5rem] lg:text-[5rem] text-blue-main">
          Meet the Team
        </h2>
        <div className="">
          <div className="flex flex-col w-full lg:w-[40.2rem]">
            <SectionTitle>Qala Founders</SectionTitle>
            <P className="mt-4 lg:mt-8 text-justify">
              Qala is the brainchild of a quartet of African Bitcoin and
              Lightning developers keen to see more people like them actively
              contributing to the development of the Bitcoin and Lightning
              networks.{" "}
            </P>
          </div>
          <div className="mt-4 lg:mt-8 flex justify-between flex-wrap">
            <Team
              image="./abubakar.png"
              github="https://github.com/Zero-1729"
              twitter="https://twitter.com/ihate1999"
              description="CEO of Recursive Capital, Bitcoin Core Contributor & Board Member at Btrust"
              name="Abubakar Nur Khalil"
            />
            <Team
              image="./carla.png"
              github="https://github.com/carlaKC"
              twitter="https://twitter.com/actuallyCarlaKC"
              description="Lightning Developer & Board Member at Btrust"
              name="Carla Kirk-Cohen"
            />
            <Team
              image="./bernard.png"
              github=""
              twitter="https://twitter.com/bernard_parah"
              description="CEO of Bitnob, building financial services on Bitcoin and the lightning network"
              name="Bernard Parah"
            />
            <Team
              image="./tim.png"
              github=""
              twitter="https://twitter.com"
              description="Bitcoin Developer, Owner of the first Bitcoin node in West Africa and Former Co-founder of Tanjalo"
              name="Tim Akinbo"
            />
          </div>
        </div>
        <div className=" mt-16 lg:mt-64">
          <div className="flex flex-col w-full lg:w-[40.2rem]">
            <SectionTitle>The Faculty</SectionTitle>
            <P className="mt-4 lg:mt-8 text-justify">
              An experienced and world-class faculty has been assembled to
              support the students through a personalized learning experience
              that would help them hit the ground running as Bitcoin engineers
              upon commencement of work.
            </P>
          </div>
          <div className="mt-4 lg:mt-8 flex justify-between flex-wrap">
            <Team
              image="./jonas.png"
              github=""
              twitter="https://twitter.com/adamcjonas"
              name="Adam Jonas"
            />
            <Team
              image="./carly.png"
              github=""
              twitter="https://twitter.com/Caralie_C"
              name="Caralie Chrisco"
            />
            <Team
              image="./empty.png"
              github=""
              twitter="https://twitter.com/willcl_ark"
              name="Will Clark"
            />
            <Team
              image="./empty.png"
              github="https://github.com/stickies-v"
              twitter="https://twitter.com/stphnvlstk"
              name="Stephan Vuylsteke"
            />
            <Team
              image="./empty.png"
              github=""
              twitter="https://twitter.com/dunxen"
              name="Duncan Dean"
            />
          </div>
        </div>
        <div className="mt-16 lg:mt-64">
          <div className="flex flex-col w-full lg:w-[40.2rem]">
            <SectionTitle>Operations</SectionTitle>
            <P className="mt-4 lg:mt-8 text-justify">
              Qala’s day-to-day operations are run by a dedicated team with
              immense experience in the developer and innovation ecosystem
              across Africa. We are committed to bring to life the mission to
              grow a critical mass of African Bitcoin & Lightning developers
            </P>
          </div>
          <div className="mt-4 lg:mt-8 flex gap-x-4 lg:gap-x-8  flex-wrap">
            <Team
              image="./femi.png"
              github=""
              twitter="https://twitter.com/femilonge"
              name="Femi Longe"
            />
            <Team
              image="./stephanie.jpeg"
              github=""
              twitter="https://twitter.com"
              name="Stephanie Titcombe"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(./press.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="px-4 lg:px-[10.9rem] py-16 lg:py-32 mt-20 lg:mt-48"
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <p className=" font-Gilroy font-extrabold text-xl lg:text-[2.5rem] text-light-bg">
              Qala Press releases - June 2022{" "}
            </p>
            <div className="lg:flex items-center hidden cursor-pointer">
              <p className="font-semibold text-lg text-light-bg mr-2">
                See all posts
              </p>
              <img src="./more.svg" />
            </div>
          </div>
          <div className="flex justify-between flex-wrap">
            <Press
              author="TechCabal"
              date="16/8/2022"
              title="Discussion Questions for Mastering Bitcoin"
              url=""
              className=""
            />
            <Press
              author="TechCabal"
              date="16/8/2022"
              title="Discussion Questions for Mastering Bitcoin"
              url=""
              className="mt-4 lg:mt-0"
            />
            <Press
              author="TechCabal"
              date="16/8/2022"
              title="Discussion Questions for Mastering Bitcoin"
              url=""
              className="mt-4 lg:mt-0"
            />
          </div>
        </div>
        <div className="flex flex-col lg:mt-20 mt-16">
          <div className="flex justify-between items-center mb-8">
            <p className=" font-Gilroy font-extrabold text-xl lg:text-[2.5rem] text-light-bg">
              Articles
            </p>
            <div className="lg:flex items-center hidden cursor-pointer">
              <p className="font-semibold text-lg text-light-bg mr-2">
                See all posts
              </p>
              <img src="./more.svg" />
            </div>
          </div>
          <div className="flex justify-between flex-wrap">
            <Press
              author="TechCabal"
              date="16/8/2022"
              title="Discussion Questions for Mastering Bitcoin"
              url=""
              className=""
              description="Mastering Bitcoin is a book for developers, although the first two chapters cover bitcoin"
            />
            <Press
              author="TechCabal"
              date="16/8/2022"
              title="Discussion Questions for Mastering Bitcoin"
              url=""
              className="mt-4 lg:mt-0"
              description="Mastering Bitcoin is a book for developers, although the first two chapters cover bitcoin"
            />
            <Press
              author="TechCabal"
              date="16/8/2022"
              title="Discussion Questions for Mastering Bitcoin"
              url=""
              className="mt-4 lg:mt-0"
              description="Mastering Bitcoin is a book for developers, although the first two chapters cover bitcoin"
            />
          </div>
        </div>
      </div>
      <div className="bg-fellow dark:bg-dark-fellow py-16 lg:py-64 flex flex-col items-center">
        <div className="w-full lg:w-[40.25rem] flex flex-col px-4 lg:px-0 items-center">
          <div>
            <H1 className="text-center">Contact Us</H1>
            <P className="text-center mt-4 lg:mt-6">
              Want to make enquiry or contact us? Fill the form below and we
              will get back to you shortly!
            </P>
            <div className="mt-8 lg:mt-16 w-full">
              <div className="flex flex-col lg:flex-row w-full">
                <div className="w-full lg:mr-3">
                  <Input
                    label="First Name"
                    placeholder="Enter your First Name"
                  />
                </div>
                <div className="w-full lg:ml-3 mt-4 lg:mt-0">
                  <Input label="Last Name" placeholder="Enter your Surname" />
                </div>
              </div>
              <div className="w-full mt-4 lg:mt-6">
                <Input
                  label="Email Address"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="w-full mt-4 lg:mt-6">
                <TextArea
                  label="Message"
                  placeholder="Enter your message here"
                />
              </div>
              <div className="w-full mt-4 lg:mt-6">
                <Button>Send</Button>
              </div>
            </div>
          </div>
          <div className="flex mt-6 lg:mt-20 flex-col">
            <p className="text-center font-light text-nav-blue dark:text-primary-1 font-Gilroy text-xl lg:text-[2.5rem] lg:leading-[2.875rem] w-[11.7rem] lg:w-[21.8rem]">
              Reach out to us on social media
            </p>
            <div className="flex items-center justify-center mt-4 lg:mt-8">
              {/* <div className="flex items-center justify-center h-[2.7rem] w-[2.7rem] lg:h-[4rem] lg:w-[4rem] bg-facebook-blue rounded-[5px] mx-2">
                <img
                  src="./facebook.svg"
                  alt="Facebook"
                  className="w-[1.3rem] h-[1.3rem] lg:w-[2rem] lg:h-[2rem]"
                />
              </div> */}
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
                    alt="LinkedIn"
                    className="w-[1.3rem] h-[1.3rem] lg:w-[2rem] lg:h-[2rem]"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-12 lg:mt-32 w-full items-center">
            <p className="text-center font-light font-Gilroy text-nav-blue dark:text-primary-1 text-xl lg:text-[2.5rem] lg:leading-[2.875rem] w-[16.2rem] lg:w-full">
              Have any questions about the process? Drop us a question here.
            </p>
            <div className="mt-8 lg:mt-16 w-full">
              <div className="w-full ">
                <Input
                  label="Email Address"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="flex flex-col lg:flex-row w-full mt-4 lg:mt-6">
                <div className="w-full lg:mr-3">
                  <Input
                    label="First Name"
                    placeholder="Enter your First Name"
                  />
                </div>
                <div className="w-full lg:ml-3 mt-4 lg:mt-0">
                  <Input label="Last Name" placeholder="Enter your Surname" />
                </div>
              </div>
              <div className="w-full mt-4 lg:mt-6">
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
