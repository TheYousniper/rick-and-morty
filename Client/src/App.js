import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import video from "./assets/video/bg1.mp4";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import UserNotFound from "./components/UserNotFound/UserNotFound";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

const URL = "http://localhost:3001/rickandmorty/login/";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const EMAIL = "test@mail.com";
  // const PASSWORD = "123abc";
  const location = useLocation();

  // function login(userData) {
  //   if (userData.email === EMAIL && userData.password === PASSWORD) {
  //     setAccess(true);
  //     navigate("/home");
  //   } else {
  //     alert("Datos incorrectos");
  //   }
  // }
  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  // https://rickandmortyapi.com/api/character/" +
  //     Math.floor(Math.random() * 5 + 1)

  const CharacterRandom = (id) => {
    const id1 = Math.floor(Math.random() * (826 - 1) + 1);
    if (characters.find((char) => char.id === +id1)) {
      return alert("Personaje Repetido");
    }
    axios(` https://rickandmortyapi.com/api/character/${+id1}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Upsss... Id incorrecto");
        }
      }
    );
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    // const API_KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

    try {
      if (characters.find((char) => char.id === +id)) {
        return alert("Personaje Repetido");
      }
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${+id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("Upsss... Id incorrecto");
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <div className="nav">
          <Nav onSearch={onSearch} CharacterRandom={CharacterRandom} />
        </div>
      )}
      <main className="videobg">
        <video src={video} muted autoPlay loop />
      </main>
      <img
        className="bgMobile"
        src="https://i.postimg.cc/k41JyVXh/bgPhone.jpg"
        alt=""
      />
      <Routes>
        <Route path={"/"} element={<Form login={login} />} />
        <Route
          path={"/home"}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={"/about"} element={<About />} />
        <Route path={"/detail/:id"} element={<Detail />} />
        <Route path={"/favorites"} element={<Favorites />} />
        <Route path={"*"} element={<UserNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
