import React, { useState, useEffect } from "react";
import "./App.css";
import ImageCreator from './components/imageCreator' 
import axios from 'axios'
import './index.css'




function App() {
  const [spaceImg, setSpaceImg] = useState([])

  useEffect( () => {
    axios
          .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
          .then(res => {
              setSpaceImg(res.data)
          })
          .catch(err => {
              console.log(err)
          })
    }, [])

  return (
    <div className="App">
      <ImageCreator className="container-background"
      imgUrl={spaceImg.url}
      title={spaceImg.title}
      explanation={spaceImg.explanation}
      date={spaceImg.date}
      author={spaceImg.copyright}
      />
    </div>
  );
}

export default App;
