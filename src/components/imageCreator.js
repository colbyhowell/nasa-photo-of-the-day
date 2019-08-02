import React from 'react'
import {Title, Date, Image, Description, ImgDesc, Container} from './Styling'

export default function ImageCreator(props){
    console.log(props)
    return(

        
        <Container>
                <Title>
                    {props.title}
                </Title>

                <Date>
                    Date: {props.date}
                </Date>
            <ImgDesc>
                <Image>
                    <img src={props.imgUrl} alt={props.title}></img>
                </Image>

                <Description>
                    {props.explanation}
                </Description>
            </ImgDesc>
        </Container>
    )
}

