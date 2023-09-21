import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Ingredients(props) {
    // UseState 
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/MenuMagiqueBack/index.php?route=get_ingredient').then((response) => {
            console.log(response.data.results);
            setIngredients(response.data.results);
        });
    }, [!props.pop]);

    const handleclick = (e) => {
        console.log(e.target.textContent);
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="mt-8">Ingrédients</h2>
                {localStorage.getItem('token') && (
                    <div className="rounded-full bg-main-orange h-12 w-12 relative cursor-pointer">
                        <FontAwesomeIcon className="absolute centerPosition text-white h-8" onClick={() => props.setPop(!props.pop)} icon={faPlus} />
                    </div>
                )}
            </div>
            <div className="flex flex-wrap gap-3">
                {ingredients.map((ingredient, index) => (
                    <div key={index} className={`mt-5 max-w-xs cursor-pointer flex-grow w-[calc(20% + ${ingredient.Name.length * 5}px)]`}>
                        <div className="py-3 px-1 rounded-full border-orange color-main-orange">
                            <div className="text-center px-4">
                                <p onClick={handleclick}>{ingredient.Name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
