import { useState } from "react";

function CardForm({ addCity }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imgURL: "",
    isVisited: false,
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      Id: Math.random(),
      name: formData.name,
      description: formData.description,
      imgURL: formData.imgURL,
      isVisited: formData.isVisited,
    };
    setFormData({ name: "", description: "", imgURL: "", isVisited: false });
    addCity(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mb-10  text-white p-10  mt-10 justify-center"
    >
      <div className="flex rounded-lg  bg-zinc-900 shadow-md text-center ">
        <div className="rounded-l-lg flex flex-col p-5 font-bold hover:bg-zinc-200 hover:text-gray-700 transition-colors duration-200 ease-in-out">
          <label>Nome</label>
          <input
            className="p-2 rounded focus:outline-none"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col p-5 font-bold hover:bg-zinc-200 hover:text-gray-700 transition-colors duration-200 ease-in-out">
          <label>Descrizione</label>
          <input
            className="p-2 rounded focus:outline-none"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col p-5 font-bold hover:bg-zinc-200 hover:text-gray-700 transition-colors duration-200 ease-in-out">
          <label>Immagine</label>
          <input
            className="p-2 rounded focus:outline-none"
            type="text"
            name="imgURL"
            value={formData.imgURL}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col p-5 font-bold hover:bg-zinc-200 hover:text-gray-700 transition-colors duration-200 ease-in-out">
          <label>Visitata?</label>
          <input
            className="mt-3 accent-green-600"
            type="checkbox"
            name="isVisited"
            checked={formData.isVisited}
            onChange={handleInputChange}
          />
        </div>
        <button className="bg-zinc-900 hover:bg-green-600 transition-colors duration-200 ease-in-out p-5 font-bold rounded-r-lg">
          Aggiungi Card
        </button>
      </div>
    </form>
  );
}

export default CardForm;
