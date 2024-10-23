/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Recipe from "./Recipe";


const Recipes = ({handleWantToCook}) => {
    const [recipes, setRecipes]  = useState([])
    useEffect(()=>{
        fetch('/public/recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className="w-2/3">
            <div className="grid grid-cols-2 gap-4">
            {
                recipes.map(recipe => <Recipe 
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleWantToCook={handleWantToCook}
                    ></Recipe>)
            }
            </div>
        </div>
    );
};

export default Recipes;