import styled from "styled-components"
import tw from "twin.macro"
import CartLogoImg from "../../../assets/images/car-logo.png"

const LogoContainer= styled.div`
    ${
        tw`
            flex
            items-center
        `
    }
`
const LogoText =styled.div`
    ${
        tw`
            text-xl
            md:text-2xl
            font-bold
            text-black
            m-1
        `
    }
`
const  Image =styled.div`
width:auto;
img{
    width:auto;
    height:100%
}
${
    tw`
        h-6
        md:h-9
    `
}
`

export function Logo():JSX.Element{
    return(
    <LogoContainer>
        <Image>
            <img src={CartLogoImg} />

        </Image>
        <LogoText>
            MYCAR
        </LogoText>
    </LogoContainer>)
}