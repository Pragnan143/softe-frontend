import HeroSection from "./components/HeroSection";
import Marketing from "./components/Marketing";
import Mentor from "./components/Mentor";
import Navbar from "./components/Navbar";
import OurProducts from "./components/OurProducts";
import Products from "./components/Products";

function App() {
  return (
    <div className="App bg-[#f5f5f5]">
      <Navbar />
      <HeroSection />
      <Products />
      <Mentor />
      <Marketing />
      <OurProducts />
    </div>
  );
}

export default App;
