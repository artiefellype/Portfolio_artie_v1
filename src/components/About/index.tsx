import {
    AboutContainer,
    AboutImagesContainer,
    AboutText,
    Container,
    SignContainer,
} from "./styles";
import RedSign from "../../utils/RedSign";

export default function About() {
    return (
        <Container>
            <SignContainer>
                <RedSign title="SOBRE_MIM_" />
            </SignContainer>
            <AboutContainer>
                <AboutText>
                    <h2>QUEM SOU EU?_</h2>
                    <p>
                        Sou graduando em Ciência da computação na Universidade
                        Federal Rural do Semi-Árido. Possuo plena
                        capacidade de adaptação tanto a ambientes de trabalhos
                        diversos, remoto e presencial, como também a diferentes
                        tecnologias.
                    </p>
                </AboutText>
                <AboutImagesContainer>
                </AboutImagesContainer>
            </AboutContainer>
        </Container>
    );
}
