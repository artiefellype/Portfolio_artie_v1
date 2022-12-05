import styled from "styled-components";

export const Container =  styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/img/red_background.svg');
    background-size: cover;
    background-repeat: no-repeat;

`;

export const LogoContainer = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    h1{
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
    letter-spacing: 16px;
`;
