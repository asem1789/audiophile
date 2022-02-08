import "./GallerySection.scss";

function GallerySection({ images }) {
  const [img1, img2, img3] = images;
  return (
    <section className="product__gallery">
      <div className="product__gallery__side-1">
        <div className="border-r-sm product__gallery__imgBox-1">
          <img src={img1} alt="img gallery" />
        </div>
        <div className="border-r-sm product__gallery__imgBox-1">
          <img src={img2} alt="img gallery" />
        </div>
      </div>

      <div className="product__gallery__side-2">
        <div className="border-r-sm product__gallery__imgBox-2">
          <img src={img3} alt="img gallery" />
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
