import React, { useState } from "react";

export const PostMovie = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [poster, setPoster] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!title || !year || !price || !poster) {
        alert("All fields are required!");
        return;
      }

    //   console.log(title, year, price, poster);
      

      const newMovie = {
        title,
        year,
        price: Number(price),
        poster,
      };
    //   console.log(newMovie);
      

      const response = await fetch("http://localhost:3001/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      });
      console.log(response);
      

      if(!response.ok){
        console.log("Något fel");
        return;
      }

    } catch (error) {
      console.log(error);
      return;
    }

    setTitle("");
    setYear("");
    setPrice("");
    setPoster("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Add new movie</h3>

      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Poster Url"
        value={poster}
        onChange={(e) => setPoster(e.target.value)}
      />

      <button type="submit">Add movie</button>
    </form>
    // <div>PostMovie</div>
  );
};
