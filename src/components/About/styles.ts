import styled from "styled-components";
import { FadeInTransformRightAnimation, FadeInTransformLeftAnimation } from "../../utils/Animations";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: #161616;
    color: white;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 728px) {
        padding-top: 12rem;
        margin-bottom: 5rem;
    }
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
    flex-wrap: wrap-reverse;
`;

export const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;

    animation: ${FadeInTransformLeftAnimation} ease 600ms;

`;
export const AboutText = styled.div`
    flex-direction: column;
    padding-right: 10px;
    min-width: 350px;
    max-width: 600px;

    h2 {
        font-size: 45px;
        font-family: "rajdhani Bold";
        padding-bottom: 10px;

        @media screen and (max-width: 728px) {
            text-align: center;
        }
    }
    p {
        text-align: justify;
        font-size: 18px;
        font-family: "Heebo Regular";
        margin-bottom: 1rem;
        color: #cccccc;
    }
`;

export const AboutList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;

    i {
        color: #ff124f;
        padding-right: 5px;
    }
`;

export const AboutImagesContainer = styled.div`
    min-width: 400px;
    max-width: 800px;
    padding: 10px;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15%;
    border: 7px solid #ff124f;
    animation: ${FadeInTransformRightAnimation} ease 600ms;
`;

export const ProfileImage = styled.div`
    width: 395px;
    height: 100%;
    background-color: red;
    border-radius: 15%;
    z-index: 10;
    background-image: url("/img/profile.png");
    background-size: cover;
    background-repeat: no-repeat;

`;