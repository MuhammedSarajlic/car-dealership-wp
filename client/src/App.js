import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { FooterSection } from "./components";
import CarDetails from "./components/CarDetails";
import { Home, CarsList } from "./container";
import { db } from "./Firebase/Firebase";
import ScrollToTop from "./functions/ScrollToTop";

function App() {
  const [carsCollection, setCarsCollection] = useState(null);
  const [searchQuery, setSearchQuery] = useState({
    brandName: "",
    model: "",
    year: "",
  });
  const carsCollectionRef = collection(db, "cars");

  const getCarsCollection = async () => {
    const data = await getDocs(carsCollectionRef);
    const temp = await data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setCarsCollection(temp);
  };

  useEffect(() => {
    getCarsCollection();
    console.log(carsCollection);
  }, []);

  if (!carsCollection) return <div>Loading...</div>;

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              carsCollection={carsCollection}
              setSearchQuery={setSearchQuery}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          path="/cars"
          element={
            <CarsList
              carsCollection={carsCollection}
              searchQuery={searchQuery}
            />
          }
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
