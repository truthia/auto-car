import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREEN } from '../../../responsive'

import JeepImg from '../../../assets/images/jeep.png'

const AboutUsContainer = styled.div`
    ${
        tw`
            mt-28
            w-full
            flex
            flex-wrap
            items-center
            mx-auto
            2xl:justify-center
            pt-4
            pb-4
            pr-7
            pl-7
            md:pl-8
            md:pr-8
            bg-white
        `
    }

`
const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -30px;
    img{
        width: auto;
        height: 100%;
    }
    @media  (min-width:${SCREEN.md}){
        height:28em;
    }
    @media  (min-width:${SCREEN.lg}){
        height:30em;
    }
    @media  (min-width:${SCREEN["2xl"]}){
        height:35em;
        margin-left: 0;
    }
`
const InfoContainer = styled.div`
    ${
        tw`
            w-4/5
            md:w-1/2
            flex
            flex-col
            md:ml-6
            2xl:ml-16
        `
    }
`
const Title = styled.h1`
    ${
        tw`
            text-black
            text-2xl
            md:text-5xl
            font-extrabold
            md:font-black
            md:leading-normal
        `
    }
`
const InfoText = styled.p`
    ${
        tw`
            max-w-2xl
            text-sm
            md:text-base
            text-gray-500
            font-normal
            mt-4
        `
    }
`
const AboutUs = () => {
    return (
      <AboutUsContainer>
          <CarContainer>
              <img src={JeepImg} alt='car' />
          </CarContainer>
          <InfoContainer>
              <Title>
                  Fell The Best Experience With Our Rental Deals
              </Title>
              <InfoText>
                She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death.
                The Colorless Lands is an ability that allows Tama to create magic barriers. She covers all her allies with it. They will get additional damage reduction stats. Also, the barrier heals all the characters inside it. The amount of this healing is based on Tamas ATK.

                Tamas second skill is called Twilight State. It heals all her allies in front of Tama for a certain amount of HP that is based on the users ATK. Also, this skill gives additional damage or healing effect buff to skills of the characters it healed.
              </InfoText>
          </InfoContainer>
      </AboutUsContainer>
    )
}

export default AboutUs
