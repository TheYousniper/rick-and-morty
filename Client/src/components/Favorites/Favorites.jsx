import React from "react";
import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import "./Favorites.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };
  const handlefilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className="containerFavorites">
      <div className="filterFavContainer">
        <h1 className="favoritesTitle">Favorites</h1>
        <div className="filterContainer">
          <select onChange={handleOrder} className="filterContent">
            <option value="A">Ascendent</option>
            <option value="D">Descendent</option>
          </select>
          <select onChange={handlefilter} className="filterContent">
            <option value="allCharacters">All Characters</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
      </div>
      {myFavorites?.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            origin={fav.origin?.name}
            image={fav.image}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
