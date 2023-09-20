import logo from "../../media/logo.png";
import '../../styles/Header.css';
import ClassicButton from "../button/classic-button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    return (
        <>
            <div className="header">
                <div className="header-display">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="nav-text ">
                        <p className="text-3xl font-bold underline"><FontAwesomeIcon icon={faMagnifyingGlass} className="icon" /> Chercher une recette</p>
                        <p><FontAwesomeIcon icon={faCirclePlus} className="icon" /> Ajouter une recette</p>
                        <p><FontAwesomeIcon icon={faUser} className="icon" /> Se connecter</p>
                        <ClassicButton>Crée un compte</ClassicButton>
                    </div>
                </div>
            </div>
        </>
    )
}