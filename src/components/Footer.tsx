import React, { useState } from 'react'
import styled from 'styled-components'
import { FadeAnimation } from './About'
import { VscGithubInverted } from 'react-icons/vsc'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'

const FooterWrapper = styled.div`
    height: 90vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 0px;
`

const ContactTitle = styled.div`
    grid-area: 2 / 2 / 3 / 5;
    @media (min-width: 480px) {
        font-size: 48px;
    }
    @media (min-width: 801px) {
        font-size: 62px;
    }
    font-size: 32px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-content: center;
`

const GitHubWrapper = styled.a`
    grid-area: 3 / 2 / 4 / 3;
    color: #000000;
`

const GmailWrapper = styled.div`
    grid-area: 3 / 3 / 4 / 4;
`

const EmailBtn = styled.div`
    background: none;
    cursor: pointer;
`

const LinkedInWrapper = styled.a`
    grid-area: 3 / 4 / 4 / 5;
    color: #000000;
`

const Text = styled.div`
    font-size: 18px;
    font-weight: 700;
`

const FadeAnimationWrapper = styled(FadeAnimation)`
    grid-area: 4 / 2 / 5 / 5;
`

export const Footer = () => {
    const [showEmail, setShowEmail] = useState(false)

    const handleClick = () => {
        setShowEmail(!showEmail)
    }

    return (
        <FooterWrapper>
            <ContactTitle>Get in touch</ContactTitle>
            <GitHubWrapper target="_blank" href="https://github.com/katebry">
                <VscGithubInverted size={42} />
            </GitHubWrapper>
            <GmailWrapper>
                <EmailBtn onClick={handleClick}>
                    <MdEmail size={44} />
                </EmailBtn>
            </GmailWrapper>
            {showEmail && (
                <FadeAnimationWrapper>
                    <Text>katebdev@gmail.com</Text>
                </FadeAnimationWrapper>
            )}
            <LinkedInWrapper target="_blank" href="https://www.linkedin.com/in/kate-bryan-872960142/">
                <FaLinkedin size={42} />
            </LinkedInWrapper>
        </FooterWrapper>
    )
}
