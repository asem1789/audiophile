import CategoryItem from "../Category-item";
import { ROUTES } from "../../services/routes";

import "./CategoryList.scss";

const Cats = [
  {
    id: 1,
    name: "headphones",
    link: ROUTES.CATEGORY_HEADPHONES,
    img: require("../../assets/images/cat-headphones.jpg"),
  },
  {
    id: 2,
    name: "speakers",
    link: ROUTES.CATEGORY_SPEAKERS,
    img: require("../../assets/images/cat-speaker.jpg"),
  },
  {
    id: 3,
    name: "earphones",
    link: ROUTES.CATEGORY_EARPHONES,
    img: require("../../assets/images/cat-earphones.jpg"),
  },
];

const CategoryList = () => {
  return (
    <div className="catList">
      {Cats.map((el) => (
        <CategoryItem key={el.id} {...el} />
      ))}
    </div>
  );
};

export default CategoryList;
