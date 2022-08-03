import styled from "styled-components";
import Flex from '../globalStyles/Flex'

export const ArticlesContainer = styled(Flex)`
    gap: 4rem;
    margin-top: 8.5rem;
    line-height: 1.5rem;
`

export const List = styled.ul` 
    margin-left: 1.5rem;
    margin-top: 1.25rem;

    // li::before {
    //     content: "::before";
    //     color: green;
    //     font-weight: bold;
    //     display: inline-block; 
    //     width: 1em;
    //     margin-left: -1em;
    //   }

    li::marker{
        color: ${({ theme }) => theme.colors.bulletGreen};
        font-size: 1.5rem;
    }
`

export const Button = styled.button`
    margin-top: 2.5rem;
    width: 10rem;
    height: 3.25rem;
    background: ${({ theme })=> theme.colors.buttonPink};
    color: white;
    border: none;
    border-radius: 0.3125rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform ease-in-out 0.15s;

    &:hover{
        background: rgba(172, 112, 136,0.9); 
    }

    &:active{
        transform: scale(1.05);
    }
`