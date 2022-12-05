import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    h1{
        font-family: 'Rajdhani Bold', serif;
    }

`;

export const NavContainer = styled.nav`
    width: 100%;
    max-width: 1220px;
    display: flex;
    background: transparent;
    justify-content: space-between;
    align-items: center;
    color: white;
`;

export const NavItems = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Items = styled.li`
    color: white;
    padding: 0 10px;
    list-style-type: none;

    &:hover {
        color: #ff124f;
        cursor: pointer;
    }
`;
