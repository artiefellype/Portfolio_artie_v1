import {keyframes} from "styled-components";

export const FadeInTransformYAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100px);
    }
    50% {
        opacity: 30%;
    }
    100% {
        opacity: 100%;
        transform: translateY(0px)
    }
`;

export const FadeInTransformLeftAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-250px);
    }
    50% {
        opacity: 30%;
    }
    100% {
        opacity: 100%;
        transform: translateX(0px)
    }
`;
export const FadeInTransformRightAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(250px);
    }
    50% {
        opacity: 30%;
    }
    100% {
        opacity: 100%;
        transform: translateX(0px)
    }
`;

export const FadeAnimation = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 30%;
    }
    100% {
        opacity: 100%;
    }
`;
