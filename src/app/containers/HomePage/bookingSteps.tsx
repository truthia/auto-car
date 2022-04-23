import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCarSide, faMap } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container=styled.div`
    ${
        tw`
            w-full
            flex
            flex-col
            items-center
            justify-center
            pt-3
            pb-3
            lg:pt-6
            lg:pb-6 
            md:flex-row
        `
    }
`
const Title=styled.div`
    ${
        tw`
            text-center
            mt-20
            mb-5
           text-2xl
           lg:text-4xl
           text-red-600
           font-extrabold
        `
    }
`
const StepContainer= styled.div`
box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4) ;
    ${
        tw`
            flex
            flex-col
            w-48
            pb-10
            md:w-96
            items-center
            transition-colors
            hover:text-red-500
        `
    }
`
const Step=styled.div`

    ${
        tw`
            flex
            rounded-lg
            items-center
            justify-center
            p-6
        `
    }
`
const StepTitle=styled.h4`
    ${
        tw`
            text-black
            text-lg
            font-semibold
            mt-4
        `
    }
`
const StepDescription = styled.p`
    ${
        tw`
            w-5/6
            text-xs
            md:text-sm
            text-center
            text-gray-600
        `
    }
`
const StepIcon = styled.span`
    ${
        tw`
            text-red-500
            text-3xl
        `
    }
`
const BookingSteps = () => {
    return (
        <div>
             <Title>
                Renting Steps: 
            </Title>
        <Container>
            <StepContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faMap} />
                    </StepIcon>        
                </Step>
                <StepTitle>Choose Your Location</StepTitle>
                <StepDescription>
                    Find the nearest Mycar point abd book our car
                </StepDescription>
            </StepContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </StepIcon>        
                </Step>
                <StepTitle>Pick Up Date</StepTitle>
                <StepDescription>
                    Pickup the best date to rent a car for you
                </StepDescription>
            </StepContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faCarSide} />
                    </StepIcon>        
                </Step>
                <StepTitle>Book Your Car</StepTitle>
                <StepDescription>
                   Book your nice car with one single click!
                </StepDescription>
            </StepContainer>
        </Container>
        </div>
    )
}

export default BookingSteps
