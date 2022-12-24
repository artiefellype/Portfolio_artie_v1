import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('/img/red_footer_background.png');
    background-size: cover;
    background-repeat: no-repeat;

    .contactBlock{
        position: relative;
        transform: scaleY(-1) scaleX(-1);
    }

`;

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10rem;

    h2{
        color: #fff;
        font-family: 'Rajdhani Bold', serif;
        font-size: 62px;
        margin-bottom: 2rem;
    }
`;