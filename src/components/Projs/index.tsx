import {
    Container,
    ProjectsItems,
    ProjectsContainer,
    SignContainer,
} from "./styles";
import RedSign from "../../utils/RedSign";
import Project from "./ProjectItem";

export default function Projects() {
    return (
        <Container>
            <SignContainer>
                <RedSign title="PROJETOS_" />
            </SignContainer>
            <ProjectsContainer>
                <h2>ALGUNS PROJETOS PESSOAIS_</h2>
                <ProjectsItems>
                        <Project
                            title="BinaryTo Decimal"
                            src="img/biToDe.png"
                            link="/"
                        />

                        <Project
                            title="Raycasting"
                            src="img/raycasting.png"
                            link="/"
                        />
                        <Project
                            title="Photographer Portfolio"
                            src="img/rebportfolio.png"
                            link="/"
                        />
                </ProjectsItems>
            </ProjectsContainer>
        </Container>
    );
}
