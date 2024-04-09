import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, setCurrentImage, openModal }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <ImageCard
          openModal={openModal}
          items={items}
          // currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      </li>
    </ul>
  );
};

export default ImageGallery;
