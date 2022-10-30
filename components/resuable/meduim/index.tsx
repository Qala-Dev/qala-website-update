export default function Meduim() {
  return (
    <div className="w-6 h-6 lg:h-8 lg:w-8 rounded flex items-center justify-center bg-brown dark:bg-light-bg cursor-pointer">
      <img src="./meduim.svg" className=" dark:hidden" />
      <img src="./dark-meduim.svg" alt="Meduim" className="hidden dark:flex" />
    </div>
  );
}
