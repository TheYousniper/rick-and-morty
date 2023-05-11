import { Link } from "react-router-dom";
import "./Card.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={`containerCard ${status}`}>
      <li className={`status ${status}`}>{status}</li>
      <img src={image} alt="" />
      <div className={`info ${status}`}>
        {!isFav ? (
          <button onClick={() => onClose(id)} className="closeButton">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        ) : null}

        <li>
          <span className="linkDetail">{name}</span>{" "}
        </li>
        <li>
          <span className="spantitle">ID: </span>{" "}
          <span className="spanContent">{id}</span>{" "}
        </li>
        <li>
          <span className="spantitle">Specie: </span>{" "}
          <span className="spanContent">{species}</span>
        </li>
        <li>
          <span className="spantitle">Gender: </span>{" "}
          <span className="spanContent">{gender}</span>{" "}
        </li>
        <Link className="toDetail" to={`/detail/${id}`}>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
        {isFav ? (
          <button className="buttonLike" onClick={handleFavorite}>
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
        ) : (
          <button className="buttonDisLike" onClick={handleFavorite}>
            <i className="fa-solid fa-thumbs-down"></i>
          </button>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
