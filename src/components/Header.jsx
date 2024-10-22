import { FaRegUserCircle } from 'react-icons/fa';
const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between py-4 px-3">
      <h1 className="font-bold text-3xl">Recipe Calories</h1>
      <div className="flex gap-4 text-[#150b2bb3]">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">About</a>
        <a href="#">Search</a>
      </div>
      <div className="flex items-center gap-5">
        <input
          className="px-4 py-2 rounded-3xl bg-gray-100"
          placeholder="Search"
          type="text"
        />
        <FaRegUserCircle className="bg-green-400 rounded-full p-2 w-8 h-8"></FaRegUserCircle>
      </div>
    </header>
  );
};

export default Header;
