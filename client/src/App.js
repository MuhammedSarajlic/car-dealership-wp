import { Routes, Route } from "react-router-dom";
import { Home, CarsList } from "./container";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carslist" element={<CarsList />} />
      </Routes>
    </>
  );
}

export default App;
