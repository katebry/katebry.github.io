import React from 'react'
import styled, { keyframes } from 'styled-components'

interface AboutProps {
    active: number
}

export const TextWrapper = styled.div`
    @media (min-width: 480px) {
        font-size: 48px;
    }
    @media (min-width: 801px) {
        font-size: 62px;
    }
    font-size: 24px;
    font-weight: 600;
`

export const SubText = styled.div`
    padding-top: 30px;
    @media (min-width: 480px) {
        font-size: 16px;
    }
    @media (min-width: 801px) {
        font-size: 18px;
    }
    font-weight: 400;
    font-size: 12px;
`

export const FadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }`

export const FadeAnimation = styled.div`
    animation: ${FadeIn} 3s;
`

export const About = ({ active }: AboutProps) => {
    return (
        <>
            {active === 0 && (
                <>
                    <FadeAnimation>
                        <TextWrapper>Software Developer based in the North West.</TextWrapper>
                        <SubText>Currently working as a Front-End Software Engineer at the Co-operative Bank.</SubText>
                    </FadeAnimation>
                </>
            )}
        </>
    )
}
