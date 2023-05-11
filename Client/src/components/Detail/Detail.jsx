import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UserNotFound from "../UserNotFound/UserNotFound";
import "./Detail.css";

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
// const API_KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

const Detail = () => {
  const {id} = useParams();
  console.log(id);

  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  
  function handleClick() {
    navigate("/home");
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <div className="detailContainer">
        <h1 className="detailTitle">{character?.name}</h1>
        <button className="detailButton" onClick={handleClick}>
          Go Home
        </button>
        {character ? (
          <div className="detailInfo">
            <section className="detailSection">
              <article className="DetailSectionInfo">
                <h4>
                  Status{" "}
                  <span className="detailBarra">
                    <i className="fa-solid fa-bolt"></i>
                  </span>{" "}
                  {character?.status}
                </h4>
                <h4>
                  Specie{" "}
                  <span className="detailBarra">
                    <i className="fa-solid fa-bolt"></i>
                  </span>{" "}
                  {character?.species}
                </h4>
                <h4>
                  Gender{" "}
                  <span className="detailBarra">
                    <i className="fa-solid fa-bolt"></i>
                  </span>{" "}
                  {character?.gender}
                </h4>
                <h4>
                  Origin{" "}
                  <span className="detailBarra">
                    <i className="fa-solid fa-bolt"></i>
                  </span>{" "}
                  {character?.origin?.name}
                </h4>
              </article>
              <article className="articleImg">
                <img className="detailImg" src={character?.image} alt="" />
              </article>
            </section>
          </div>
        ) : (
          <UserNotFound />
        )}
      </div>
    </>
  );
};
export default Detail;
