import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {


  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">First Name:</label>
        <input
          value={props.firstName}
          onChange={props.handleInputChange}
          name="term"
          type="text"
          className="form-control"
          id="term"
        />
        <label htmlFor="language">Last Name:</label>
        <input
          value={props.lastName}
          onChange={props.handleInputChange}
          name="term"
          type="text"
          className="form-control"
          id="term"
        />
        <label htmlFor="language">Title:</label>
        <select
          value={props.Title}
          onChange={props.handleInputChange}
          name="term"
          className="form-control"
          id="term"
        >  <option value=""></option>
          <option value="Software Developer">Software Developer</option>
          <option value="Technician">Technician</option>
          <option value="Salesperson">Salesperson</option>
          <option value="Accountant">Accountant</option>
          <option value="Manager">Manager</option>
          <option value="HR">HR</option>
        </select>
        <form>
          <input
            value={props.Male}
            onChange={props.handleInputChange}
            type="radio"
          />Male<br></br>
          <input
            value={props.Female}
            onChange={props.handleInputChange}
            type="radio"
          />Female<br></br>
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
        </button>
        </form>
      </div>
    </form>
  );
}
// https://www.codementor.io/@blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y
export default SearchForm;
