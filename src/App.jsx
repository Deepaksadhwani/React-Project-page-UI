import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import ShimmerUI from "./components/Shimmer UI";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      {loading ? <ShimmerUI /> : <Cards />}
    </div>
  );
};

export default App;
