import React from 'react'
import { FadeAnimation, TextWrapper, SubText } from './About'

interface TechProps {
    active: number
}

export const Tech = ({ active }: TechProps) => {
    return (
        <>
            {active === 2 && (
                <>
                    <FadeAnimation>
                        <TextWrapper>TypeScript, JavaScript, Golang, Python.</TextWrapper>
                        <SubText>Experience working with frameworks such as React, Next and Gatsby.</SubText>
                    </FadeAnimation>
                </>
            )}
        </>
    )
}
