import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

const SearchBar = ({ setSearchQuery }) => {
  async function handleSubmit(data, options) {
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

//onClick={onSubmit}
