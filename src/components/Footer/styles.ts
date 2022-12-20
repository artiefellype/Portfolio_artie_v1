import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 300px;
    background: #161616 ;
    border-top: 2px solid #ff124f;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;

    h1{
        font-family: "Rajdhani Bold", serif;
    }

    span {
        color: #fff;
        font-family: "Heebo Light", sans-serif;
        letter-spacing: 8px;
    }


`;

export const SocialIconsContainer = styled.div`
    width: 40%;
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.5rem;

        li {
            list-style: none;

            a{
                text-decoration: none;
                color: #fff;

                i {
                    font-size: 20px;
                }

                &:hover{
                    filter: brightness(0.6);
                }
            }
        }

    }
`;