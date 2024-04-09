import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button className={css.btn} onClick={handleLoadMore}>
      Load more..
    </button>
  );
};

export default LoadMoreBtn;
