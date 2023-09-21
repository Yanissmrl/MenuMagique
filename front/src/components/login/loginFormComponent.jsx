import { useEffect, useRef, useContext } from "react";
import SubmitButton from "../button/submit-button";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";


function LoginForm() {

    const navigate = useNavigate();
    const appContext = useContext(AppContext);

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            User_uid: usernameRef.current.value,
            User_password: passwordRef.current.value,
        };


        console.log(data);
        axios
            .post("http://localhost/MenuMagiqueBack/index.php?route=login", data)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data);
                navigate('/');
                // Traitez la réponse ici, par exemple, mettez à jour l'état de votre application.
            })
            .catch((error) => {
                console.error(error);
                // Gérez les erreurs ici.
            });
    }
    return (
        <div>
            <div className="flex justify-center w-full">
                <div>
                    <div className="mb-16 text-center">
                        <h1>C’est l’heure du repas </h1>
                        <h1 className="color-main-blue">connectez vous ! </h1>
                    </div>
                    <form onSubmit={handleSubmit} method="post" className="w-full max-w-3xl flex flex-col justify-center">
                        <input ref={usernameRef} type="text" name="uid" placeholder="Pseudo" className="w-full mb-5 py-4 px-6 rounded-md bg-faded-grey border-main-orange input-orange input-size" />
                        <input ref={passwordRef} type="password" name="pwd" placeholder="Mot de passe" className="w-full mb-5 py-4 px-6 rounded-md bg-faded-grey border-main-orange input-orange input-size" />
                        <div className="flex justify-center mt-10">
                            <SubmitButton name="signup-submit" description="Connexion" cssClass="submit-cta-blue py-2.5 px-14 rounded-md text-white" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default LoginForm;