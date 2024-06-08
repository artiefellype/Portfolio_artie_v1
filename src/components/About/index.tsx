import {
    AboutContainer,
    AboutImagesContainer,
    AboutList,
    AboutText,
    AboutTextContainer,
    Container,
    ProfileImage,
    SignContainer,
} from "./styles";
import RedSign from "../RedSign";

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
                        Sou o Arthur e, ao longo da minha trajetória profissional, fui melhorando minhas habilidades em linguagens de programação essenciais como JavaScript, TypeScript e Java. Além disso, possuo uma notável experiência em tecnologias tanto de front-end quanto de back-end, incluindo frameworks como React, Next.js e Spring.
                        </p>
                        <p>
                        Sou autodisciplinado e adaptável a ambientes de trabalho remoto. Na minha atual posição em uma startup, aprimoro diariamente minhas habilidades com Next e Java, atuando na concepção completa de sistemas. Isso inclui desde a prototipação utilizando conceitos de UI/UX até o deploy e a entrega contínua aos clientes utilizando práticas de CI/CD.
                        </p>
                        <p>
                        Com uma notável facilidade de aprendizado e robustas habilidades na resolução de problemas, consigo rapidamente dominar novas tecnologias e me adaptar a mudanças no ambiente de trabalho, garantindo sempre a entrega de soluções eficientes que superem as expectativas.
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
                            <i className="uil uil-cube"></i>Javascript
                        </li>
                        <li>
                            <i className="uil uil-cube"></i>Java
                        </li>
                        <li>
                            <i className="uil uil-cube"></i>React
                        </li>
                        <li>
                            <i className="uil uil-cube"></i>Next
                        </li>
                        <li>
                            <i className="uil uil-cube"></i>Spring Boot
                        </li>
                    </AboutList>
                </AboutTextContainer>

                <AboutImagesContainer>
                    <ProfileImage />
                </AboutImagesContainer>
            </AboutContainer>
        </Container>
    );
}
