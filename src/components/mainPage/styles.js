import styled from "styled-components"

export const Container = styled.div`
    background-color: black;
    width: 100vw;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0px;
    position: relative;
    
    
    
    @media (min-width: 768px) {
        display: flex ;
        padding: 0;
    }
`
export const Title = styled.div`
    
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 80px;
    color: #F9BA15;
   
    font-weight: 700; 
    z-index: 4;

    
    

    p{
        color: white;
        font-size: 40px;
        color: #FFF; 
        margin: 0;
        z-index: 4;
        
    }
    @media (min-width: 768px) {
        width: 50%;
    }
`

export const Subtitle = styled.h1 `
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 90px;
    color: #FFF; 
    color: #F0B315; 
    z-index: 4;
    

    
    @media (min-width: 768px) {
        width: 40%;
        
    }
`


export const ImageContainer = styled.div `
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    
    
    img{
        height: 400px;
        width: 300px;
        z-index: 3;

        @media (min-width: 700px) {
            width: 100%;
            height: 100%;
        }
    };

    @media (min-width: 700px) {
        width: 30%;
        
    }


`

export const Retangle = styled.div`
    width: 171px;
    height: 80px;
    position: absolute;
    left: 100%;
    background-color: #AF8108B5;
    z-index: 1;

    @media (min-width: 768px) {
        display: block;
    }
`