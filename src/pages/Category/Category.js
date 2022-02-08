import { useParams } from "react-router-dom";

import CategoryList from "../../components/Category-list";
import ProductPreview from "../../components/Product-Preview/ProductPreview";

import { ProductsData } from "../../constants/products-data";
import "./Category.scss";

function Category() {
  const { categoryName } = useParams();

  const products = ProductsData[categoryName] || [];

  return (
    <div className="category">
      <div className="category__header">
        <h2 className="category__title">{categoryName}</h2>
      </div>
      <main className="padding-main-x">
        <section className="category__list row">
          {products.map((el) => (
            <ProductPreview key={el.id} {...el} />
          ))}
        </section>
      <section className="category__sectionNav row">
        <CategoryList />
      </section>
      </main>
    </div>
  );
}

export default Category;
