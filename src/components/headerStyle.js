import styled from "styled-components";

export const Headerbox = styled.header`
    background-color: white;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 3%;
    position: fixed;
    top: 0;


    h2{
        font-weight: 900;
        font-size: 30px;
    }

    nav{
        display: flex;
        gap: 25px;
        height: 100%;
        align-items: center;
    }

    nav img{
        width: 25px;
    }

    nav div{
        position: relative;
    }

    nav div img{
        width: 28px;
    }

    nav div div{
        position: absolute;
        background-color: orange;
        padding: 2px 4px;
        border-radius: 40%;
        top: -5px;
        right: -15px;
    }

    @media(max-width: 768px){
        padding-inline: 5%;
    }
`