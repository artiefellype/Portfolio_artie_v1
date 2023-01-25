import {
    Container,
    NavContainer,
    NavItems,
    Items,
    NavLinks,
    MobileNavBar,
} from "./styles";
import Button from "../../utils/Button";
import LogoGlitch from "../../utils/Logo";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenuBar() {
        setIsOpen(!isOpen);
    }
    return (
        <>
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
                    <span
                        className={`dropdown ${isOpen ? "dropdownpos" : ""}`}
                        onClick={handleMenuBar}
                    >
                        {!isOpen ? <i className="uil uil-bars"></i> : <i className="uil uil-multiply"></i>}

                    </span>
                </NavContainer>
            </Container>
            <MobileNavBar checkIsOpen={isOpen}>
                <Items>
                    <h4>01_</h4>
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
                    <h4>02_</h4>
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
                    <h4>03_</h4>

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
                    <h4>04_</h4>
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
                <Button
                    margin="2rem 0"
                    title="RESUME"
                    link="arthurFelipe_resume.pdf"
                />
            </MobileNavBar>
        </>
    );
}
