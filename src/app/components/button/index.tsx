import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { isElementAccessChain } from 'typescript'

interface IButtonProps{
    theme?: "outlined" | "filled",
    text: String,
    className?:string
}

const BaseButton = styled.button`
    ${
        tw`
        pl-5
        pr-5
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        md:font-semibold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        m-1
        `
    }
    `
    const FilleddButton = styled(BaseButton)`
    ${
        tw`
            bg-red-500
            hover:bg-transparent
            hover:text-red-500
            hover:border-red-500
        `
    }
`
const OutlinedButton = styled(BaseButton)`
${
    tw`
        border-red-500
        text-red-500
        bg-transparent
        hover:bg-red-500
        hover:text-white
        hover:border-transparent
    `
}
`
const Button:FC<IButtonProps> = ({theme,text,className}) => {
    if(theme==="outlined")
    return (
      <OutlinedButton className={className}>
          {text}
      </OutlinedButton>
    )
    else {
        return(
            <FilleddButton  className={className}>
                {text}
            </FilleddButton>
        )
    }
}

export default Button
