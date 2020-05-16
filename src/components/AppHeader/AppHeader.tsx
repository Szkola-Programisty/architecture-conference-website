import React from 'react'
import navbarBackgroundImage from '../../images/navbar-background.png'
import styled from '@emotion/styled'
import NavBar from '../NavBar/NavBar';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

const HeaderShadow = styled.div`
    width: 100%;
    height: 755px;
    background-image: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.44) 24%, rgba(0, 0, 0, 0.05) 55%, rgba(216, 216, 216, 0) 100%);
    position: relative;
`

const HeaderBackground = styled.div`
    width: 100%;
    height: 963px;
    background: url(${navbarBackgroundImage});
`

const AppHeader = () => {
    return <HeaderBackground>
        <HeaderShadow>
           <NavBar/>
           <HeaderTitle/>
        </HeaderShadow>
    </HeaderBackground>
}

export default AppHeader;