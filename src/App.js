import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios'
import Postpage from "./Components/PostContainer/Postpage.js";


function App() {
  const [nasaData, setnasaData] = useState([])

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Jc3Uwk3BflTjVr4pOCID0l4IUhurIWwupPAapZ8r')
    .then( res=>{
      setnasaData(res.data)
      console.log(res.data)
     
    })

    .catch( err =>{
      debugger
    })
  }, [] )
  return (
    <div className="App">
      <Postpage data ={nasaData}/>
    </div>
  );
}

export default App;
