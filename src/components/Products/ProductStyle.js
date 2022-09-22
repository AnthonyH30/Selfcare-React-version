import styled from "styled-components";


export const Productheader = styled.section`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 2%;

    h2{
        font-size: 23px;
    }

    h3{
        font-size: 18px;
    }

    @media(max-width: 768px){
        padding-inline: 5%;
    }
`