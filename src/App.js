import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios'
import Postpage from "./Components/PostContainer/Postpage.js";
import Content from "./Components/PostContainer/BackgroundIMG";
import img from "./Components/PostContainer/nasaicon.png";


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

  const makeStyles = () => {
    return {
      h1: {
        fontSize: '3rem',
        color: 'white'
      }
  }}


  return (
    <Content  className="App">
      <img
          alt="post thumbnail"
          className="post-image"
          src={img}
        />
      <h1 style={makeStyles().h1} > NASA Photo of the Day</h1>
      <Postpage data ={nasaData}/>
    </Content>
  );
}

export default App;
