import styled from "styled-components";

interface BlockType{
    height: string;
    width?: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 135px;
    width: 100%;
    background-color: transparent;
    position: relative;
    align-items: flex-end;
    left: 0;
    bottom: 0;
`;

export const BlockSep = styled.div<BlockType>`
    width: ${(props)=> props.width || '16.6%'};
    height: ${(props)=> props.height};
    background: #161616;
`;