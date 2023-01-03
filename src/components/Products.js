import jacket from "../assests/jacket.jpg";
import iphone from "../assests/iphone.png";
import phone from "../assests/phone.jpg";
import apple from "../assests/apple.jpg";
import orange from "../assests/orange.jpg";
import Cards from "./Cards";
import Filter from "./Filter";

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
];
export default function Products() {
  let category = [...new Set(data.map((item) => item.category))];
  console.log(category);
  return (
    <div>
      <Filter category={category} />
      <Cards data={data} />
    </div>
  );
}
