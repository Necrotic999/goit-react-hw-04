import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, setCurrentImage, openModal }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        {items.map((img) => (
          <ImageCard
            key={img.id}
            img={img}
            openModal={openModal}
            items={items}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </li>
    </ul>
  );
};

export default ImageGallery;
