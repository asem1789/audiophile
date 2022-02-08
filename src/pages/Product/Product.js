import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CategoryList from "../../components/Category-list/CategoryList";
import ProductPreview from "../../components/Product-Preview/ProductPreview";
import { getProductById } from "../../services/products.service";
import GallerySection from "./GallerySection/GallerySection";
import "./Product.scss";
import SuggestionSection from "./SuggestionSection";

function Product() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const result = getProductById(productId);
    if (result) {
      setProduct(result);
    } // Invalid param
    else {
      navigate("/");
    }
  }, [productId, navigate]);

  return (
    <div className="product padding-main-x">
      <main className="product__main row">
        {product && (
          <>
            <section className="product__preview">
              {<ProductPreview {...product} isDetail />}
            </section>
            <section className="product__features mb-6">
              <div className="product__featuresMain">
                <h2 className="headingSecondary mb-4">Features</h2>
                <p className="product__featuresText">{product.features}</p>
              </div>
              <div className="product__featuresBox">
                <h2 className="headingSecondary mb-4">In The Box</h2>
                <div className="inBox">
                  <ul className="inBox__list">
                    {product.inBox.map(({ count, name }, i) => (
                      <li key={`${i + 1}`} className="inBox__item">
                        <span className="inBox__text--count">{count}x</span>
                        <span className="inBox__text">{name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <GallerySection images={[...product.gallery]} />

            <SuggestionSection currentId={product.id} />
          </>
        )}

        <CategoryList />
      </main>
    </div>
  );
}

export default Product;
