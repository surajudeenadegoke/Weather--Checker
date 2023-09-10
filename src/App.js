import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import WeatherApp from "./Components/WeatherApp";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <WeatherApp />
      <Footer/>
    </div>
  );
};

export default App;
