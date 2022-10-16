/* eslint-disable @next/next/no-img-element */
import P from "../resuable/paragraph";

interface Props {
  image: string;
  text: string;
  className?: string
}
export default function Prerequisite({ image, text, className }: Props) {
  return (
    <div className={`flex items-center flex-col w-[13.625rem] px-1 mt-8 lg:mt-0 ${className}`}>
      <img src={image} className="" alt="Prerequisite" />
      <P className="text-center mt-6">{text}</P>
    </div>
  );
}
