import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url("/img/red_background.png");
    background-size: cover;
    background-repeat: no-repeat;

    .info-container {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 15rem;
    }

    .buttons-container {
        width: 40%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        @media screen and (max-width: 724px) {
            flex-direction: column;
            a {
                margin: 1rem !important;
            }
        }
    }
`;

export const LogoContainer = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    h1 {
        font-family: "Rajdhani Bold", serif;
    }
    span {
        color: #fff;
        font-family: "RobotoCondensed Regular", serif;
        font-size: 14px;
    }
`;

export const LogoDescription = styled.span`
    color: #fff;
    font-family: "Heebo Light", sans-serif;
    letter-spacing: 8px;
    text-align: center;
`;
