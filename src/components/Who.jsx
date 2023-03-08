import React, { Suspense } from 'react'
import styled from 'styled-components'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'
import { HashLink as Link } from 'react-router-hash-link'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 1521px) {
    display: none;
  }
`

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 1521px) {
    text-align: center;
    font-size: 35px;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1521px) {
    align-items: center;
    text-align: center;
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
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Who = () => {
  return (
    <Section id='about'>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>There is always one more bug to fix.</Title>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>About me</Subtitle>
          </WhatWeDo>
          <Desc>
            a passionate web Developer that always open and capable of
            learning quickly new frameworks and technologies required
            !
          </Desc>
          <Link to='#works' smooth>
            <Button>See my work</Button>
          </Link>
        </Right>
      </Container>
    </Section>
  )
}

export default Who
