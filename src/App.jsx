import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Ourrecipes from './components/Ourrecipes';
import Recipes from './components/Recipes';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Ourrecipes></Ourrecipes>
      <section className='container mx-auto flex  gap-8 py-4 px-3'>
        <Recipes></Recipes>
        <Sidebar></Sidebar>
      </section>
    </>
  );
}

export default App;
