import Ingredients from "../components/FindRecipe/Ingredients";
import Recipes from "../components/FindRecipe/Recipes";
import SubmitButton from "../components/button/submit-button";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons' // Updated icon
import axios from "axios";


export default function FindRecipe() {
    const [pop, setPop] = useState(false)
    const addIngredientRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const ingredientName = addIngredientRef.current.value;
        
        // Create an object containing the data to send
        const data = {
            Name: ingredientName,
        };

        axios
            .post("http://localhost/MenuMagiqueBack/index.php?route=create_ingredient", data)
            .then((response) => {
                console.log(response.data);
                // Handle the response here, e.g., update your application's state.
            })
            .catch((error) => {
                console.error(error);
                // Handle errors here.
            });

        setPop(false);
    };
    

    return (
        <>
            <section className="flex justify-center mb-48 mt-28">
                <div className="relative container">
                    <h1 className="mb-32">Trouvez la recette parfaite <br />
                        <span className="text-main-blue">En vous servant de votre tête !</span>
                    </h1>
                    <Ingredients pop={pop} setPop={setPop} />

                    <div className="my-16 flex justify-center">
                        <SubmitButton name="search-recipe-submit" description="Rechercher une recette" cssClass="submit-cta-orange py-2.5 px-14 rounded-md text-white"/>
                    </div>

                    <Recipes />
                </div>
            </section>

            {/* Modal */}
            {pop && (
                <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
                    <div className="fixed inset-0 bg-black opacity-75 cursor-pointer" onClick={() => setPop(false)}></div>
                    <div className="relative z-10 bg-white p-8 rounded-lg w-2/4">
                        <FontAwesomeIcon
                            onClick={() => setPop(false)}
                            className="absolute top-4 right-4 text-gray-600 cursor-pointer"
                            icon={faTimes}
                        />
                        <h2 className="uppercase text-main-blue text-center mb-16">Ajout d’ingrédient</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col items-center ">
                            <input
                                className="inputPop mb-16 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size "
                                type="text"
                                placeholder="Ex : Pomme ..."
                                ref={addIngredientRef}
                            />
                            <button className="bg-main-orange py-2.5 px-14 rounded-md text-white">
                                Ajouter l'ingredient
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
