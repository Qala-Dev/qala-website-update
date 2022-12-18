interface Props {
  link: string;
}

export default function Github({ link }: Props) {
  return (
    <a href={link}>
      <div className="w-6 h-6 lg:h-8 lg:w-8 rounded flex items-center justify-center bg-brown dark:bg-light-bg cursor-pointer">
        <img src="/github.svg" alt="Github" />
      </div>
    </a>
  );
}
