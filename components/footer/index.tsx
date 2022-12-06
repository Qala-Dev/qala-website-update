import Twitter from "../../public/twitter.svg";
import Facebook from "../../public/facebook.svg";
import LinkedIn from "../../public/linkedin.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center flex-col py-10">
      <div className=" h-1 w-24 bg-nav-blue rounded dark:bg-nav-white"></div>
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="flex">
          {/* <a href="">
            <div className=" h-8 w-8 rounded-[5px] flex items-center justify-center bg-facebook-blue mx-2">
              <Image src={Facebook} alt="Facebook" />
            </div>
          </a> */}
          <a href="https://twitter.com/QalaAfrica">
            <div className=" h-8 w-8 rounded-[5px] flex items-center justify-center bg-twitter-blue mx-2">
              <Image src={Twitter} alt="Twitter" />
            </div>
          </a>
          <a href="https://www.linkedin.com/company/qala-africa/">
            <div className=" h-8 w-8 rounded-[5px] flex items-center justify-center bg-linkedin-blue mx-2">
              <Image src={LinkedIn} alt="LinkedIn" />
            </div>
          </a>
        </div>
        <p className="mt-4 font-normal text-base text-nav-blue dark:text-nav-white">
          Copyright © Qala 2022
        </p>
      </div>
    </footer>
  );
}
