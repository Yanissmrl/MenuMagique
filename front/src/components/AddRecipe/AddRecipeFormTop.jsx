

function AddRecipeFormTop(){
    return (
        <section className="flex justify-center mb-48">
            <div className="container grid md:grid-cols-2 md:grid-rows-1 gap-16 ">
                <div>
                    <div className="flex items-center h-full">
                        <div>
                        <h1>Créez votre recette </h1>
                        <h1 className="color-main-orange">C’est vous le chef ! </h1>
                        <p className="my-8">
                            Trouvez des recettes faciles à réaliser parmis notre selection, <br />
                            Le mieux dans tout ça c'est qu'elles sont pas chères ! 
                        </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center ">
                    <video autoPlay loop muted>
                        <source src="/women-cooking.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
}

export default AddRecipeFormTop;