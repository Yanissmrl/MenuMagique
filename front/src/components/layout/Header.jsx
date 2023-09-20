import logo from "../../media/logo.png";
import '../../styles/Header.css';
import '../../styles/Variables.css';
import '../../styles/Typo.css';
import ClassicButton from "../button/classic-button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    return (
        <>
        <header className="flex justify-center mb-40">
            <div className="header container">
                <div className="w-full flex justify-between">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="nav-text items-center">
                        <p><FontAwesomeIcon icon={faMagnifyingGlass} className="icon" /> Chercher une recette</p>
                        <p><FontAwesomeIcon icon={faCirclePlus} className="icon" /> Ajouter une recette</p>
                        <p><FontAwesomeIcon icon={faUser} className="icon" /> Se connecter</p>
                        <ClassicButton>Crée un compte</ClassicButton>
                    </div>
                </div>
            </div>
        </header>

        </>
    )
}