import styled from "styled-components";
import { Link as LinkTo } from "react-scroll";

export const Container = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    h1 {
        font-family: "Rajdhani Bold", serif;
        padding-left: 20px;
    }
`;

export const NavContainer = styled.nav`
    width: 100%;
    max-width: 1220px;
    display: flex;
    flex-wrap: wrap;
    background: transparent;
    justify-content: space-between;
    align-items: center;
    color: white;

    .dropdown {
        display: none;
    }

    @media screen and (max-width: 728px) {
        a {
            display: none;
        }

        .dropdown {
            display: block;
            i {
                font-size: 46px;
                padding-right: 20px;
            }
        }
    }
`;

export const NavItems = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 25px;

    @media screen and (max-width: 728px) {
        display: none;
    }
`;

export const Items = styled.li`
    color: white;

    &:hover {
        color: #ff124f;
        cursor: pointer;
    }
`;

export const NavLinks = styled(LinkTo)`
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.2s ease;
`;
