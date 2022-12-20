import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background: #161616;
`;

export const SignContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 250px;
    z-index: 0;
`;

export const ProjectsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    margin-top: 8.5rem;
    z-index: 1;
    h2{
        font-size: 45px;
        font-family: 'Rajdhani Bold', serif;
    }
`;

export const ProjectsItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 60px;
    width: 90%;
    padding-top: 6rem;
    padding-bottom: 6rem;
    transition: all ease 0.3s;
`;




export const ProjectItem = styled.a`
    color: white;
    filter: brightness(.4);
    transition: all ease-in-out 0.3s;
    width: 400px;
    h2{
        display: none;
        width: 400px;
        position: absolute;
        font-size: 72px;
        margin-left: -3rem;
        margin-top: -12rem;
        transition: all ease 1s;
    }

    img{
        width: 400px;
        height: 400px;
        object-fit: cover;
        box-sizing: border-box;
        transition: all ease 0.4s;
    }


    &:hover {
        cursor: pointer;
        filter: brightness(1);
        img{
            border: 5px solid #ff142f;
            opacity: 70%;

        }

        h2{
            display: flex;
        }

    }


    @media screen and (max-width: 728px) {
        width: 300px;
        filter: brightness(1);
    h2{
        display: flex;
        width: 200px;
        position: absolute;
        font-size: 42px;
        margin-left: 6rem;
        transition: all ease 1s;
        text-align: center;
    }

    img{
        width: 300px;
        height: 300px;
        object-fit: cover;
        box-sizing: border-box;
        transition: all ease 0.4s;
        border: 5px solid #ff142f;
        opacity: 100%;
        filter: brightness(0.3);
    }



    }

`;