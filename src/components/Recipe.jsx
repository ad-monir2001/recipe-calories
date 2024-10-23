/* eslint-disable react/prop-types */
import { CiClock2 } from "react-icons/ci";
import { GoFlame } from "react-icons/go";

const Recipe = ({recipe,handleWantToCook}) => {
    const {recipe_name,image,short_description,preparing_time,calories,ingredients} = recipe
    return (
        <div className="border rounded-lg p-5 space-y-4">
            <img className="rounded-lg" src={image} alt="" />
            <h3 className="font-semibold text-xl"> {recipe_name}</h3>
            <h4 className="font-normal text-base text-gray-500">{short_description}</h4>
            <hr />
            <h1 className="text-lg font-medium">Ingredients: {ingredients.length}</h1>
            <ul className="list-disc text-gray-500 font-normal text-lg ml-6">
                {
                    
                    ingredients.map((ingredient,idx) => <li key={idx}>{ingredient}</li>)
                }
            </ul>
            <hr />
            <div className="flex gap-4 items-center">
            <p className="flex items-center gap-2 font-normal text-base"><CiClock2 /> {preparing_time} minutes</p>
            <p className="flex items-center gap-2 font-normal text-base"><GoFlame /> {calories} calories</p>
            </div>
            <button onClick={() => handleWantToCook(recipe)} className="font-medium text-lg bg-[#0BE58A] py-3 px-6 rounded-full">Want to Cook</button>
        </div>
    );
};

export default Recipe;