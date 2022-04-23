import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import {slide as SLide} from "react-burger-menu"
import { useMediaQuery } from 'react-responsive'
import { SCREEN } from '../../../responsive'
import menuStyle from './menuStyle'

const ListContainer = styled.ul`
    ${
        tw`
            flex
            list-none
            items-center
        `
    }
`
const NavItem = styled.li<{menu?:any}>`
    ${
        tw`
            text-xs
            md:text-base
            text-black
            font-medium
            mr-1
            md:mr-5
            cursor-pointer
            transition-all
            hover:text-gray-700
        `
    }
    ${
        ({menu})=>menu&& css`
            ${
                tw`
                    text-white
                    text-lg
                    mb-3
                    focus:text-xl
                `
            }
        `
    }

`

const NavItems = () => {
    const isMobile= useMediaQuery({maxWidth:SCREEN["sm"]}) 

    if (isMobile){
        return(
            <SLide right styles={menuStyle}>
                <NavItem menu>
                    <a href='#'>Home</a>
                </NavItem>
                <NavItem menu>
                    <a href='#'>Cars</a>
                </NavItem>
                <NavItem menu>
                    <a href='#'>Services</a>
                </NavItem>
                <NavItem menu>
                    <a href='#'>Contacts</a>
                </NavItem>
            </SLide>
        )
    }

    return (
      <ListContainer>
          <NavItem>
            <a href='#'>Home</a>
          </NavItem>
          <NavItem>
            <a href='#'>Cars</a>
          </NavItem>
          <NavItem>
            <a href='#'>Services</a>
          </NavItem>
          <NavItem>
            <a href='#'>Contacts</a>
          </NavItem>
      </ListContainer>
    )
}

export default NavItems
