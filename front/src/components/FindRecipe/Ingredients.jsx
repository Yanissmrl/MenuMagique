export default function Ingredients() {
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

    const handleclick = (e) => {
        console.log(e.target.textContent)
    }
    return (
        <>
            <h1>Ingrédients</h1>
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
        </>
    )
}
