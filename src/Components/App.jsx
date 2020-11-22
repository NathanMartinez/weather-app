import DetailsSection from "./DetailsSection";
import HeroSection from "./HeroSection";
const { default: SearchBar } = require("./SearchBar");

function App() {
  return (
    <div className="App">
      <HeroSection />
      <DetailsSection />
      <SearchBar />
    </div>
  );
}

export default App;
