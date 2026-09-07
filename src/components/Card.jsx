function Card({ cities }) {
  return (
    <div className="flex flex-wrap justify-center mx-auto md:flex-row gap-6 p-6 rounded-3xl">
      {cities.map((city) => (
        <div
          key={city.Id}
          className="flex-1 bg-gray-200 rounded-2xl shadow-md overflow-hidden flex flex-col"
        >
          <img
            className="h-48 object-cover rounded-t-2xl w-full"
            src={city.imgURL}
            alt={city.name}
          />

          <div className="p-4 text-center flex flex-col grow">
            <h3 className="text-xl font-bold text-gray-800 mt-2 px-1">
              {city.name}
            </h3>
            <p className="text-gray-600 mt-2 text-sm px-1 line-clamp-2 grow">
              {city.description}
            </p>
            <div className="mt-4">
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                  city.isVisited
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {city.isVisited ? "✓ Visitata" : "✗ Non visitata"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
