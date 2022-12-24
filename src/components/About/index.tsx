import {
    AboutContainer,
    AboutImagesContainer,
    AboutList,
    AboutText,
    AboutTextContainer,
    Container,
    SignContainer,
} from "./styles";
import RedSign from "../../utils/RedSign";

export default function About() {
    return (
        <Container id="sobre">
            <SignContainer>
                <RedSign title="SOBRE_MIM_" />
            </SignContainer>
            <AboutContainer>
                <AboutTextContainer>
                    <AboutText>
                        <h2>QUEM SOU EU?_</h2>
                        <p>
                            Sou atualmente estudante de Ciência da Computação na
                            Universidade Federal Rural do Semi-Árido. Apesar do meu entusiasmo com tecnologia se dar desde pequeno, meu interesse na área da programação veio por volta de 2018 quando descobri o seu poder e desde lá fico animado em aprender cada vez mais.
                        </p>
                        <p>
                            Como programador já desenvolvi em equipe Soluções em
                            gerenciamento de oficinas mecânicas e de hospitais
                            utilizando tecnologias como java, typescript,
                            Next.js, React e postgreSQL.
                        </p>

                        <p>
                            Estou usando as seguintes tecnologias recentemente:
                            <br />
                        </p>
                    </AboutText>
                    <AboutList>
                        <li>
                            <i className="uil uil-cube"></i>TypeScript
                        </li>
                        <li>
                            <i className="uil uil-cube"></i>Node.js
                        </li>
                        <li>
                            <i className="uil uil-cube"></i>JavaScript
                        </li>
                        <li>
                            <i className="uil uil-cube"></i>React
                        </li>
                        <li>
                            <i className="uil uil-cube"></i>Python
                        </li>
                        <li>
                            <i className="uil uil-cube"></i>React Native
                        </li>
                    </AboutList>
                </AboutTextContainer>

                <AboutImagesContainer></AboutImagesContainer>
            </AboutContainer>
        </Container>
    );
}
