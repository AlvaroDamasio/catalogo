import { Container } from "./styles";
import newyork from "../../assets/produto.png"
import militar from "../../assets/militar.jpeg"
import flamengo from "../../assets/flamengo.png"
import puma from "../../assets/puma.png"

const products = [
    {
        marca: "New York",
        valor: "40,00",
        descrição: "BONÉ NEW YORK",
        image: newyork
    },
    {
        marca: "Militar",
        valor: "20,00",
        descrição: "BONÉ MILITAR",
        image: militar
    },

    {
        marca: "Flamengo",
        valor: "20,00",
        descrição: "BONÉ FLAMENGO",
        image: flamengo
    },

    {
        marca: "Puma",
        valor: "20,00",
        descrição: "BONÉ PUMA",
        image: puma
    }
]

export default function Menu(props){
    return(
        <Container>

            {products.map((elemento)=>{
                return(
                    <a onClick={()=>{props.onclicked( elemento.image, elemento.descrição, elemento.marca, elemento.valor)}}>
                        <img src={elemento.image}>
                        </img>
                    </a>
                )
            })}
            
                    

        
        </Container>
    )
}