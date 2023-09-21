import EllipseSVGWithNumber from "../Icons/Ellipse";

function AddRecipeFormMiddle(){
    return (
        <section className="flex justify-center">
            <div className="container grid grid-rows-3 grid-cols-2 md:grid-cols-1">
                <div>
                    <div>
                        <EllipseSVGWithNumber fillColor="var(--main-orange)" number="1" svgWidth={95} svgHeight={90} fontSize={64} textY={56.5}/>
                    </div>
                </div>
                <div>
                    
                </div>
                <div>
                
                </div>
            </div>
        </section>

    );
}

export default AddRecipeFormMiddle;