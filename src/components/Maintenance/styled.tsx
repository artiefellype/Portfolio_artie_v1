import styled from "styled-components";

export const MaintanceContainer = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8rem 0;


    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const MaintanceImg = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        box-sizing: border-box;
        transition: all ease 0.4s;
    }
`

export const MaintanceText = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`

export const MaintanceTitle = styled.h3`
    color: white;
    font-weight: bolder;
    font-size: 36px;
    text-align: center;
`

export const MaintanceDesc = styled.p`
    color: white;
    font-weight: normal;
    font-size: 18px;
    text-align: center;
`