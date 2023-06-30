
import { useState } from "react"
import produto from "../../assets/produto.png"
import Footer from "../footer/FooterComponent"
import Menu from "../menu/MenuComponent"
import { Container, ImageContainer, Retangle, Subtitle, Title } from "./styles"


export default function Page(){

    const [image, setImage] = useState(produto)
    const [description, setDescription] = useState("boné new york")
    const [marca , setMarca] = useState("New York")
    const [valor, setValor] = useState("20,00")

    function swipeImage(image, description, marca, valor){
        setImage(image)
        setDescription(description)
        setMarca(marca)
        setValor(valor)
    }

    return(
        
        <div>

            <Container>

                <Title>
                    R${valor}
                    <p>
                        {description}

                    </p>
                </Title>

                <ImageContainer>
                    <img src = {image}></img>
                </ImageContainer>

                <Subtitle>
                    {marca}
                </Subtitle>
                <Menu onclicked = {swipeImage}/>
            
                <Retangle style={{top: "50%", left:"0%" }}/>
            </Container>

            <Footer/>
        
            
        </div>

           
        
    )
}