interface Props {
  name: string;
  role: string;
  description: string;
  image: string;
  skills: string[];
  className?: string;
}
export default function FellowOverviewCard({
  name,
  role,
  description,
  image,
  skills,
  className,
}: Props) {
  const updatedSkill = skills.length <= 3 ? skills : skills.slice(0, 3);
  return (
    <div
      className={`flex flex-col w-full md:w-[21.7rem] cursor-pointer rounded p-6 dark:bg-dark-fellow bg-dark-grey hover:bg-fellow_hover dark:hover:bg-primary-9 ${className}`}
    >
      <div className="flex items-center">
        <img
          src={image}
          alt="Fellow"
          className="h-12 w-12 md:h-16 md:w-16 rounded-full mr-4 object-cover"
        />
        <div className="flex flex-col">
          <p className="text-base md:text-lg text-nav-blue dark:text-primary-1">
            {name}
          </p>
          <p className="font-bold text-sm md:text-base text-nav-blue dark:text-primary-1 mt-1">
            {role}
          </p>
        </div>
      </div>
      <p className="text-sm md:text-base dark:text-h1-grey text-nav-blue my-6 min-h-[6rem]">
        {description.length < 140
          ? description
          : `${description.substring(0, 140)}...`}
      </p>
      <div className="flex justify-between items-center">
        {updatedSkill.map((skill, index) => (
          <div
            className="border border-nav-blue rounded px-[1.125rem] py-[0.34rem] dark:border-light-bg"
            key={index}
          >
            <p className=" text-xs md:text-xs dark:text-light-bg text-nav-blue">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
