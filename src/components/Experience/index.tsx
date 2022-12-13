import { useState } from "react";
import RedSign from "../../utils/RedSign";
import {
    Container,
    BackgroundContainer,
    SignContainer,
    ExperienceContainer,
    ExperienceTabs,
    ExperienceContents,
    ContentHeader,
    ContentBody,
    TabButton,
    Content,
} from "./styles";
import { ExperienceData as data } from "../../content/experienceContent/exp";

export default function Experience() {
    const { education, experience } = data;
    const [toggleState, setToggleState] = useState(0);

    function handleToggleState(value: any) {
        setToggleState(value);
    }
    return (
        <Container>
            <SignContainer>
                <RedSign title="EXPERIÊNCIAS_" />
            </SignContainer>
            <h2> ONDE EU JÁ PUDE AGREGAR VALOR_</h2>
            <BackgroundContainer />

            <ExperienceContainer>
                <ExperienceTabs>
                    <TabButton className="isActive">
                        <h4>Botão 01</h4>
                    </TabButton>
                    <TabButton>
                        <h4>Botão 02</h4>
                    </TabButton>
                    <TabButton>
                        <h4>Botão 03</h4>
                    </TabButton>
                    <TabButton>
                        <h4>Botão 04</h4>
                    </TabButton>
                </ExperienceTabs>
                <ExperienceContents>
                    <Content>
                    <ContentHeader>
                        <h2>TITULO @titulo</h2>
                        <span> <i className="uil uil-calendar-alt"></i> 2020 - present</span>
                    </ContentHeader>
                    <ContentBody>
                        <ul>
                            <li> TIPO 1</li>
                            <li> TIPO 2</li>
                            <li> TIPO 3</li>
                        </ul>
                    </ContentBody>
                    </Content>

                    <Content className="isActive">
                    <ContentHeader>
                        <h2>TITULO2 @titulo2</h2>
                        <span> <i className="uil uil-calendar-alt"></i> 2020 - present</span>
                    </ContentHeader>
                    <ContentBody>
                        <ul>
                            <li><i className="uil uil-cube"></i> TIPO 1</li>
                            <li><i className="uil uil-cube"></i> TIPO 2</li>
                            <li><i className="uil uil-cube"></i> TIPO 3</li>
                        </ul>
                    </ContentBody>
                    </Content>

                    <Content>
                    <ContentHeader>
                        <h2>TITULO3 @titulo3</h2>
                        <span> <i className="uil uil-calendar-alt"></i> 2020 - present</span>
                    </ContentHeader>
                    <ContentBody>
                        <ul>
                            <li> TIPO 1</li>
                            <li> TIPO 2</li>
                            <li> TIPO 3</li>
                        </ul>
                    </ContentBody>
                    </Content>


                </ExperienceContents>

            </ExperienceContainer>
        </Container>
    );
}
