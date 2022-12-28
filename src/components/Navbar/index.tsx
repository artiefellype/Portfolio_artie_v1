import { Container, NavContainer, NavItems, Items, NavLinks } from "./styles";
import Button from "../../utils/Button";
import LogoGlitch from "../../utils/Logo";

export default function Navbar() {
    return (
        <Container>
            <NavContainer>
                <LogoGlitch size="32px" />
                <NavItems>
                    <Items>
                        {" "}
                        <NavLinks
                            to="sobre"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                        >
                            SOBRE
                        </NavLinks>
                    </Items>
                    <Items>
                        {" "}
                        <NavLinks
                            to="projetos"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                        >
                            PROJETOS
                        </NavLinks>
                    </Items>
                    <Items>
                        {" "}
                        <NavLinks
                            to="experiencia"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                        >
                            EXPERIÊNCIA
                        </NavLinks>
                    </Items>
                    <Items>
                        {" "}
                        <NavLinks
                            to="contato"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                        >
                            CONTATO
                        </NavLinks>
                    </Items>
                </NavItems>
                <Button
                    margin="0 2rem 0 0"
                    title="RESUME"
                    link="resume_arthurFelipe.pdf"
                />
                <span className="dropdown">
                    <i className="uil uil-bars"></i>
                </span>
            </NavContainer>
        </Container>
    );
}
