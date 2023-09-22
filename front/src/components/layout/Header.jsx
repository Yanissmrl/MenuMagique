import logo from "../../media/logo.png";
import '../../styles/Header.css';
import '../../styles/Variables.css';
import '../../styles/Typo.css';

import ClassicButton from "../button/classic-button";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'; // Add the burger menu icon
import { faCirclePlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Disconnect = () => {
    localStorage.removeItem("token");
    navigate('/');
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }


  return (
    <header className="flex justify-center mb-28">
      <div className="header container">
        <div className="w-full flex justify-between">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex items-center gap-10">
            <Link to="/FindRecipe" className={`nav-text ${location.pathname === '/FindRecipe' ? 'color-main-orange ' : ''}`}>
              <p><FontAwesomeIcon icon={faMagnifyingGlass} className="icon" /> Chercher une recette</p>
            </Link>

            {
              !localStorage.getItem('token') ? (
                <>
                  <Link to="/login" className={`nav-text ${location.pathname === '/login' ? 'color-main-orange' : ''}`}>
                    <p><FontAwesomeIcon icon={faUser} className="icon nav-text" /> Se connecter</p>
                  </Link>
                  <ClassicButton to="/register">Crée un compte</ClassicButton>
                </>
              ) : (
                <>
                <Link to="/AddRecipe" className={`nav-text ${location.pathname === '/AddRecipe' ? 'color-main-orange ' : ''}`}>
                  <p><FontAwesomeIcon icon={faCirclePlus} className="icon nav-text" /> Ajouter une recette</p>
                </Link>
                <div className="nav-text" onClick={Disconnect}>
                  <p><FontAwesomeIcon icon={faUser} className="icon nav-text" /> Déconnexion</p>
                </div>
                </>
              )

            }
          </div>
        </div>
      </div>

      <div className="header-mobile justify-center w-full">
          <div className="container">
            <div className="w-full flex justify-between">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                  <button className="text-3xl color-main-orange z-10" onClick={toggleModal}>
                      <FontAwesomeIcon icon={faBars} />
                  </button>
            </div>
          </div>
        </div>
        {isModalOpen && (
        <div className="absolute z-20 w-2/3 h-screen flex items-center justify-center bg-white top-0 right-0">
          <div className="flex items-center h-full">
            <div className="absolute py-4 px-4 top-0 right-0">
              <button onClick={toggleModal}>x</button>
            </div>
          <div className="flex flex-col items-center gap-10">
            <Link to="/FindRecipe" className={`nav-text ${location.pathname === '/FindRecipe' ? 'color-main-orange ' : ''}`}>
                <p><FontAwesomeIcon icon={faMagnifyingGlass} className="icon" /> Chercher une recette</p>
              </Link>

              {
                !localStorage.getItem('token') ? (
                  <>
                    <Link to="/login" className={`nav-text ${location.pathname === '/login' ? 'color-main-orange' : ''}`}>
                      <p><FontAwesomeIcon icon={faUser} className="icon nav-text" /> Se connecter</p>
                    </Link>
                    <ClassicButton to="/register">Crée un compte</ClassicButton>
                  </>
                ) : (
                  <>
                  <Link to="/AddRecipe" className={`nav-text ${location.pathname === '/AddRecipe' ? 'color-main-orange ' : ''}`}>
                    <p><FontAwesomeIcon icon={faCirclePlus} className="icon nav-text" /> Ajouter une recette</p>
                  </Link>
                  <div className="nav-text" onClick={Disconnect}>
                    <p><FontAwesomeIcon icon={faUser} className="icon nav-text" /> Déconnexion</p>
                  </div>
                  </>
                )

              }
          </div>
              
            </div>
        </div>
        )}
    </header>
  );
}

export default Header;