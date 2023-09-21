import Ingredients from "../components/FindRecipe/Ingredients";
import Recipes from "../components/FindRecipe/Recipes";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function FindRecipe() {
    const [pop, setPop] = useState(false)

    const addIngredientRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(addIngredientRef.current.value)
        setPop(false)
    }

    return (


        <>
            <section className="flex justify-center mb-48 mt-28">
                <div className="relative container">
                    {
                        pop &&
                        <>
                            <form className=" flex flex-col justify-around items-center border-main-orange border border-b-4 rounded-2xl absolute centerPosition bg-light-green w-2/5 h-3/5" onSubmit={handleSubmit} type='submit'>
                                <FontAwesomeIcon onClick={() => setPop(!pop)} className="absolute h-8 right-4 top-4" icon={faXmark} />
                                <h2 className="uppercase text-main-blue text-center">Ajout d’ingrédient</h2>
                                <input className="inputPop mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size" type="text" placeholder="Ex : Pomme ..." ref={addIngredientRef} />
                                <button className="bg-main-orange py-2.5 px-14 rounded-md text-white" >Ajouter l'ingredient</button>
                            </form>
                        </>
                    }
                    <h1>Trouvez la recette parfaite <br />
                        <span className="text-main-blue">En vous servant de votre tête !</span>
                    </h1>
                    <Ingredients pop={pop} setPop={setPop} />
                    <Recipes />
                </div>
            </section>
        </>

    )
}