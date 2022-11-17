import { Routes, Route } from "react-router-dom";
import { FooterSection } from "./components";
import CarDetails from "./components/CarDetails";
import { Home, CarsList } from "./container";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarsList />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        {/* <Route path="/cardetails" element={<CarDetails />} /> */}
      </Routes>
      <FooterSection />
    </>
  );
}

export default App;
