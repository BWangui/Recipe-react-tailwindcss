import { Link } from "react-router-dom";

const categories = [
  { name: "Breakfast", image: "/breakfast.jpg" },
  { name: "Main Dish", image: "/main-dish.jpg" },
  { name: "Snacks", image: "/snacks.jpg" },
  { name: "Smoothies", image: "/smoothies.jpg" },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen p-5 bg-secondary">
      <h1 className="text-3xl font-bold text-darkBlue">Fast Feast Recipes</h1>
      <nav className="flex gap-4 my-4">
        <Link to="/home" className="text-primary">Home</Link>
        <Link to="/favorites" className="text-primary">Favorites</Link>
        <Link to="/explore" className="text-primary">Explore</Link>
      </nav>

      <h2 className="text-2xl font-semibold">Categories</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <Link key={cat.name} to={`/category/${cat.name.toLowerCase()}`} className="block">
            <div className="relative">
              <img src={cat.image} alt={cat.name} className="rounded-lg w-full h-40 object-cover" />
              <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2">{cat.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
