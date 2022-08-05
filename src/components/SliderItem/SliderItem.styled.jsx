import styled from "styled-components";
import Flex from '../../components/globalStyles/Flex'

export const SliderContainer = styled(Flex)`
    height: 300px;
    width: 55%;
    margin: auto;

    div{
        padding-right: 13rem;
        text-align: center;
        line-height: 2rem;
        font-size: 1.5rem;

        h3{
            margin-bottom: 2.5rem;
        }
    }


    @media only screen and (max-width: ${({theme}) => theme.screens.xl}){
        div{
            padding-right: 0;
        }
    }

    @media only screen and (max-width: ${({theme}) => theme.screens.lg}) {
        flex-direction: column;
        gap: 2rem;
        margin-top: 8rem;
        margin-bottom: 10rem;

    }
`