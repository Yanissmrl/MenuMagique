import kitchen from "../../media/kitchen.png";
import ClassicButton from "../button/classic-button";

function HomeSectionTop(){
    return (

        <section className="flex justify-center mb-48">
            <div className="container grid md:grid-cols-2 md:grid-rows-1 gap-16 ">
                <div>
                    <div className="flex items-center color-main-orange">
                        <p className="mr-2">Découvrez</p>
                        <p className="brand-font mb-1">MenuMagique 🧙</p>
                    </div>
                    <div className="flex items-center h-full">
                        <div>
                        <h1>Pas de repas prévu ?</h1>
                        <h1 className="color-main-blue">Pas de Soucis !</h1>
                        <p className="my-14">
                            Dites adieu aux repas ennuyeux, avec des recommandations de recettes, <br />
                            la création de plans de repas et plus encore... <br />
                            Plus de 100 000 dîners sauvegardés à ce jour.
                        </p>
                        <ClassicButton to="/register">Crée un compte</ClassicButton>
                        </div>
                    </div>
                </div>

                <div>
                <img src={kitchen} alt="kitchen" />
                </div>
            </div>
        </section>
    );
}

export default HomeSectionTop;