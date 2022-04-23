import { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { ICar } from '../../../typings/car'
import Car from '../../components/car'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';
import { resolve } from 'dns'

const TopCarsContainer = styled.div`
    ${
        tw`
        mt-28
            max-w-screen-lg
            w-full
            flex
            flex-col
            items-center
            justify-center
            pr-4
            pl-4
            md:pl-0
            md:pr-0
            mb-10
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
const CarsContainer= styled.div`
    ${
        tw`
            w-full
            flex
            flex-wrap
            justify-center
            mt-7
            md:mt-10
        `
    }
`
const TopCars = () => {
    const [current, setcurrent] = useState(0)
    const testCar: ICar = {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailSrc:
          "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80",
        dailyPrice: "70",
        monthlyPrice: "1600",
        gearType: "Auto",
        gas: "Petrol",
      };
    
      const testCar2: ICar = {
        name: "HONDA cITY 5 Seater Car",
        mileage: "20k",
        thumbnailSrc:
          "https://images.unsplash.com/photo-1562141960-c9a127257324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        dailyPrice: "50",
        monthlyPrice: "1500",
        gearType: "Auto",
        gas: "Petrol",
      };
    
    return (
       <TopCarsContainer>
           <Title>
               Explore Our Top Deals
           </Title>
           <CarsContainer>
            <Car {...testCar}/>
            <Car {...testCar2} /> 
            <Car {...testCar} />
           </CarsContainer>
       </TopCarsContainer>
    )
}

export default TopCars
