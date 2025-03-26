import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/landing'), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      {/* Logo at the top left */}
      <div className="absolute top-0 left-0 m-4">
        <img src="/images/logo.png" alt="Fast Feast Recipes Logo" className="w-16 h-16" />
      </div>

      {/* Centered title */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">Fast Feast Recipes</h1>
      </div>
    </div>
  );
}
export default SplashScreen;
