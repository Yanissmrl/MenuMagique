import SubmitButton from "../button/submit-button";

function AddRecipeFormBottom({ onSubmit }) {
    return (
        <div className="flex justify-center mb-48">
            <div className="flex flex-col items-center">
                <h1 className="mb-3">Et voilà le travail !</h1>
                <h1 className="mb-16 color-main-orange">Plus qu’à tester ! </h1>
                <SubmitButton name="save-recipe-submit" description="Créer la recette" cssClass="submit-cta-orange py-2.5 px-14 rounded-md text-white" />

            </div>
        </div>
    );
}

export default AddRecipeFormBottom;