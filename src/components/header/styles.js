import styled from "styled-components";

export const Container = styled.div`
    
    background-color: black;
    width: 100vw;
    padding: 0;
    display: flex;
    align-items: center;
    color: white;
    z-index: 1000;
`

export const Nav = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

`
export const NavTitles = styled.h2`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 36px;
    color: white;
    display: none;
    @media (min-width: 768px) {
        display: block;
    }
`

export const NavList = styled.ul`
    width: 100vw;
    color: white;
    display: flex ;
    align-items: center;
    justify-content: space-around;
    
    padding: 10px;
    @media (min-width: 768px) {
        width: 20%;
    }
    a{
        color: #F0B315; 
        font-size: 24px;
        font-weight: 700;  
        
    }
    
    li{
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        list-style: none;
        
    }

`