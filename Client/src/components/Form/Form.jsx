import React, { useState } from "react";
import "./Form.css";
import validation from "../Validation/validation.js";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <div className="content">
      <div className="containerForm">
        <img
          className="formImg"
          src="https://i.postimg.cc/xjxnTYFQ/Rick-And-Morty.png"
          alt=""
        />
        <form className="form" onSubmit={handleSubmit}>
          <div className="formData">
            <label className="labelForm">Email</label>
            <input
              className="inputForm"
              type="text"
              name="email"
              placeholder="Enter your email..."
              value={userData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="danger">{errors.email}</p>}
            <label className="labelForm">Password</label>
            <input
              className="inputForm"
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={userData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="danger">{errors.password}</p>}
          </div>
          <button className="btnSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
