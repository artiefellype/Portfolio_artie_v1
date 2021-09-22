import React from 'react'
import {Nav, NavBarContainer, NavLogo} from './NavBarElements';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">
                        Arthur.
                    </NavLogo>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar
