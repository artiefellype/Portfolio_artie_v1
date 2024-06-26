import {
    Container,
    ProjectsItems,
    ProjectsContainer,
    SignContainer,
} from "./styles";
import RedSign from "../RedSign";
import Project from "./ProjectItem";

export default function Projects() {
    return (
        <Container id="projetos">
            <SignContainer>
                <RedSign title="PROJETOS_" />
            </SignContainer>
            <ProjectsContainer>
                <h2>ALGUNS DOS MEUS PROJETOS_ </h2>
                <ProjectsItems>
                    <Project
                        title="GestClinic"
                        src="img/gestclinic.png"
                        link="https://gestclinic.com.br/login"
                        languages="Typescript - Next - Kotlin - Spring"
                    />
                    <Project
                        title="Mind Safe"
                        src="img/mindsafe.png"
                        link="https://www.mindsafe.com.br/"
                        languages="Typescript - Next"
                    />
                    <Project
                        title="Portfólio de fotógrafa"
                        src="img/rebportfolio.png"
                        link="https://rebeca-fotografias.netlify.app"
                        languages="React - styled-components - firebase"
                    />
                    <Project
                        title="Sistema Hospitalar"
                        src="img/health.png"
                        link="https://github.com/artiefellype/health-sistema-hospitalar"
                        alt="Imagem de tela de login com criança sorrindo em um balanço"
                        languages="Typescript - React - NextJs - NestJs - PostgreSQL"
                    />
                    <Project
                        title="Raycasting"
                        src="img/raycasting.png"
                        link="https://artiefellype.github.io/Raycasting-CodingChallenges/"
                        languages="html - javascript"
                    />
                    <Project
                        title="BinaryTo Decimal"
                        src="img/biToDe.png"
                        link="https://binary-to-decimal-artgit.netlify.app"
                        languages="html - css - javascript"
                    />
                </ProjectsItems>
            </ProjectsContainer>
        </Container>
    );
}
