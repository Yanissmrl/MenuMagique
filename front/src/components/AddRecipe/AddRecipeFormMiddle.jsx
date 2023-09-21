import EllipseSVGWithNumber from "../Icons/Ellipse";

function AddRecipeFormMiddle(){
    return (
        <section className="flex justify-center">
            <div className="container grid grid-rows-3 gap-16 mb-36">
                <div>
                    <div className="flex flex-col items-center">
                        <div className="flex justify-items-start mb-16 w-full">
                            <div className="flex items-center">
                                <EllipseSVGWithNumber fillColor="var(--main-grey)" number="1" svgWidth={95} svgHeight={90} fontSize={64} textY={56.5}/>
                                <h3 className="mr-3 ml-3 mt-2">Création des ingrédients</h3>
                                <p className="mt-3">* optionnel</p>
                            </div>
                        </div>
                        <div className="flex justify-items-start w-full">
                            <input type="text" name="ascii" placeholder="emoji..." className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size"/>
                        </div>
                        <div className="flex justify-items-start w-full">
                            <input type="text" name="email" placeholder="E-mail" className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size"/>
                        </div>
                    </div>
                </div>
                <div className="flex items-center flex-col">
                    <div className="w-full flex justify-end">
                        <div className="flex flex-col w-full md:w-1/2 ">
                            <div className="flex items-center mb-16">
                                    <EllipseSVGWithNumber fillColor="var(--main-orange)" number="2" svgWidth={95} svgHeight={90} fontSize={64} textY={56.5}/>
                                    <h3 className="mr-3 ml-3 mt-2">Sélection des ingrédients</h3>
                            </div>
                            <div className="flex items-center">
                                <input type="text" name="ascii" placeholder="Ingrédients...." className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center">
                        <div className="flex justify-items-start mb-16 w-full">
                            <div className="flex items-center">
                                <EllipseSVGWithNumber fillColor="var(--main-blue)" number="3" svgWidth={95} svgHeight={90} fontSize={64} textY={56.5}/>
                                <h3 className="mr-3 ml-3 mt-2">Description de la recette</h3>
                            </div>
                        </div>
                        <div className="flex justify-items-start w-full">
                            <textarea type="text" name="desciptionRecipe" placeholder="Description..." className="w-full mb-5 py-4 px-6 rounded-md bg-light-blue border-main-blue input-blue input-size"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default AddRecipeFormMiddle;