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
                <Button margin="0 0 0 2rem" title="RESUME" link="teste.pdf"/>
            </NavItems>
        </NavContainer>

        </Container>

    );
}
