import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    display: flex;
    height: 35px;
    background: black;
`

const Text = styled.div`
    @media (min-width: 480px) {
        font-weight: bold;
        font-size: 18px;
        color: white;
    }
    @media (max-width: 479px) {
        display: none;
    }
`

const MobileText = styled.div`
    @media (max-width: 479px) {
        font-weight: bold;
        font-size: 18px;
        color: white;
    }
`

export const Header = () => {
    return (
        <HeaderWrapper>
            <Text>Kate Bryan</Text>
            <MobileText>KB</MobileText>
        </HeaderWrapper>
    )
}
