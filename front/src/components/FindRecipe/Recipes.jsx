import { useEffect, useState } from "react";
import axios from "axios";

export default function Recipes() {
    const [dishesArr, setDishesArr] = useState([])
    useEffect(() => {
        axios.get('http://localhost/MenuMagiqueBack/index.php?route=get_receipe').then((response) => {
            // console.log(response.data.results);
            setDishesArr(response.data.results)
        });
    }, [])

    return (
        <div>
            <h2>Recettes</h2>
            {
                dishesArr.map((dish, index) => {
                    return (
                        <>
                            <div key={index}>
                                <p >{dish.Receipe_Title}</p>
                            </div>
                        </>
                    )
                }
                )
            }
        </div>
    );
}