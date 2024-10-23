import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Ourrecipes from './components/Ourrecipes';
import Recipes from './components/Recipes';
import Sidebar from './components/Sidebar';

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const handleWantToCook = (recipe) => {
    if (recipeQueue.find((res) => res === recipe)) {
      alert('This item already on the queue');
    } else {
      setRecipeQueue([...recipeQueue, recipe]);
    }
  };

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Ourrecipes></Ourrecipes>
      <section className="container mx-auto flex  gap-8 py-4 px-3 mt-6">
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </>
  );
}

export default App;
