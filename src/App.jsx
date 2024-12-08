import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element= {<HomePage/>} />
        <Route path="/:alpha3Code" element= {<CountryDetails/>} />
      </Routes>

    </div>
  );
}

export default App;
