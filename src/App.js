import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Formations from "./Pages/Formations";
import Apropos from "./Pages/Apropos";
import FormationDetails from "../src/Components/shared/FormationDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/formations" element={<Formations />} />
          <Route
            path="/formations/:formation_name"
            element={<FormationDetails />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
