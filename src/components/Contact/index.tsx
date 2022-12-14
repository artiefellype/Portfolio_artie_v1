import { Container, ContentContainer } from "./styles";
import Block from "../../utils/BlocksSeparator";
import Button from "../../utils/Button";

export default function Contact(){
    return(
        <Container>
            <Block className="contactBlock"/>
            <ContentContainer>
                <h2>PRECISA DE UM DEV?</h2>
                <Button title="MANDE UM OI" link="/" />
            </ContentContainer>
        </Container>
    );
}