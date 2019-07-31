import React from 'react'

export default function ImageCreator(props){
    console.log(props)
    return(
        <div>
            <div className="image-title">
                <h1>{props.title}</h1>
            </div>

            <div className="image-date">
                {props.date}
            </div>

            <div className="image-loader">
                <img src={props.imgUrl} alt={props.title}></img>
            </div>

            <div className="image-description">
                {props.explanation}
            </div>
        </div>
    )
}