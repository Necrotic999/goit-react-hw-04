import css from "./ImageCard.module.css";

const ImageCard = ({ setCurrentImage, openModal, img }) => {
  return (
    <>
      <div className={css.img_wrapper}>
        <img
          className={css.image}
          onClick={() => {
            setCurrentImage(img.urls.regular);
            openModal();
          }}
          src={img.urls.small || ""}
          alt={img.alt_description || "photo of your search query"}
        />
      </div>
    </>
  );
};

export default ImageCard;
