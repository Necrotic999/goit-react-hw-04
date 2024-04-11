import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

const SearchBar = ({
  setSearchQuery,
  Report,
  searchQuery,
  setItems,
  items,
}) => {
  function handleSubmit(data, options) {
    if (!data.query.trim()) {
      Report.warning("Error", "you should type something...", "Close");
      return;
    }

    if (data.query !== searchQuery) {
      setItems([]);
    }
    setSearchQuery(data.query);
    options.resetForm();
  }

  const initialValues = {
    query: "",
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
