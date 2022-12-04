import React from 'react';
import { Container, NavItems, Items, Button } from './styles';
import LogoGlitch from '../../utils/Logo';

export default function Navbar(){
    return(
        <Container>
            <LogoGlitch size='28px' />
            <NavItems>
                <Items> ALO1</Items>
                <Items> ALO2</Items>
                <Items> ALO3</Items>
            </NavItems>
            <Button>
                HELLO
            </Button>
        </Container>
    );
}