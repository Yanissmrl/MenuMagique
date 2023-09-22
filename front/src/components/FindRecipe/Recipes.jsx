import { useEffect, useState } from "react";
import axios from "axios";

export default function Recipes() {
    const [dishesArr, setDishesArr] = useState([]);
    useEffect(() => {
        axios.get('http://localhost/MenuMagiqueBack/index.php?route=get_recipes_with_ingredients').then((response) => {
            // console.log(response.data.results);
            setDishesArr(response.data.results);
        });
    }, []);

    return (
        <div>
            <h2 className="mt-32">Recettes</h2>
            <div className="flex flex-wrap gap-3">
                {dishesArr.map((dish, index) => (
                    <div key={index} className={`mt-5 max-w-xs cursor-pointer`}>
                        <div className="py-3 px-1 rounded-xl bg-main-blue border-blue text-white">
                            <div className="text-center px-4">
                                <p>{dish.Receipe_Title}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    );
}
