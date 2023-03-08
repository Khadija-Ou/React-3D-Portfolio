import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  height: 100%;
  @media only screen and (max-width: 1521px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`
const Link = styled.a`
  height: 100%;
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  height: 400px;
  width: 650px;
  margin: auto;
  border: 3px solid pink;
  float: left;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 1521px) {
    height: 200px;
    overflow: hidden;
    width: 350px;
  }
`
const Desc = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  box-shadow: -24px 16px 65px 2px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: -24px 16px 65px 2px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: -24px 16px 65px 2px rgba(0, 0, 0, 0.68);
  border-radius: 10px;
  position: absolute;
  top: 270px;
  right: 120px;
  border: 1px solid lightgray;
  @media only screen and (max-width: 1521px) {
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`

const Portfolio = () => {
  return (
    <Div>
      <Link href=''>
        <Img src='./img/portfolio.jpg' />
      </Link>

      <Desc>😁</Desc>
    </Div>
  )
}

export default Portfolio