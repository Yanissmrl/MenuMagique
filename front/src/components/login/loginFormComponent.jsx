import SubmitButton from "../button/submit-button";


function LoginForm(){
    return (
        <div>
            <div className="flex justify-center w-full">
                <div>
                    <div className="mb-16 text-center">
                            <h1>C’est l’heure du repas </h1>
                        <h1 className="color-main-blue">connectez vous ! </h1>
                    </div>
                    <form action="A MODIFIER" method="post" className="w-full max-w-3xl flex flex-col justify-center">
                        <input type="text" name="uid" placeholder="Pseudo" className="w-full mb-5 py-4 px-6 rounded-md bg-faded-grey border-main-orange input-orange input-size"/>
                        <input type="password" name="pwd" placeholder="Mot de passe" className="w-full mb-5 py-4 px-6 rounded-md bg-faded-grey border-main-orange input-orange input-size"/>
                    </form>
                    <div className="flex justify-center mt-10">
                        <SubmitButton name="signup-submit" description="Créer un compte" cssClass="submit-cta-blue py-2.5 px-14 rounded-md text-white"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LoginForm;