/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav> 
      <NavbarContainer>
        <NavLink href='/news/general'>
          <a style={{ display: "flex", alignItems: "center", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>News App</Span>
          </a>
        </NavLink>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="/news/business">Business</NavLink>
          <NavLink href="/news/entertainment">Entertainment</NavLink>
          <NavLink href="/news/general">General</NavLink>
          <NavLink href="/news/health">Health</NavLink>
          <NavLink href="/news/science">Science</NavLink>
          <NavLink href="/news/sports">Sports</NavLink>
          <NavLink href="/news/technology">Technology</NavLink>
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="/news/general" onClick={() => {
              setIsOpen(!isOpen)
            }}>News App</MobileLink>
            <MobileLink href="/news/business" onClick={() => {
              setIsOpen(!isOpen)
            }}>Business</MobileLink>
            <MobileLink href="/news/entertainment" onClick={() => {
              setIsOpen(!isOpen)
            }}>Entertainment</MobileLink>
            <MobileLink href="/news/general" onClick={() => {
              setIsOpen(!isOpen)
            }}>General</MobileLink>
            <MobileLink href="/news/health" onClick={() => {
              setIsOpen(!isOpen)
            }}>Health</MobileLink>
            <MobileLink href="/news/science" onClick={() => {
              setIsOpen(!isOpen)
            }}>Science</MobileLink>
            <MobileLink href="/news/sports" onClick={() => {
              setIsOpen(!isOpen)
            }}>Sports</MobileLink>
            <MobileLink href="/news/technology" onClick={() => {
              setIsOpen(!isOpen)
            }}>Technology</MobileLink>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
