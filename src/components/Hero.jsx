import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { HashLink as Link } from 'react-router-hash-link'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1521px) {
    height: 100vh;
  }
`

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1521px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1521px) {
    flex: 1.6;
    align-items: center;
  }
`

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 1521px) {
    text-align: center;
    font-size: 35px;
  }
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.img`
  height: 5px;
`

const Subtitle = styled.h2`
  color: #da4ea2;
  @media only screen and (max-width: 1521px) {
    text-align: center;
    font-size: 16px;
  }
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 1521px) {
    padding: 20px;
    text-align: center;
    font-size: 14px;
  }
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Right = styled.div`
  display: flex;
  flex: 3;
  height: 100%;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 1521px) {
    flex: 1;
    width: 100%;
    /* display: none; */
  }
`
const Div = styled.div`
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  background-color: #3d1c56;
  margin: auto;
  height: 80%;
  width: 100%;

  @media only screen and (max-width: 1521px) {
    width: 80%;
    height: 100%;
    margin: auto;
  }
`

const Img = styled.img`
  border-radius: 20% 40% 40% 30%;
  width: 700px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 1521px) {
    width: 250px;
    height: 230px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`

const Hero = () => {
  return (
    <Section id='home'>
      <Navbar />
      <Container>
        <Left>
          <Title>Hi! I am Khadija</Title>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>
            I am a full stack web developer, experienced in building &
            designing, and redesigning landing pages, websites &
            Shopify eCommerce.
          </Desc>
          <Link to='#about' smooth>
            <Button>Learn More</Button>
          </Link>
        </Left>
        <Right>
          <Div></Div>
          <Img src='./img/astronaut2.png' />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
