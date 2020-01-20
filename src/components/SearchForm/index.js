import React from "react";
import "./style.css";
import useForm from "./useForm";


// Using the datalist element we can create autofill suggestions based on the props.breeds array

function SearchForm(props) {


  const { values, handleChange, handleSubmit } = useForm(saveDAta);

  function saveDAta() {
    console.log(values);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="language">First Name:</label>
        <input
          value={values.firstName}
          onChange={handleChange}
          name="firstName"
          type="text"
          className="form-control"
        />
        <label htmlFor="language">Last Name:</label>
        <input
          value={values.lastName}
          onChange={handleChange}
          name="lastName"
          type="text"
          className="form-control"
        />
        <label htmlFor="language">Title:</label>
        <select
          value={values.Title}
          onChange={handleChange}
          name="title"
          className="form-control"
        >  <option value=""></option>
          <option value="Software Developer">Software Developer</option>
          <option value="Technician">Technician</option>
          <option value="Salesperson">Salesperson</option>
          <option value="Accountant">Accountant</option>
          <option value="Manager">Manager</option>
          <option value="HR">HR</option>
        </select>
          <input
            name="gender"
            value="male"
            onChange={handleChange}
            type="radio"
          />Male<br></br>
          <input
            name="gender"
            value="female"
            onChange={handleChange}
            type="radio"
          />Female<br></br>
          <button type="submit"  className="btn btn-success">
            Search
          </button>
      </div>
    </form>
  );
}
// https://www.codementor.io/@blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y
export default SearchForm;
