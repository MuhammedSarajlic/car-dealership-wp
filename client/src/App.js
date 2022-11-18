import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { FooterSection } from "./components";
import CarDetails from "./components/CarDetails";
import { Home, CarsList } from "./container";
import { db } from "./Firebase/Firebase";
// import { v4 } from "uuid";

function App() {
  const [carsCollection, setCarsCollection] = useState([]);

  const carsCollectionRef = collection(db, "cars");

  const getCarsCollection = async () => {
    const data = await getDocs(carsCollectionRef);
    setCarsCollection(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getCarsCollection();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home carsCollection={carsCollection} />} />
        <Route
          path="/cars"
          element={<CarsList carsCollection={carsCollection} />}
        />
        <Route
          path="/cars/:id"
          element={<CarDetails carsCollection={carsCollection} />}
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <FooterSection />
    </>
  );
}

export default App;
