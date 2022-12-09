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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    padding: 0 10rem;
    gap: 60px;
    padding-top: 6rem;
    padding-bottom: 6rem;


`;




export const ProjectItem = styled.a`
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: white;

    &:nth-child(even){
        padding-top: 10rem;
    }
    &:nth-child(even){
        margin-bottom: -10rem;
    }


    h2{
        display: none;
        width: 400px;
        position: absolute;
        font-size: 72px;
        margin-left: -3rem;
        margin-top: 9rem;
        transition: all ease 1s;
    }

    img{
        width: 400px;
        height: 400px;
        object-fit: cover;
        box-sizing: border-box;
        transition: all ease 0.4s;
    }

    &:hover{
        cursor: pointer;
        img{
            border: 5px solid #ff142f;
            opacity: 50%;
        }

        h2{
            display: flex;
        }

    }

`;