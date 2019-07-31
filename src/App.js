import React, { useState, useEffect } from "react";
import "./App.css";
import ImageCreator from './components/imageCreator' 
import axios from 'axios'




function App() {
  const [spaceImg, setSpaceImg] = useState([])

  useEffect( () => {
    axios
          .get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
          .then(res => {
            console.log(res)

              setSpaceImg(res.data)
          })
          .catch(err => {
              console.log(err)
          })
    }, [])

  return (
    <div className="App">
      <ImageCreator 
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
