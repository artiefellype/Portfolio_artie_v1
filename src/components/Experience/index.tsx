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
    const { experience } = data;
    const [toggleState, setToggleState] = useState(0);

    return (
        <Container id="experiencia">
            <SignContainer>
                <RedSign title="EXPERIÊNCIAS_" />
            </SignContainer>
            <h2 className="exp-title"> ONDE EU JÁ PUDE AGREGAR VALOR_</h2>
            <BackgroundContainer />

            <ExperienceContainer>
                <ExperienceTabs>
                    {experience.map((item, index) => {
                        return (
                            <TabButton
                                className={
                                    toggleState === index ? "isActive" : ""
                                }
                                onClick={() => setToggleState(index)}
                                key={index}
                            >
                                <h4>{item.local}</h4>
                            </TabButton>
                        );
                    })}
                </ExperienceTabs>
                <ExperienceContents>
                    {experience.map((item, index) => {
                        return (
                            <Content
                                className={
                                    toggleState === index ? "isActive" : ""
                                }
                                key={index}
                            >
                                <ContentHeader>
                                    <h2>{item.office}</h2>
                                    <span>
                                        {" "}
                                        <i className="uil uil-calendar-alt"></i>
                                        {item.date}
                                    </span>
                                </ContentHeader>
                                <ContentBody>
                                    <ul>
                                        {item.descripton.map((desc, index) => {
                                            return (
                                                <li>
                                                <i className="uil uil-cube"></i>
                                                <p>

                                                    {desc}
                                                </p>
                                                </li>

                                            );
                                        })}
                                    </ul>
                                </ContentBody>
                            </Content>
                        );
                    })}
                </ExperienceContents>
            </ExperienceContainer>
        </Container>
    );
}
