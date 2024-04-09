import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/api";
import { Report } from "notiflix/build/notiflix-report-aio";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        if (searchQuery) {
          setLoading(true);
          if (searchQuery.trim() === "") {
            Report.warning("Error", "you should type something...", "Close");
            return;
          }
          const { results } = await fetchImages(searchQuery, { page });
          setItems((prev) => [...prev, ...results]);
        }
      } catch (error) {
        console.log(error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [searchQuery, page]);

  async function handleLoadMore() {
    setPage((prev) => prev + 1);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {error && <ErrorMessage />}
      {items?.length > 0 ? (
        <ImageGallery
          items={items}
          setCurrentImage={setCurrentImage}
          openModal={openModal}
        />
      ) : (
        ""
      )}
      {loading && <Loader />}
      {items?.length > 0 ? <LoadMoreBtn handleLoadMore={handleLoadMore} /> : ""}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        currentImage={currentImage}
      />
    </>
  );
}

export default App;
