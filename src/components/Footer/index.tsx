import Logo from "../../utils/Logo";
import { Container, LogoContainer } from "./styles";

export default function Footer(){
    return(
        <Container>
            <LogoContainer>
                <Logo size="64px"/>
                <span>FRONTEND DEVELOPER</span>
            </LogoContainer>
        </Container>
    );
}