import styled from "styled-components";
import Flex from "../globalStyles/Flex";

export const CardContainer = styled.div`
   width: 80%;
   margin: auto;
`

export const Section = styled(Flex)`
   width: 40%;
   margin: auto;
   text-align: center;
   gap: 2rem;
   margin-bottom: 3.75rem;
   line-height: 1.5rem;
   font-weight: 700;
   font-size: 1.2rem;

   @media only screen and (max-width: ${({theme}) => theme.screens.lg}){
      width: 100%;
      line-height: 2rem;
      margin-top: 10rem;
   }
`

export const Heading = styled.div`
    font-size: 2.5rem;
`

export const Card = styled(Flex)`
   align-items: center;
   text-align: center;
   gap: 1.25rem;
   width: 20.75rem;
   line-height: 1.5rem;

   @media only screen and (max-width: ${({theme}) => theme.screens.lg}){
      width: 100%;
      margin-bottom: 2rem;
   }
`