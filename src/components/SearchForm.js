import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

export default function SearchForm(props) {
  const [search, setSearch] = useState("");
  // let filteredContacts = props.name.filter(name => {
  //   return name.name.indexOf(search) !== -1;
  // });
  const updateSearch = event => {
    setSearch(event.target.value);
    console.log(search);
  };
  return (
    <section className="search-form">
      <Formik>
        <Form
        // onSubmit={props.name.filter(charr => {
        //   return charr.name.indexOf(search) !== -1;
        // })}
        >
          <Field
            type="text"
            name="search"
            placeholder="Search for Character"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </section>
  );
}
