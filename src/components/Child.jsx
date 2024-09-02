import { useEffect, useState } from "react";

import axios from "axios";

const Child = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddNewPost = () => {
    const newPost = {
      id: 101,
      title: "foo",
      body: "bar",
      userId: 1,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((response) => {
        setData([...data, response.data]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddNewPost}
      >
        Add new data
      </button>
      {/* <h1 className="text-3xl font-bold text-center mt-10">Posts ℹ️</h1>
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
      )} */}
    </section>
  );
};

export default Child;
