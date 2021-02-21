import React, { useState } from "react";
import styled from "styled-components";
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown'
import { About } from "./About";
import { Experience } from "./Experience";
import { Tech } from "./Tech";

const Content = styled.div`
  grid-area: 2 / 3 / 7 / 8;
  color: white;
  padding-top: 75px;
  @media (min-width: 480px) {
    padding-top: 30px;
  }
`;

const ButtonStyles = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  @media (min-width: 480px) {
    font-size: 22px;
  }
  @media (min-width: 801px) {
    font-size: 28px;
  }
  font-size: 14px;
  font-weight: 400;
  color: white;
  :hover {
    transition: font-weight 0.2s ease-in;
    font-weight: 900;
  }
`;

const AboutButton = styled(ButtonStyles)`
  grid-area: 3 / 2 / 4 / 3;
`;

const ExperienceButton = styled(ButtonStyles)`
  grid-area: 4 / 2 / 5 / 3;
  @media (max-width: 479px) {
    display: none;
  }
`;

const TechButton = styled(ButtonStyles)`
  grid-area: 5 / 2 / 6 / 3;
`;

const MobileExperienceButton = styled.div`
  @media (max-width: 479px) {
    cursor: pointer;
    grid-area: 4 / 2 / 5 / 3;
    display: flex;
    font-size: 14px;
    font-weight: 400;
    color: white;
    :hover {
      transition: font-weight 0.2s ease-in;
      font-weight: 900;
    }
  }
  display: none;
`;

const ScrollButtonWrapper = styled.div`
  grid-area: 7 / 8 / 8 / 8;
  display: flex;
  align-content: center;
  `

const ScrollTextWrapper = styled.div`
  margin-top: 2px;
  font-size: 14px;
  color: white;
`


export const Info = () => {
  const [active, setActive] = useState(0);

  const handleClick = (key: number) => {
    setActive(key);
  };

  return (
    <>
      <AboutButton onClick={() => handleClick(0)}>About</AboutButton>
      <ExperienceButton onClick={() => handleClick(1)}>
        Experience
      </ExperienceButton>
      <MobileExperienceButton onClick={() => handleClick(1)}>
        Career
      </MobileExperienceButton>
      <TechButton onClick={() => handleClick(2)}>Tech</TechButton>
      <Content>
        <About active={active} />
        <Experience active={active} />
        <Tech active={active} />
      </Content>
      <ScrollButtonWrapper>
        <ScrollTextWrapper>
        Scroll
        </ScrollTextWrapper>
      <UseAnimations animation={arrowDown} strokeColor='white' />
      </ScrollButtonWrapper>
    </>
  );
};
