import SubmitButton from "../button/submit-button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function RegisterForm() {

    const navigate = useNavigate();
    const passwordRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRepeatRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const pass = passwordRef.current.value;
        const passRepeat = passwordRepeatRef.current.value;
        if (pass === passRepeat) {
            // console.log("ok");
            const data = {
                User_uid: usernameRef.current.value,
                User_email: emailRef.current.value,
                User_password: pass,
            };
            axios
                .post("http://localhost/MenuMagiqueBack/index.php?route=create_user", data)
                .then((response) => {
                    console.log(response.data);
                    navigate("/login")
                    // Traitez la réponse ici, par exemple, mettez à jour l'état de votre application.
                })
                .catch((error) => {
                    console.error(error);
                    // Gérez les erreurs ici.
                });
        } else {
            console.log("Les mots de passe ne correspondent pas");
        }
    }
    return (
        <div>
            <div className="flex justify-center w-full">
                <div>
                    <div className="mb-16 text-center">
                        <h1>Pas de repas prévu ? </h1>
                        <h1 className="color-main-orange">Inscrivez vous ! </h1>
                    </div>
                    <form type='submit' onSubmit={handleSubmit} action="A MODIFIER" method="post" className="w-full max-w-3xl flex flex-col justify-center">
                        <input ref={usernameRef} type="text" name="uid" placeholder="Pseudo" className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size" />
                        <input ref={emailRef} type="text" name="email" placeholder="E-mail" className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size" />

                        <input ref={passwordRef} id="trigger" type="password" name="pwd" placeholder="Mot de passe" className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size" />

                        <p id="hidden" className="text-center small-p mb-5">Le mot de passe doit contenir au minimum 16 caractères, majuscule et minuscule ainsi que 2 caractères spéciaux</p>

                        <input ref={passwordRepeatRef} type="password" name="pwdrepeat" placeholder="Confirmation du mot de passe" className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size" />

                        <div className="flex justify-center mt-10">
                            <SubmitButton name="signup-submit" description="Créer un compte" cssClass="submit-cta-orange py-2.5 px-14 rounded-md text-white" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default RegisterForm;