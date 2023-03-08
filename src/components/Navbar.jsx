import React from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'

const NavbarSection = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    width: 98%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1521px) {
    width: 98%;
  }
  .nav {
    background-color: pink;
  }
  .nav.active {
    background-color: black;
  }
`

const Container = styled.div`
  width: 1400px;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    width: 99%;
    padding: 10px;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const List = styled.div`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const ListItem = {
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'white',
}

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const Git = styled.a`
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  width: 35px;
  cursor: pointer;
`

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <NavbarSection>
      <Container>
        <Links>
          {/* <Logo src='./img/logo.png' /> */}
          <h1>Khadija</h1>
          <List>
            <Link to='#home' style={ListItem}>
              Home
            </Link>
            <Link to='#about' style={ListItem}>
              About
            </Link>
            <Link to='#works' style={ListItem}>
              Works
            </Link>
            <Link to='#contact' style={ListItem}>
              Contact
            </Link>
          </List>
        </Links>
        <Icons>
          <Git href='https://github.com/khadija-ou'>
            <Icon src='./img/github.png' />
          </Git>
          <Link to='#contact' smooth>
            <Button>Hire Now</Button>
          </Link>
        </Icons>
      </Container>
    </NavbarSection>
  )
}

export default Navbar
