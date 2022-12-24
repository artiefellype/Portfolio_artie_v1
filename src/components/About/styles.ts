import styled  from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: #161616;
    color: white;
    display: flex;
    justify-content: center;
`;


export const SignContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 250px;
    z-index: 0;
`;



export const AboutContainer = styled.div`
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap-reverse;

`;

export const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const AboutText = styled.div`
    flex-direction: column;
    padding-right: 10px;
    //flex: 1;
    min-width: 350px;
    max-width: 600px;

    h2{
        font-size: 45px;
        font-family: 'rajdhani Bold';
        padding-bottom: 10px;
    }
    p{
        text-align: justify;
        font-size: 18px;
        font-family: 'Heebo Regular';
        margin-bottom: 1rem;
        color: #CCCCCC;
    }
`;

export const AboutList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;

    i {
        color: #ff124f;
        padding-right: 5px;
    }
`;

export const AboutImagesContainer = styled.div`
    min-width: 300px;
    max-width: 600px;
    padding: 10px;
    height: 45%;
    background-color: rebeccapurple;
`;