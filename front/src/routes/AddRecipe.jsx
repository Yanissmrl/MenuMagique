import AddRecipeFormTop from "../components/AddRecipe/AddRecipeFormTop"
import AddRecipeFormMiddle from "../components/AddRecipe/AddRecipeFormMiddle"
import AddRecipeFormBottom from "../components/AddRecipe/AddRecipeFormBottom"
import axios from "axios";
import { useState } from "react";


export default function AddRecipe(recipeData) {

    return (
        <>
            <AddRecipeFormTop />
            <AddRecipeFormMiddle />
        </>

    )
}