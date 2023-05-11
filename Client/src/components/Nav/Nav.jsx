import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/img/logo.png";

function Nav({ onSearch, CharacterRandom }) {
  const navigate = useNavigate();

  function logout() {
    window.location.reload();
    navigate("/login");
  }

  return (
    <div className="containerNav">
      <img className="logo" src={logo} alt="" />
      <SearchBar onSearch={onSearch} />
      <div className="containerLinks">
        <Link to="/home">
          <button className="buttonNav">
            <i className="fa-solid fa-house-user"></i>
          </button>
        </Link>
        <Link to="/About">
          <button className="buttonNav">
            <i className="fa-solid fa-user"></i>
          </button>
        </Link>
        <Link to={"/"}>
          <button className="buttonNav" onClick={logout}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </Link>
        <button className="buttonNav" onClick={CharacterRandom}>
          <i className="fa-solid fa-shuffle"></i>
        </button>
        <Link to={"/favorites"}>
          <button className="buttonNav">Fav</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
