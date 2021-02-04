import React from 'react'
import { FadeAnimation, TextWrapper, SubText } from './About'

interface ExperienceProps {
    active: number
}

export const Experience = ({ active }: ExperienceProps) => {
    return (
        <>
            {active === 1 && (
                <>
                    <FadeAnimation>
                        <TextWrapper>2 years of industry experience.</TextWrapper>
                        <SubText>4+ years working in IT.</SubText>
                        <SubText>Level 3 Infrastructure Technician Apprenticeship.</SubText>
                        <SubText>BA(hons) English Literature and American Studies.</SubText>
                    </FadeAnimation>
                </>
            )}
        </>
    )
}
