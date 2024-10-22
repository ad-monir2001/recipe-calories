
const Header = () => {
    return (
        <header className="container mx-auto flex items-center justify-between py-4 px-3">
            <h1 className="font-bold text-3xl">Recipe Calories</h1>
            <div className="flex gap-4">
                <a href="#">Home</a>
                <a href="#">Recipes</a>
                <a href="#">About</a>
                <a href="#">Search</a>
            </div>
            <div>
                <input className="border rounded-lg" placeholder="hello" type="text" />
                
            </div>
        </header>
    );
};

export default Header;