import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavBarElements';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">
                        Arthur.
                    </NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact-me</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar
