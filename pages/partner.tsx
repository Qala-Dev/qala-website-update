import Button from "~/components/resuable/button";
import Input from "~/components/resuable/input";
import P from "~/components/resuable/paragraph";
import TextArea from "~/components/resuable/textarea";
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

export default function Partner() {
  return (
    <main>
      <div className="relative h-[49.44rem] overflow-hidden">
        <img
          src="./partner.png"
          alt="Apply"
          className="absolute inset-0 w-full object-cover"
        />
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            background:
              "linear-gradient(0deg, #F6F7FC 0%, rgba(255, 255, 255, 0) 59.23%)",
          }}
          background-blend-mod
        ></div>
        <div
          className="hidden dark:flex absolute inset-0"
          style={{
            background: "rgba(6, 9, 22, 0.6)",
            backgroundBlendMode: "hard-light",
          }}
        ></div>
        <div
          className="absolute inset-0 hidden dark:flex"
          style={{
            background:
              "linear-gradient(0deg, #060916 0%, rgba(6, 9, 22, 0) 59.23%)",
          }}
        ></div>
        <div className="relative flex flex-col items-center mt-[12.875rem] lg:mt-[23.7rem] px-4 lg:px-0">
          <h1 className="lg:w-[56.9rem] text-center font-Gilroy leading-[95%] font-extrabold text-[2.2rem] lg:text-[5rem] text-nav-blue dark:text-nav-white">
            Be a Qala Partner!
          </h1>
          <p className="text-nav-blue dark:text-nav-white lg:text-[2.5rem] text-xl font-Gilroy mt-4 font-light">
            Hello Bitcoin Ecosystem Builder,
          </p>
          <P className="text-center lg:w-[48.4rem] mt-6 font-semibold">
            We are always thrilled and delighted to collaborate with
            organisations whose vision aligns with ours. At Qala, we are
            dedicated to train and deliver valuable project-based learning to
            African Bitcoin and Lightning Developers, which lays the groundwork
            of a thriving and vibrant community of Bitcoin Developers on the
            continent.
          </P>
        </div>
      </div>
      <div className=" py-16 lg:py-[6.1rem] bg-dark-grey dark:bg-dark-blue flex items-center justify-center">
        <p className="text-xl lg:text-[2rem] font-Gilroy text-nav-blue dark:text-primary-1 text-center lg:w-[54.125rem] leading-[1.875rem] lg:leading-[2.6rem] px-[2.5rem] lg:px-0">
          We are keen to connect with individuals and organisations interested
          in helping grow and expand the Bitcoin and Lightning Developer
          ecosystems in Africa.
        </p>
      </div>
      <div className="flex flex-col mt-28 items-center">
        <h3 className="font-light font-Gilroy text-base lg:text-2xl text-nav-blue text-center dark:text-primary-1">
          Our Sponsors
        </h3>
        <div className="mt-10 flex flex-col dark:hidden w-full lg:w-[54.2rem]">
          <div className="flex flex-wrap justify-center items-center gap-x-4 lg:gap-x-14">
            {SponsorLight.map((image, index) => (
              <img
                alt="Sponsor"
                src={image}
                key={index}
                className="lg:mt-12 mt-6"
              />
            ))}
          </div>
        </div>
        <div className="mt-10 hidden dark:flex flex-col w-full lg:w-[54.2rem]">
          <div className="flex flex-wrap justify-center items-center gap-x-4 lg:gap-x-14">
            {SponsorDark.map((image, index) => (
              <img
                alt="Sponsor"
                src={image}
                key={index}
                className="lg:mt-12 mt-6"
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" py-20 lg:py-48 px-[2.5rem] lg:px-[10.9rem] flex flex-col items-center">
        <p className="font-light text-center text-xl lg:text-[2.5rem] lg:leading-[2.9rem] text-nav-blue dark:text-primary-1 lg:w-[40.25rem]">
          Learn more about some of our current initiatives and how you can get
          involved.
        </p>
        <div className=" mt-10 lg:mt-16 flex flex-col lg:flex-row lg:justify-between"></div>
      </div>
      <div className="mt-20 bg-fellow dark:bg-dark-fellow py-16 lg:py-48 flex flex-col items-center">
        <div className="w-full lg:w-[40.25rem] flex flex-col px-4 lg:px-0 items-center">
          <p className="text-center font-light text-nav-blue dark:text-primary-1 font-Gilroy text-xl lg:text-[2.5rem] lg:leading-[2.875rem] w-[16.2rem] lg:w-full">
            To learn more about how to become a partner of Qala and its benefits
            for your organisation, reach out to us.
          </p>
          <div className="mt-8 lg:mt-16 w-full">
            <div className="flex flex-col lg:flex-row w-full">
              <div className="w-full lg:mr-3">
                <Input
                  label="Contact Name"
                  placeholder="Enter your First Name"
                />
              </div>
              <div className="w-full lg:ml-3 mt-4 lg:mt-0">
                <Input label="Last Name" placeholder="Enter your Surname" />
              </div>
            </div>
            <div className="w-full mt-4 lg:mt-6">
              <Input
                label="Company/Organization"
                placeholder="Enter company name"
              />
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
}
