import { Container, BlockSep } from "./styles";

interface BlockType {
    className?: string;
}
export default function Block(props: BlockType) {
    return (
        <Container className={props.className}>
            <BlockSep height="135px" />
            <BlockSep height="110px" />
            <BlockSep height="75px" />
            <BlockSep height="50px" width="17%" />
            <BlockSep height="75px" />
            <BlockSep height="135px" />
        </Container>
    );
}
