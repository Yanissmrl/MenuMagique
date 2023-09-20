import { useState, useRef } from "react"

export default function Ingredients() {
    // UseRef
    const addIngredientRef = useRef(null)

    //UseState 
    const [pop, setPop] = useState(false)

    const ingredientsArr = [
        'poulet',
        'pomme de terre',
        'carotte',
        'poireau',
        'chou',
        'chou-fleur',
        'chou rouge',
        'chou vert',
        'chou de Bruxelles',
        'chou chinois',
        'chou romanesco',
        'chou-rave',
        'fraise',
        'framboise',
        'mûre',
        'myrtille',
        'cassis',
    ]

    // liste de plats
    const dishesArr = [
        'pattes bolognaise',
        'pattes carbonara',
        'pattes au pesto',
        'pattes au saumon',
        'pattes au thon',
        'pattes au poulet',
        'pattes au boeuf',
        'pattes au canard',
        'pattes au lapin',
        'pattes au porc',
        'pattes au veau',
        'pattes au canard',
        'pattes au lapin',
        'pattes au porc',
        'pattes au veau',
        'pattes au canard',
        'pattes au lapin',
        'pattes au porc',
        'pattes au veau',
        'pattes aux pattes',
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(addIngredientRef.current.value)
        setPop(false)
    }

    const handleclick = (e) => {
        console.log(e.target.textContent)
    }

    return (
        <>
            {
                pop &&
                <>
                    <form onSubmit={handleSubmit} type='submit'>
                        <input type="text" placeholder="Ex : Pomme ..." ref={addIngredientRef} />
                        <button >Ajouter l'ingredient</button>
                    </form>
                </>
            }
            <div>
                <h2>Ingrédients</h2>
                <div>
                    <p onClick={() => setPop(!pop)}>{pop ? 'fermer' : 'ajouter'}</p>
                </div>
            </div>
            <div>
                {ingredientsArr.map((ingredient, index) => {
                    return (
                        <>
                            <div key={index}>
                                <p onClick={handleclick}>{ingredient}</p>
                            </div>
                        </>
                    )
                })}

            </div >
            <div>
                <h2>Recettes</h2>
                {
                    dishesArr.map((dish, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <p onClick={handleclick}>{dish}</p>
                                </div>
                            </>
                        )
                    }
                    )
                }
            </div>
        </>
    )
}
