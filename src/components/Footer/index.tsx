import Logo from "../../utils/Logo";
import { Container, LogoContainer, SocialIconsContainer } from "./styles";

export default function Footer() {
    return (
        <Container>
            <LogoContainer>
                <Logo size="64px" />
                <span>FRONTEND DEVELOPER</span>
                <SocialIconsContainer>
                    <div>
                        <li>
                            <a
                                href="http://"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="uil uil-github"></i>
                            </a>
                        </li>

                        <li>
                            <a
                                href="http://"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="uil uil-instagram-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="uil uil-linkedin"></i>
                            </a>
                        </li>
                    </div>
                </SocialIconsContainer>
            </LogoContainer>
        </Container>
    );
}
