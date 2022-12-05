import { Container, BlockSep } from './styles';

export default function Block(){
    return(
        <Container>
            <BlockSep height='135px' />
            <BlockSep height='110px' />
            <BlockSep height='75px' />
            <BlockSep height='50px' width='17%' />
            <BlockSep height='75px' />
            <BlockSep height='135px'/>
        </Container>
    )
}