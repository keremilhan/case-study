import styled from "styled-components";
import Flex from "../globalStyles/Flex";

export const FooterContainer = styled(Flex)`
    width:100%;
    border-width: 1px;
    padding-top: 1.875rem;
    width: 80%;
    margin: auto;
    padding-bottom: 2rem;

    @media only screen and (max-width: ${({theme}) => theme.screens.md}){
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
     }

`

export const FooterSection = styled(Flex)`
    height: 5rem;
    p{
        font-size: 0.875rem;
    }
`

export const Line = styled.div`
    height: 1px;
    width: 100%;
    background-image: linear-gradient(to right, rgb(236, 204, 178, 0), rgba(236, 204, 178, 1), rgb(236, 204, 178, 0));
    margin-top: 6.875rem;
`
