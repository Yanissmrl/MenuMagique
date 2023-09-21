import EllipseSVG from "../Icons/Ellipse";

function HomeSectionMiddle(){
    return (
        <section>
            <div className="flex justify-center mb-48">
                <div className="container">
                    <div className="w-full gap-8 grid md:grid-cols-3 md:grid-rows-1 sm:grid-rows-3">
                        <div className="flex flex-col items-center">
                            <EllipseSVG fillColor="var(--main-grey)" number="1" svgWidth={125} svgHeight={125} fontSize={64} textY={67.5}/>
                            <h4 className="mb-6 mt-8">Rentrez vos ingrédients</h4>
                            <p className="text-center max-w-sm">Renseignez les ingrédients restants dans votre frigo ou dans vos placards </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <EllipseSVG fillColor="var(--main-orange)" number="2" svgWidth={125} svgHeight={125} fontSize={64} textY={67.5}/>
                            <h4 className="mb-6 mt-8">Sélectionner une recette</h4>
                            <p className="text-center max-w-sm">Nous vous proposons plusieurs recettes originales</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <EllipseSVG fillColor="var(--main-blue)" number="3" svgWidth={125} svgHeight={125} fontSize={64} textY={67.5}/>
                            <h4 className="mb-6 mt-8">Au fourneau</h4>
                            <p className="text-center max-w-sm">Réaliser la recette en suivant les instructions et Hop ! C’est prêt !</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mb-48">
                <div className="flex flex-col items-center">
                    <h2 className="mb-3">🚀</h2>
                    <h4 className="mb-3">Fonctionnalités</h4>
                    <h3 className="mb-3">Plus que des recettes</h3>
                    <p className="text-center">En bref, MenuMagique est votre nouveau chef personnel.</p>
                </div>
            </div>
        </section>

    );
}

export default HomeSectionMiddle;