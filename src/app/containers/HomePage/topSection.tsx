import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import carImg from '../../../assets/images/mclaren-orange-big.png'
import blobImg from '../../../assets/images/blob.svg'
import { SCREEN } from '../../../responsive'
import Button from '../../components/button'


const  TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top:6em;
    ${
        tw`
            w-full
            max-w-screen-2xl
            justify-between
            pl-3
            pr-3
            lg:pl-12
            lg:pr-12

        `
    }
`
const  LeftContainer = styled.div`
    ${
        tw`
          w-1/2
          flex
          flex-col
        `
    }
`
const  RightContainer = styled.div`
    ${
        tw`
          w-1/2
          flex
          flex-col
          relative
        `
    }
`
const Slogan = styled.h1`
    ${
        tw`
            font-bold
            text-2xl
            xl:text-6xl
            md:text-5xl
            sm:text-3xl
            lg:font-black
            md:font-extrabold
            text-black
            mb-4
            sm:leading-snug
            lg:leading-normal
            xl:leading-relaxed
        `
    }
`
const Description= styled.p`
    ${
        tw`
            text-xs
            lg:text-sm
            xl:text-lg
            sm:max-h-full
            overflow-hidden
            max-h-12
            text-gray-800
        `
    }
`
const BlobContainer = styled.div`
    width :25em;
    height:10em;
    position: absolute;
    right: -16em;
    top:-15em;
    z-index:-1;
    transform: rotate(-30deg);
    img{
        width: 100%;
        height:auto;
        max-height:max-content;
    }
    @media (min-width: ${SCREEN.sm}){
        width:40em;
        max-height:10em;
        right:-30em;
        top:-20em;
        transform:rotate(-25deg);
    }
    @media (min-width: ${SCREEN.lg}){
        width:50em;
        max-height:30em;
        right:-37em;
        top:-25em;
        transform:rotate(-25deg);
    }
    @media (min-width: ${SCREEN.xl}){
        width:60em;
        max-height:30em;
        right:-43em;
        top:-34em;
        transform:rotate(-25deg);
    }
`
const StandaloneCar= styled.div`
    width: auto;
    height:10em;
    right: -16em;
    top:-9em;
    position:absolute;
    img{
        width:auto;
        height: 100%;
        max-width: fit-content
    }
    @media (min-width: ${SCREEN.sm}){
        height: 16em;
        right:-30em;
        top:-12em;
    }
    @media (min-width: ${SCREEN.lg}){
        height: 21em;
        right:-40em;
        top:-16em;
    }
    @media (min-width: ${SCREEN.xl}){
        height: 25em;
        right:-45em;
        top:-20em;
    }
`
const ButtonContainer= styled.div`
    ${
        tw`
        flex
        flex-col
        md:flex-row
        w-2/3
        md:w-auto
        `
    }
`

const TopSection = () => {
    return (
     <TopSectionContainer>
         <LeftContainer>
             <Slogan>
                 Rent the best Quality cars with us
             </Slogan>
             <Description>
             She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death.
             </Description>
             <ButtonContainer>
                <Button text="Ride this" />
                <Button theme='outlined' text="Sell this" />
             </ButtonContainer>
         </LeftContainer>
         <RightContainer>
            <BlobContainer>
                <img src={blobImg} />    
            </BlobContainer>   
            <StandaloneCar>
                <img src={carImg} />
            </StandaloneCar>  
         </RightContainer>
     </TopSectionContainer>
    )
}

export default TopSection
