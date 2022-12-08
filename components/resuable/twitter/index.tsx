interface Props {
  link: string;
}
export default function Twitter({ link }: Props) {
  return (
    <a href={link}>
      <div className="h-6 md:h-8 w-6 md:w-8 rounded-[5px] bg-twitter-blue flex justify-center items-center cursor-pointer">
        <img src="./twitter_profile.svg" className="hidden lg:flex" />
        <img src="./twitter_profile_s.svg" className="lg:hidden" />
      </div>
    </a>
  );
}
