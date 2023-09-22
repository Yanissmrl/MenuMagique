import EllipseSVGWithNumber from "../Icons/Ellipse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import SubmitButton from "../button/submit-button";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

function AddRecipeFormMiddle({ onSubmit }) {

    const titleRef = useRef(null);
    const descRef = useRef(null);


    const [initArr, setInitArr] = useState(['1']);
    const [ingredients, setIngredients] = useState([]);
    const [value, setValue] = useState("");
    const [inputValues, setInputValues] = useState({});
    const [recipeData, setRecipeData] = useState({
        Receipe_Title: '',
        Receipe_Desc: '',
        Ingredients: [
            { Ingredients_Id: '' }
        ],
    });



    const handleclick = () => {
        setInitArr(prevArr => [...prevArr, 'nouvel élément']);
    };


    // const handleChange = (e, index) => {
    //     const { value } = e.target;
    //     console.log("INDEXXXXXXX", index);
    //     setInputValues({Ingredients_Id: value});
    // };


    const handleChange = (e, index) => {
        const { value } = e.target;
        setInputValues({ Ingredients_Id: value });

        // Copier le tableau Ingredients et mettre à jour l'élément à l'indice donné
        const newIngredients = [...recipeData.Ingredients];
        newIngredients[index] = { Ingredients_Id: value };

        // Mettre à jour recipeData avec le nouveau tableau Ingredients
        setRecipeData({ ...recipeData, Ingredients: newIngredients });
    };

    useEffect(() => {
        axios.get('http://localhost/MenuMagiqueBack/index.php?route=get_ingredient').then((response) => {
            console.log(response.data.results);
            setIngredients(response.data.results)
            // console.log("ingredients", ingredients);
        });
    }, [])


    const valuesAsList = Object.values(inputValues);
    // console.log("valuesAsList", valuesAsList);

    const handleChildSubmit = () => {

        // console.log("recipeData", recipeData);


    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("titleRef.current.value", titleRef.current.value);
        setRecipeData({
            Receipe_Title: titleRef.current.value,
            Receipe_Desc: descRef.current.value,
            Ingredients: inputValues
        });
        console.log("recipeData", recipeData);
        if (recipeData.Receipe_Title && recipeData.Receipe_Desc && recipeData.Ingredients) {

            try {
                // console.log("recipeData", recipeData);
                const response = await axios.post('http://localhost/MenuMagiqueBack/index.php?route=add_recipe', recipeData);
                const data = response.data;

                if (data.success) {
                    // La recette a été ajoutée avec succès
                    console.log(data.message);
                } else {
                    // Une erreur s'est produite lors de l'ajout de la recette
                    console.error(data.message);
                }
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la requête', error);
            }
        } else {
            console.log("Veuillez remplir tous les champs");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <section className="flex justify-center">
                    <div className="container grid grid-rows-3 gap-16 mb-36">
                        <div>
                            <div className="flex flex-col items-center">
                                <div className="flex justify-items-start mb-16 w-full">
                                    <div className="flex items-center">
                                        <EllipseSVGWithNumber fillColor="var(--main-grey)" number="1" svgWidth={95} svgHeight={90} fontSize={64} textY={56.5} />
                                        <h3 className="mr-3 ml-3 mt-2">Création des ingrédients</h3>
                                        <p className="mt-3">* optionnel</p>
                                    </div>
                                </div>
                                <div className="flex justify-items-start w-full">
                                    <input type="text" name="ascii" placeholder="emoji..." className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size" />
                                </div>
                                <div className="flex justify-items-start w-full">
                                    <input type="text" name="email" placeholder="E-mail" className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center flex-col">
                            <div className="w-full flex justify-end">
                                <div className="flex flex-col w-full md:w-1/2 ">
                                    <div className="flex items-center justify-between mb-16">
                                        <div className="flex items-center">
                                            <EllipseSVGWithNumber fillColor="var(--main-orange)" number="2" svgWidth={95} svgHeight={90} fontSize={64} textY={56.5} />
                                            <h3 className="mr-3 ml-3 mt-2">Sélection des ingrédients</h3>
                                        </div>
                                        <div className="rounded-full bg-main-orange h-12 w-12 relative">
                                            <FontAwesomeIcon onClick={handleclick} className="absolute centerPosition text-white h-8" icon={faPlus} />
                                        </div>
                                    </div>
                                    <div className="flex justify-items-start w-full">
                                        <input ref={titleRef} type="text" name="ascii" placeholder="Titre de la recette" className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size" />
                                    </div>
                                    {
                                        initArr.map((element, index) => {
                                            return (
                                                <select key={index} onChange={(e) => handleChange(e, index)} name="ingredient" id="ingredientSelect">
                                                    {
                                                        ingredients.map((element, index) => {
                                                            return (
                                                                <option value={element.Ingredients_Id}>{element.Name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            )
                                        })
                                    }
                                    <p onClick={handleChildSubmit}>valider les infos</p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center">
                                <div className="flex justify-items-start mb-16 w-full">
                                    <div className="flex items-center">
                                        <EllipseSVGWithNumber fillColor="var(--main-blue)" number="3" svgWidth={95} svgHeight={90} fontSize={64} textY={56.5} />
                                        <h3 className="mr-3 ml-3 mt-2">Description de la recette</h3>
                                    </div>
                                </div>
                                <div className="flex justify-items-start w-full">
                                    <textarea ref={descRef} type="text" name="desciptionRecipe" placeholder="Description..." className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex justify-center mb-48">
                        <div className="flex flex-col items-center">
                            <h1 className="mb-3">Et voilà le travail !</h1>
                            <h1 className="mb-16 color-main-orange">Plus qu’à tester ! </h1>
                            <SubmitButton name="save-recipe-submit" description="Créer la recette" cssClass="submit-cta-orange py-2.5 px-14 rounded-md text-white" />

                        </div>
                    </div>
                </section>
            </form>
        </>
    );
}

export default AddRecipeFormMiddle;