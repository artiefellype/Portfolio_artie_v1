import styled from "styled-components";

export const ButtonPrimary = styled.a`

    width: 8.5rem;
    height: 2.5rem;
    border: #fff solid 2px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0;
    text-decoration: none;
    color: white;
    transition: all .35s;

    &::after{
        position: relative;
        content: '';
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #fff;
        transition: all .35s;
    }

    &:hover{
        color: #161616;
    }

    &:hover::after{
        width: 100%;
    }

    span{
        font-family: 'Rajdhani Bold', serif;
        font-size: 16px;
        width: 8.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 2;
    }
`;