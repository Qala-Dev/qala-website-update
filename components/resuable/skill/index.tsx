interface Props {
  skill: string;
}
export default function Skil({ skill }: Props) {
  return (
    <div className="border border-nav-blue rounded px-[1.125rem] py-[0.34rem] dark:border-light-bg">
      <p className=" text-xs md:text-xs dark:text-light-bg text-nav-blue">
        {skill}
      </p>
    </div>
  );
}
