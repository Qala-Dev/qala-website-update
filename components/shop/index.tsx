/* eslint-disable @next/next/no-img-element */
import ShopItem from "./item";

interface Item {
  image: string;
  price: string;
  name: string;
}
const Items: Item[] = [
  { image: "./shirt.png", price: "₦20,000", name: "Qala Hoodie" },
  { image: "./bottle.png", price: "₦20,000", name: "Qala Water Bottle" },
  { image: "./book.png", price: "₦20,000", name: "Qala Notebook" },
  { image: "./pen.png", price: "₦20,000", name: "Qala Pen" },
  { image: "./bank.png", price: "₦20,000", name: "Qala Power Bank" },
];
export default function Shop() {
  return (
    <div className="w-full">
      <div className="flex justify-between w-full flex-wrap">
        {Items.map((item, index) => (
          <ShopItem
            name={item.name}
            price={item.price}
            image={item.image}
            key={index}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-16">
        <a href="https://merch.printivo.com/store/qala" target={"_blank"}>
          <button className="flex items-center justify-center bg-nav-white rounded w-[12.4rem] lg:w-[12.4rem] py-[1.125rem] text-nav-blue text-sm lg:text-lg">
            Shop here{" "}
            <img src="./arrow-right.svg" alt="Arrow Right" className="ml-2" />
          </button>
        </a>
      </div>
    </div>
  );
}
