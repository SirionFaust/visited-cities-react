import { useState } from "react";
import "./index.css";
import CardForm from "./components/CardForm";
import Card from "./components/Card";
function handleClick() {}

function App() {
  const [cities, setCities] = useState([]);
  const addCity = (city) => {
    setCities([...cities, city]);
  };
  return (
    <>
      <div className="pt-10 pb-0">
        <h1 className="font-bold  text-center text-7xl md:text-9xl drop-shadow-md text-gray-300">
          Visited cities
        </h1>
      </div>
      <div>
        <CardForm className="items-center" addCity={addCity}></CardForm>
        <Card cities={cities}></Card>
      </div>
    </>
  );
}

export default App;
