import jacket from "../assests/jacket.jpg";
import iphone from "../assests/iphone.png";
import phone from "../assests/phone.jpg";
import apple from "../assests/apple.jpg";
import orange from "../assests/orange.jpg";
import huawei from "../assests/huawei.jpg";
import socks from "../assests/socks.jpg";
import jersey from "../assests/jersey.jpg";
import hoodie from "../assests/hoodie.jpg";
import lichi from "../assests/lichi.jpg";
import Cards from "./Cards";
import Filter from "./Filter";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Jacket",
    img: jacket,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "1200",
    category: "Cloth",
  },
  {
    id: 2,
    title: "Orange",
    img: orange,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "180",
    category: "Fruit",
  },
  {
    id: 3,
    title: "Iphone 10",
    img: phone,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "90000",
    category: "Phone",
  },
  {
    id: 4,
    title: "Apple",
    img: apple,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "180",
    category: "Fruit",
  },
  {
    id: 5,
    title: "Iphone",
    img: iphone,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "81200",
    category: "Phone",
  },
  {
    id: 6,
    title: "Huawei y5",
    img: huawei,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "51200",
    category: "Phone",
  },
  {
    id: 7,
    title: "Socks",
    img: socks,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "400",
    category: "Cloth",
  },
  {
    id: 8,
    title: "jersey",
    img: jersey,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "1200",
    category: "Cloth",
  },
  {
    id: 9,
    title: "Hoodie",
    img: hoodie,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "7200",
    category: "Cloth",
  },
  {
    id: 10,
    title: "Lichi",
    img: lichi,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "1200",
    category: "Fruit",
  },
];
export default function Products() {
  const [allData, setAllData] = useState(data);
  let category = [...new Set(data.map((item) => item.category))];
  console.log(category);
  return (
    <div>
      <Filter category={category} data={data} setAllData={setAllData} />
      <Cards data={allData} />
    </div>
  );
}
