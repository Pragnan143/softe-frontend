import HeroSection from "./components/HeroSection";
import Marketing from "./components/Marketing";
import Mentor from "./components/Mentor";
import Navbar from "./components/Navbar";
import OurProducts from "./components/OurProducts";
import Products from "./components/Products";
import LeadershipTeam from "./components/LeadershipTeam";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App bg-[#f5f5f5]">
      <Navbar />
      <HeroSection />
      <Products />
      <Mentor />
      <Marketing />
      <OurProducts />
      <LeadershipTeam />
      <Footer />
    </div>
  );
}

export default App;
