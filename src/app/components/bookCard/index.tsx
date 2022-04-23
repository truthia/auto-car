import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import Button from '../button'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { SCREEN } from '../../../responsive'

const CardContainer= styled.div`
    ${
        tw`
        mt-16
            flex
            justify-center
            items-center
            rounded-md
            bg-white
            pt-1
            pb-1
            pr-2
            pl-2
            md:pt-2
            md:pb-2
            md:pr-6
            md:pl-6
        `
    };
    min-height:4.3em;
    box-shadow: 0px 1.3px 12px -3px rgba(0,0,0,0.53);
`
const ItemContainer = styled.div`
    ${
        tw`
            flex relative
        `
    }
`
const Icon = styled.span`
    ${
        tw`
            text-red-500
            fill-current
            text-xs
            md:text-base
            mr-1
            md:mr-3
        `
    }
`
const Name = styled.span`
    ${
        tw`
          text-gray-600
          text-xs
          md:text-sm
          cursor-pointer
          select-none
        `
    }
`
const LineSeperator= styled.span`
width:2px;
height: 45%;
    ${
        tw`
            bg-gray-300
            mr-2
            ml-2
            md:mr-5
            md:ml-5
        `
    }
`
const SmallIcon= styled.span`
    ${
        tw`
            text-xs
            md:text-base
            fill-current
            ml-1
        `
    }
`
const DateCalendar = styled(Calendar)<{offset?:boolean}>`
    position:absolute;
    min-width:320px;
    top:3.5em;
    left:0em;
    ${({offset})=>
    offset&& css`left:-7rem;`
}
    @media (min-width:${SCREEN.md}){
        left:-2em;
    }
`
const BookCard = () => {
    const [startDate, setstartDate] = useState(new Date())
    const [isStartCalendarOpen, setisStartCalendarOpen] = useState(false)
    const [endDate, setendDate] = useState(new Date())
    const [isEndCalendarOpen, setisEndCalendarOpen] = useState(false)

    console.log("Today:  "+startDate)

    const openStartCalendarHandler=()=>{
        setisStartCalendarOpen(!isStartCalendarOpen)
        if(isEndCalendarOpen) setisEndCalendarOpen(false)
    }
    
    const openEndCalendarHandler=()=>{
        setisEndCalendarOpen(!isEndCalendarOpen)
        if(isStartCalendarOpen) setisStartCalendarOpen(false)
    }

    return (
     <CardContainer>
         <ItemContainer>
             <Icon>
                 <FontAwesomeIcon icon={faCalendarAlt} />
             </Icon>
             <Name onClick={openStartCalendarHandler}>Pick up Date</Name>
             <SmallIcon>
                 <FontAwesomeIcon icon={isStartCalendarOpen?faCaretUp:faCaretDown} />
             </SmallIcon>
             {isStartCalendarOpen&&<DateCalendar value={startDate} onChange={setstartDate} />}
         </ItemContainer>
         <LineSeperator />
         <ItemContainer>
             <Icon>
                 <FontAwesomeIcon icon={faCalendarAlt} />
             </Icon>
             <Name onClick={openEndCalendarHandler}>Return Date</Name>
             <SmallIcon>
                 <FontAwesomeIcon icon={isEndCalendarOpen?faCaretUp:faCaretDown} />
             </SmallIcon>
             {isEndCalendarOpen&&<DateCalendar offset value={endDate} onChange={setendDate} />}
         </ItemContainer>
         <LineSeperator />
         <Button text="Book Your Car" />
     </CardContainer>
    )
}

export default BookCard
