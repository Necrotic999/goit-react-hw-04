import css from "./ImageCard.module.css";

const ImageCard = ({ items, setCurrentImage, openModal }) => {
  //   console.log(items);
  return (
    <>
      {items.map((img) => {
        return (
          <div className={css.img_wrapper} key={img.id}>
            <img
              className={css.image}
              onClick={() => {
                setCurrentImage(img.urls.regular);
                openModal();
              }}
              src={img.urls.small}
              alt={img.alt_description}
            />
          </div>
        );
      })}
    </>
  );
};

export default ImageCard;
