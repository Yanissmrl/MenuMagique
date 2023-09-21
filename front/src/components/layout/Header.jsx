import logo from "../../media/logo.png";
import '../../styles/Header.css';
import '../../styles/Variables.css';
import '../../styles/Typo.css';

import ClassicButton from "../button/classic-button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const Disconnect = () => {
    localStorage.removeItem("token");
    navigate('/');
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
    </header>
  );
}

export default Header;