import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: transparent;
    color: white;
`;




export const NavItems = styled.ul`
    display: flex;
    flex-direction: row;
`;

export const Items = styled.li`
    color: white;
    padding: 0 10px;
    list-style-type: none;

    &:hover {
        color: #ff124f;
    }
`;

export const Button = styled.div`
    width: 20%;
    height: 50px;
    border: #fff solid 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
