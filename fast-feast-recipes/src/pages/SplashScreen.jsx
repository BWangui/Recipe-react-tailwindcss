
import logo from "../assets/logo.png"; // 

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landing");
    }, 15000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="flex flec-col justify items-center h-screen bg-center text-white"
      style={{
        backgroundImage: "url('../assets/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={logo}
        alt="logo.png"
        className="w-32 h-32 mb-4" 
      />

      {/* Bold, centered app name */}
      <h1 className=" <h1 className="text-white text-4xl font-bold>Fast Feast Recipes</h1>
    </div>
  );
};

export default SplashScreen;
