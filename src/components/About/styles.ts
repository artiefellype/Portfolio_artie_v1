import styled  from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: #161616;
    color: white;
    display: flex;
`;


export const SignContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 250px;
    z-index: 0;
`;



export const AboutContainer = styled.div`
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0 10rem;
`;

export const AboutText = styled.div`
    flex-direction: column;
    padding-right: 10px;
    flex: 1;

    h2{
        font-size: 45px;
        font-family: 'rajdhani Bold';
        padding-bottom: 10px;
    }
    p{
        font-size: 18px;
        font-family: 'Heebo Light';
    }
`;

export const AboutImagesContainer = styled.div`
    height: 55%;
    background-color: rebeccapurple;
    flex: 1;
`;