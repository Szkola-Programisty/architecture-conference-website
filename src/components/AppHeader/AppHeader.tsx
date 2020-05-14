import React from 'react'
import navbarBackgroundImage from '../../images/navbar-background.png'
import styled from '@emotion/styled'
import NavBar from '../NavBar/NavBar';

const HeaderShadow = styled.div`
    width: 100%;
    height: 755px;
    background-image: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.44) 24%, rgba(0, 0, 0, 0.05) 55%, rgba(216, 216, 216, 0) 100%);
`

const HeaderBackground = styled.div`
    width: 100%;
    height: 963px;
    background: url(${navbarBackgroundImage})
`



const AppHeader = () => {
    return <HeaderBackground>
        <HeaderShadow>
           <NavBar/>
        </HeaderShadow>
    </HeaderBackground>
}

export default AppHeader;