import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 300px;
    background: #161616 ;
    border-top: 2px solid #ff124f;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;

    h1{
        font-family: "Rajdhani Bold", serif;
    }

    span {
        color: #fff;
        font-family: "Heebo Light", sans-serif;
        letter-spacing: 8px;
    }


`;