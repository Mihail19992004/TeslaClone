import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

export function Section({title, img, description, rightBtnText, leftBtnText}) {
    return (<Wrap img={img}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
        <ButtonGroup>
            <LeftButton>
                {leftBtnText}
            </LeftButton>
            {rightBtnText ?(<RightButton>
                {rightBtnText}
            </RightButton>) : null}
        </ButtonGroup>
        <DownArrow src='/images/down-arrow.svg'/>
            </Fade>
        </Buttons>

    </Wrap>)
}


const Wrap = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: not-repeat;
    background-image: ${props=> `url(${props.img})`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    `
const ItemText = styled.div`
    
    padding-top: 15vh;
    text-align: center;
    
    `
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    `

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    
    `
const  RightButton = styled(LeftButton)`
background: white;
opacity:0.65;
color: black;
`

const DownArrow = styled.img`
    margin-top:20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    
    
    `
const Buttons = styled.div`
    
    `