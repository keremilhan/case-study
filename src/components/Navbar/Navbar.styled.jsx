import styled from "styled-components";
import Flex from "../globalStyles/Flex";


export const NavContainer = styled(Flex)`
    height: 5rem;
    font-weight: 700;
`

export const Menu = styled(Flex)`
    list-style:none;
    gap: 2rem;

    li{
        cursor: pointer;
    }
`

export const Logo = styled.p`
    font-size: 1.9rem;
`