import { Container, ContentContainer } from "./styles";
import Block from "../BlocksSeparator";
import Button from "../Button";

export default function Contact(){
    return(
        <Container id="contato">
            <Block className="contactBlock"/>
            <ContentContainer>
                <h2>PRECISA DE UM DEV?</h2>
                <Button title="MANDE UM OI" link="mailto:arthurfellype21@gmail.com" />
            </ContentContainer>
        </Container>
    );
}