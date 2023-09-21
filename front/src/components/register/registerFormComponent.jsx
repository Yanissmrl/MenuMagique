import SubmitButton from "../button/submit-button";

function RegisterForm(){
    return (
        <div>
            <div className="flex justify-center w-full">
                <div>
                    <div className="mb-16 text-center">
                            <h1>Pas de repas prévu ? </h1>
                        <h1 className="color-main-orange">Inscrivez vous ! </h1>
                    </div>
                    <form action="A MODIFIER" method="post" className="w-full max-w-3xl flex flex-col justify-center">
                        <input type="text" name="uid" placeholder="Pseudo" className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size"/>
                        <input type="text" name="email" placeholder="E-mail" className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size"/>
                        
                        <input id="trigger" type="password" name="pwd" placeholder="Mot de passe" className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size"/>

                        <p id="hidden" className="text-center small-p mb-5">Le mot de passe doit contenir au minimum 16 caractères, majuscule et minuscule ainsi que 2 caractères spéciaux</p>                      

                        <input type="password" name="pwdrepeat" placeholder="Confirmation du mot de passe" className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size"/>
                    </form>
                    <div className="flex justify-center mt-10">
                        <SubmitButton name="signup-submit" description="Créer un compte" cssClass="submit-cta-orange py-2.5 px-14 rounded-md text-white"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default RegisterForm;