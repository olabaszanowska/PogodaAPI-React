import React, { useState, useEffect } from "react";

import './App.css';

import axios from 'axios';

function App() {
  let [post, setPost] = useState(null);
  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather?lat=50.28&lon=19.17&appid=b8fd640ada767c74006e6805067a4eed').then((response) => {
        setPost(response.data);
        console.log(response.data);
      });
  }, []);


  if (!post) return null;


  return (

    <div>
      <h1>Miasto: {post.name}</h1>
      <h2>Pogoda</h2>
      <p>Temperatura: {post.main.temp}</p>
      <p>Ciśnienie: {post.main.pressure}</p>
      <p>Temperatura odczuwalna: {post.main.feels_like}</p>
      <p>{post.weather[0].description}</p>
    </div>

  );
}


export default App;

