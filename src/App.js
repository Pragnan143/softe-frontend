import HeroSection from "./components/HeroSection";
import Marketing from "./components/Marketing";
import Mentor from "./components/Mentor";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App bg-[#f5f5f5]">
      <Navbar />
      <HeroSection />
      <Products />
      <Mentor />
      <Marketing />
    </div>
  );
}

export default App;
