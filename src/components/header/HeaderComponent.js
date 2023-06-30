
import { Container, NavList, NavTitles, Nav } from "./styles"
export default function Header(){
    return (
        <Container>
            <Nav>
                <NavTitles>LOGO</NavTitles>
                <NavList>
                    <li>
                        <a>SHOP</a>
                    </li>
                    <li>
                        <a>NEW</a>
                    </li>
                    <li>
                        <a>SALE</a>
                    </li>
                </NavList>
            </Nav>
        </Container>
    )
}