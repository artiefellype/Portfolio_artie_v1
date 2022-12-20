import { Container, NavContainer, NavItems, Items } from "./styles";
import Button from "../../utils/Button";
import LogoGlitch from "../../utils/Logo";

export default function Navbar() {
    return (
        <Container>
            <NavContainer>
                <LogoGlitch size="32px" />
                <NavItems>
                    <Items> SOBRE</Items>
                    <Items> WORK</Items>
                    <Items> EXPERIÊNCIA</Items>
                    <Items> CONTATO</Items>
                </NavItems>
                <Button margin="0 2rem 0 0" title="RESUME" link="teste.pdf" />
                <span className="dropdown"><i className="uil uil-bars"></i></span>
            </NavContainer>
        </Container>
    );
}
