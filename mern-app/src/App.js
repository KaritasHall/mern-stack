import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    const getFruits = async () => {
      //to be able to use async and await in useEffect we need to create an async function.
      const response = await fetch("http://localhost:5001/fruits"); //we fetch from our api server running on port 5001
      const data = await response.json(); //we get the json data

      setFruits(data);
    };

    const getVegetables = async () => {
      //to be able to use async and await in useEffect we need to create an async function.
      const response = await fetch("http://localhost:5001/vegetables"); //we fetch from our api server running on port 5001
      const data = await response.json(); //we get the json data

      setVegetables(data);
    };
    getFruits();
    getVegetables();
  }, []);

  return (
    <>
      <div>
        {fruits.map((fruit) => {
          // The key for the fruit object is called "name"
          return <p key={fruit._id}>{fruit.name}</p>;
        })}
      </div>
      <div>
        {vegetables.map((vegetable) => {
          return <p key={vegetable._id}>{vegetable.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
