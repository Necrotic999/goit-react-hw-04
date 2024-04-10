import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, setCurrentImage, openModal }) => {
  return (
    <ul className={css.list}>
      {items.map((img) => (
        <li key={img.id} className={css.item}>
          <ImageCard
            img={img}
            openModal={openModal}
            items={items}
            setCurrentImage={setCurrentImage}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
