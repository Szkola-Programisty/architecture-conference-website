import React from 'react';
import styled from '@emotion/styled'
import logo from '../../images/logo.png'

const NavBarContainer = styled.div`
    width: 75%;
    margin: 0 auto;
    padding: 40px;
    display: flex;   
    justify-content: space-between;
`;

const NavBarLinks = styled.div`
    display: flex;
    justify-content: space-between;
    padding:5px;
    width: 50%
`;

const NavBarLink = styled.a`
    margin: 0 5px;
    height: 21px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;  
    cursor: pointer; 

    &:hover{
        color: #bfbfbffa;
    }
`;

const Logo = styled.div`
    width: 105px;
    height: 29px;    
    flex-grow: 0;
`;

const NavBar = () => {
    const navBarLinks = ["Projects", "Service", "Products"];
    return  <NavBarContainer>
    <Logo><img src={logo} /></Logo>
    <NavBarLinks>
        {navBarLinks.map((name) => <NavBarLink>{name}</NavBarLink>)}
    </NavBarLinks>
</NavBarContainer>
}

export default NavBar;