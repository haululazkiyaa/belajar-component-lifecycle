import { useEffect, useState } from "react";

const Child = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold text-center mt-10">Posts ℹ️</h1>
      {data.length === 0 ? (
        <p className="text-center mt-10">Memuat data...</p>
      ) : (
        <div className="container mx-auto grid grid-cols-3 gap-4 my-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="mt-2">{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Child;
