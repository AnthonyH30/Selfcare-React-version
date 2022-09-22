import styled from "styled-components";
import bannerimage from "../../assets/banner1.svg"

export const Bannerbg = styled.section`
    margin-top: 80px;
    width: 100%;
    background: url(${bannerimage});
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-block: 40px;

    img{
        width: 38%;
    }

    @media(max-width: 768px){
        img{
            width: 65%;
        }
    }
`