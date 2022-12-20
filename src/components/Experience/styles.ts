import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #161616;
    flex-direction: column;

    .exp-title {
        margin-top: 9rem;
    }
    h2 {
        padding-top: 8rem;
        font-family: "Rajdhani Bold", serif;
        font-size: 45px;
        color: white;
        z-index: 10;
    }
`;

export const SignContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 250px;
    margin-bottom: 45rem;
    z-index: 0;
`;

export const BackgroundContainer = styled.div`
    width: 100%;
    height: 26.75rem;
    background-image: url("/img/red_background.svg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 1;
`;

export const ExperienceContainer = styled.div`
    display: flex;
    margin-top: 10rem;
    max-width: 1025px;
    min-width: 600px;
    width: 90%;
    height: 605px;
    min-height: 605px;
    background: #161616;
    z-index: 3;
    border: solid 3px #666666;
    border-radius: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;

    @media screen and (max-width: 728px) {
        min-width: 320px;
        width: 90%;
        flex-direction: column-reverse;
        justify-content: space-around;
    }
`;

export const ExperienceTabs = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 3rem;
    margin-left: 14rem;

    .isActive {
        border-left: solid 3px rgb(255, 18, 79, 1);
        color: #ffffff;
        background: rgb(255, 18, 79, 0.7);

        &:hover {
            background-color: rgb(255, 18, 79, 0.7);
        }
    }

    @media screen and (max-width: 728px) {
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        margin: 0;

        .isActive {
            border-left: none;
            border-top: solid 3px rgb(255, 18, 79, 1);
            color: #ffffff;
            background: rgb(255, 18, 79, 0.7);

            &:hover {
                background-color: rgb(255, 18, 79, 0.7);
            }
        }
    }
`;

export const TabButton = styled.div`
    display: flex;
    width: 100%;
    height: 62px;
    color: #ff124f;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-left: solid 3px #ffffff;
    transition: all 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
    outline: none;
    &:hover {
        background-color: rgb(255, 18, 79, 0.18);
    }

    h4 {
        padding-right: 50px;
        font-size: 20px;
        font-family: "Rajdhani Bold", serif;
    }

    @media screen and (max-width: 728px) {
        border-left: none;
        border-top: solid 3px #ffffff;
        white-space: nowrap;

        &:first-child {
            border-bottom-left-radius: 17px;
        }
        &:last-child {
            border-bottom-right-radius: 17px;
        }

        h4 {
            padding: 0;
            margin: 0;
            outline: none;
        }
    }
`;

export const ExperienceContents = styled.div`
    display: block;
    width: 60%;
    padding: 0 1.875rem;
    flex-direction: column;

    .isActive {
        display: block;
    }

    @media screen and (max-width: 728px) {
        height: 85%;
        width: 80%;
    }
`;

export const Content = styled.div`
    display: none;
`;

export const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    margin-bottom: 2rem;

    h2 {
        padding-top: 10px;
    }
    span {
        color: rgb(255, 18, 79, 1);
        i {
            margin-right: 15px;
        }
    }
`;

export const ContentBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;

    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        margin: 0;
    }

    li {
        list-style: none;
        margin: 5px 0;

        i {
            margin-right: 20px;
        }
    }
`;
