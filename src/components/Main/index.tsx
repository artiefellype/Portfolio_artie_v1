import { Container, LogoContainer, LogoDescription } from "./styles";
import Logo from "../Logo";
import Button from "../Button";
import Block from "../BlocksSeparator";

export default function Main() {
    return (
        <>
            <Container id="home">
                <div className="info-container">
                    <LogoContainer>
                        <span>Olá, meu nome é</span>
                        <Logo size="64px" marginTop="-1rem" />
                    </LogoContainer>
                    <LogoDescription>
                        EU DESENVOLVO COISINHAS PARA WEB
                    </LogoDescription>
                    <div className="buttons-container">
                        <Button
                            margin="5rem 0 0 0"
                            icon={<i className="uil uil-github"></i>}
                            title="GITHUB"
                            link="https://github.com/artiefellype"
                        />
                        <Button
                            margin="5rem 0 0 0"
                            icon={<i className="uil uil-linkedin"></i>}
                            title="LINKEDIN"
                            link="https://www.linkedin.com/in/arthur-felipe-sde/"
                        />
                    </div>
                </div>

                <Block />
            </Container>
        </>
    );
}
