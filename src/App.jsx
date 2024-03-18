import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
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
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="bg-bgDark2 h">
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <ShimmerUI /> : <Cards />}
        </div>
      </div>
    </div>
  );
};

export default App;
