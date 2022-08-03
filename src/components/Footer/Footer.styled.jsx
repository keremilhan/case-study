import styled from "styled-components";
import Flex from "../globalStyles/Flex";

export const FooterContainer = styled(Flex)`
    width:100%;
    border-width: 1px;
    border-top-style: solid;
    border-color: #ECCCB2;
    //   linear-gradient(180deg, rgba(236, 204, 178, 0) 0%, #ECCCB2 49.24%, rgba(236, 204, 178, 0) 100%) 1;
    padding-top: 1.875rem;
    margin-top: 6.875rem;
`

export const FooterSection = styled(Flex)`
    gap: 1.875rem;

    p{
        font-size: 0.875rem;
    }
`
