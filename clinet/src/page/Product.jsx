import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [data, setData] = useState([]);
  const [loding, setLodimg] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="">
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>${item.price}</p>
          <img src={item.image} alt={item.title} width="150" />
        </div>
      ))}
    </div>
  );
}

export default Product;
