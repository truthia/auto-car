import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Logo } from '../logo'
import NavItems from './navbarItem'

const NavbarContainer = styled.div`
    min-height: 68px;
    ${
        tw`
            w-full
            max-w-screen-2xl
            flex
            flex-row
            lg:pl-12
            lg:pr-12
            justify-between
        `
    }
`

const Navbar = () => {
    return (
       <NavbarContainer>
            <Logo />
            <NavItems />
       </NavbarContainer>
    )
}

export default Navbar
