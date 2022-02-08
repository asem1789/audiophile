import { Button } from "antd";
import { Link } from "react-router-dom";
import { getSuggestProducts } from "../../../services/products.service";
import { ROUTES } from "../../../services/routes";
import "./SuggestionSection.scss";

function SuggestionSection({ currentId }) {
  const suggestProducts = getSuggestProducts(currentId);

  const getFirstName = (fullName) => {
    return fullName.split(" ").slice(0, -1).join(" ");
  };

  return (
    <div className="product__suggest">
      <h2 className="headingSecondary">You May Also Like This</h2>
      <div className="product__suggestList">
        {suggestProducts.length &&
          suggestProducts.map(({ id, name, imgUrl }) => (
            <div className="product__suggestItem" key={id}>
              <div className="product__suggestList__imgWrapper">
                <div className="product__suggestList__imgBox">
                  <img src={imgUrl} alt="suggest img" />
                </div>
              </div>
              <h2 className="headingTertiary product__suggestProduct-title">
                {getFirstName(name)}
              </h2>
              <Link to={`${ROUTES.PRODUCT}/${id}`}>
                <Button className="btn__primary" type="primary">
                  See Product
                </Button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SuggestionSection;
