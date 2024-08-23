import styled from "styled-components";
import { Link as LinkTo } from "react-scroll";
interface MenuBarCheck {
    checkIsOpen?: boolean;
}

export const NewPortfolioTag = styled.a`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #6A32EA;
    color: #fafafa;
    text-align: center;
    padding: 10px 0;
    z-index: 1000;
    font-family: "Rajdhani Bold", serif;
    text-decoration: none;

    h1 {
        margin: 0;
        font-size: 24px;
    }

    &:hover {
        background-color: #5634A6;
        transition: background-color 0.3s ease-in-out;
    }
`;

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
         h1{
            padding-top: 1rem;
         }
        .dropdown {
            display: block;
            position: absolute;
            top: 0.5rem;
            right: 2rem;
            z-index: 9999;
            i {
                font-size: 46px;
                padding-right: 20px;
            }
        }
        .dropdownpos {
            position: fixed !important;
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

//----MOBILE ----

export const MobileNavBar = styled.nav<MenuBarCheck>`
    display: none;
    @media screen and (max-width: 728px) {
        display: flex;
        position: fixed;
        inset: 0 0 0 30%;
        z-index: 999;
        background-color: #16161630;
        backdrop-filter: blur(1rem);
        flex-direction: column;
        list-style-type: none;
        padding: min(20vh, 10rem) 2em;
        transition: all ease-in-out .3s;
        transform: ${(props)=>props.checkIsOpen ? 'translateX(0%)':'translateX(100%)'};


        li {
            padding: 1rem 0.5rem;
            display: flex;
            flex-direction: row;
            font-size: 24px;
            h4{
                font-family: 'Rajdhani Bold', sans-serif;
            }
            a{
                font-family: 'Rajdhani Light', sans-serif !important;
                margin: 0;
            }
        }
    }
`;
