interface Props {
  link: string;
}

export default function LinkedIn({ link }: Props) {
  return (
    <a href={link}>
      <div className="h-6 md:h-8 w-6 md:w-8 rounded-[5px] bg-linkedin-blue flex justify-center items-center cursor-pointer">
        <img src="/linkedin_profile.svg" className="hidden lg:flex" />
        <img src="/linkedin_profile_s.svg" className="lg:hidden" />
      </div>
    </a>
  );
}
