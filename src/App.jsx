import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Ourrecipes from './components/Ourrecipes';
import Recipes from './components/Recipes';
import Sidebar from './components/Sidebar';

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };

  const handleWantToCook = (recipe) => {
    if (recipeQueue.find((res) => res === recipe)) {
      alert('This item already on the queue.');
    } else {
      setRecipeQueue([...recipeQueue, recipe]);
    }
  };

  const handleRemove = (id) => {
    // find which recipe to remove
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);

    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Ourrecipes></Ourrecipes>
      <section className="container mx-auto flex  gap-8 py-4 px-3 mt-6">
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Sidebar
          recipeQueue={recipeQueue}
          handleRemove={handleRemove}
          preparedRecipe={preparedRecipe}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </>
  );
}

export default App;
