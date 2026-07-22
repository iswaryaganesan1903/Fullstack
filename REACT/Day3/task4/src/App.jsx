import React from "react";
import "./App.css";

import Product1 from "./assets/product1.jpg";
import Product2 from "./assets/product2.jpg";
import Product3 from "./assets/product3.jpg";
import Product4 from "./assets/product4.jpg";

const App = () => {
  return (
    <div className="gallery">
      <img src={Product1} alt="Product 1" />
      <img src={Product2} alt="Product 2" />
      <img src={Product3} alt="Product 3" />
      <img src={Product4} alt="Product 4" />
    </div>
  );
};

export default App;