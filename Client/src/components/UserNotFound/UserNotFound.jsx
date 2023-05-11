import React from "react";
import './UserNotFound.css'
import { Link } from "react-router-dom";

const UserNotFound = () => {
  return (
    <>
    <body>
      <main className="ghost" >
              <section className="home">
                  <div className="home__container containerGosth">
                      <div className="home__data">
                          <span className="home__subtitle">Error 404</span>
                          <h1 className="home__title">Hey Buddy</h1>
                          <p className="home__description">
                              We can't seem to find the page <br /> you are looking for.
                          </p>
                          <Link to={'/home'}>
                              <button className="home__button">
                                  Go Back Home
                              </button>
                          </Link>
                      </div>
                      <div className="home__img">
                          <img src="https://www.pngplay.com/wp-content/uploads/10/Rick-And-Morty-Free-PNG.png" alt=""/>
                          <div className="home__shadow"></div>
                      </div>
                  </div>
              </section>
          </main>
    </body>
    
    </>
  );
};

export default UserNotFound;
