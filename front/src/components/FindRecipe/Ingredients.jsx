import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default function Ingredients(props) {
    // UseRef

    //UseState 
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        axios.get('http://localhost/MenuMagiqueBack/index.php?route=get_ingredient').then((response) => {
            console.log(response.data.results);
            setIngredients(response.data.results)
            // console.log("ingredients", ingredients);
        });
    }, [!props.pop])


    const handleclick = (e) => {
        console.log(e.target.textContent)
    }

    return (
        <>

            <div className="flex items-center justify-between">
                <h2>Ingrédients</h2>
                {
                    localStorage.getItem('token') &&
                    <div className="rounded-full bg-main-orange h-12 w-12 relative cursor-pointer">
                        <FontAwesomeIcon className="absolute centerPosition text-white h-8" onClick={() => props.setPop(!props.pop)} icon={faPlus} />
                    </div>
                }
            </div>
            <div>
                {ingredients.map((ingredient, index) => {
                    return (
                        <>
                            <div key={index}>
                                <p onClick={handleclick}>{ingredient.Name}</p>
                            </div>
                        </>
                    )
                })}

            </div >

        </>
    )
}
