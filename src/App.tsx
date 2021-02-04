import './App.css'
import React from 'react'
import { Header } from './components/Header'
import { Info } from './components/Info'
import { Footer } from './components/Footer'
import styled from 'styled-components'
// @ts-ignore"
import { AnimatedBg, Transition } from 'scroll-background'

const Separator = styled.div`
    height: 200px;
`

const App = () => {
    return (
        <div className="App">
            <AnimatedBg>
                <Transition from="#000000" to="#000000">
                    <div className="Header-container">
                        <Header />
                    </div>
                    <div className="Main-content">
                        <Info />
                    </div>
                </Transition>
                <Transition from="#000000" to="#ffffff" position={0.3}>
                    <Separator />
                </Transition>
                <div className="Footer">
                    <Footer />
                </div>
            </AnimatedBg>
        </div>
    )
}

export default App
