import styled from "styled-components";

export const LeftArrow = styled.img`
    position: absolute;
    top: 7rem;
    z-index: 1;
    left: 180px;
    cursor: pointer;

    @media only screen and (max-width: ${({theme}) => theme.screens.md}) {
        top: 15rem;
        left: 20px;
     }
`

export const RightArrow = styled.img`
    position: absolute;
    top: 7rem;
    z-index: 1;
    right: 180px;
    cursor: pointer;

    @media only screen and (max-width: ${({theme}) => theme.screens.md}) {
        top: 15rem;
        right: 20px;
     }
`

export const SliderContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 5rem;

    img{

        &.lt{
            position: absolute;
            left: 0;
            bottom: 150px;
        }

        &.lb{
            position: absolute;
            left: 0;
        }

        &.rt{
            position: absolute;
            right: 0;
            z-index: 1;
        }

        &.rb{
            position: absolute;
            right: 0;
            padding-top: 80px;
        }
    }

    div.slide{
        opacity: 0;
        transition-duration: 0.5s ease;
        transform: scale(0.95);
    }

    div.slide.active{
        opacity: 1;
        transition-duration: 0.5s;
        transform: scale(1);
    }

    @media only screen and (max-width: ${({theme}) => theme.screens.md}) {
        margin-top: 8rem;
        padding-top: 5rem;
        img.lt, img.lb, img.rt, img.rb{
            display:none;
        }
     }
`

export const Bullet1 = styled.div`
    width: 20px;
    height: 10px;
    transition duration: 2s ease;
    background-color:rgba(122, 145, 167, 0.35);;
    border-radius: 10px;
    margin-right: 10px;
    margin-top: 3rem;
    cursor: pointer;

    &.active{
        width:60px;
        background-color: #7A91A7;
    }

`
export const Bullet2 = styled.div`
    width: 20px;
    height: 10px;
    transition duration: 2s ease;
    background-color:rgba(122, 145, 167, 0.35);
    border-radius: 10px;
    margin-top: 3rem;
    cursor: pointer;

    &.active{
        width:60px;
        background-color: #7A91A7;
    }

`
