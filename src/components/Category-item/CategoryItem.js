import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./CategoryItem.scss";

const CategoryItem = ({ name, link, img }) => {
  return (
    <Link to={link} className="catItem">
      <img className="catItem__img" src={img} alt="cat image1" />
      <div className="catItem__inner">
        <div className="catItem__copy">
          <h2 className="catItem__title">{name}</h2>
          <button className="btn catItem__btn">
            <span>SHOP</span>
            <RightOutlined className="catItem__icon" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
