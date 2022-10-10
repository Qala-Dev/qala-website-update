/* eslint-disable @next/next/no-img-element */
interface ShopItem {
  image: string;
  price: string;
  name: string;
}
export default function ShopItem({ image, price, name }: ShopItem) {
  return (
    <div className="w-[10.25rem] lg:w-[12.44rem] flex flex-col p-2 bg-nav-white dark:bg-primary-9 rounded-lg mt-6 lg:mt-0">
      <div className="lg:h-[11.4rem] lg:w-[11.4rem]">
        <img src={image} alt="Item" className="max-w-full max-h-full rounded" />
      </div>
      <p className=" font-semibold text-base dark:text-darker-blue text-blue lg:text-xl mt-3 lg:mt-4">
        {name}
      </p>
      <p className="dark:text-darker-grey font-semibold text-sm lg:text-lg text-nav-blue mt-2">
        {price}
      </p>
    </div>
  );
}
