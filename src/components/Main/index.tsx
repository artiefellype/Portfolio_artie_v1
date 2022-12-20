import { Container, LogoContainer, LogoDescription } from "./styles";
import Logo from "../../utils/Logo";
import Button from "../../utils/Button";
import Block from "../../utils/BlocksSeparator";

export default function Main(){
    return(
        <>
                <Container>
            <LogoContainer>
                <span>Olá, meu nome é</span>
                <Logo size="64px" marginTop="-1rem"/>
            </LogoContainer>
            <LogoDescription>EU DESENVOLVO COISINHAS PARA WEB</LogoDescription>
            <Button margin="5rem 0 0 0" title="SABER MAIS" link="./" />

        </Container>
        <Block />
        </>

    )
}