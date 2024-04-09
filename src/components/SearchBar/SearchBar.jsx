import css from "./SearchBar.module.css";

const SearchBar = ({ searchQuery, setSearchQuery, onSubmit }) => {
  return (
    <header>
      <form className={css.form}>
        <input
          className={css.input}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} onClick={onSubmit} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
