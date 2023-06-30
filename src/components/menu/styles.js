import styled from "styled-components";

export const Container =  styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    margin-bottom: 5%;
    margin-top: 5%;
    cursor: pointer;
    z-index: 3;
    
    
    img{
        
        width: 50px;
        height: 50px;
        transition: 0.5s;
        border-radius: 5px;
        background-color: white;
    
    }
    img:hover{
        width: 70px;
        height: 70px;
    }

    @media (min-width: 768px) {
        flex-direction: column;
        width: 10%;
        height: 80vh;
        justify-content:center;
        gap: 30px;

    }
`