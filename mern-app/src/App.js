import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const getFruits = async () => {
      //to be able to use async and await in useEffect we need to create an async function.
      const response = await fetch("http://localhost:5001/fruits"); //we fetch from our api server running on port 5001
      const data = await response.json(); //we get the json data

      setFruits(data);
    };

    getFruits();
  }, []);

  return (
    <div>
      {fruits.map((fruit) => {
        // The key for the fruit object is called "name"
        return <p>{fruit.name}</p>;
      })}
    </div>
  );
}

export default App;
