import styled from "styled-components";

export const SocialStyle = styled.footer`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 2%;

    div{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    div img{
        width: 50px;
    }

    div img:nth-child(2){
        height: 40px;
    }

    div a img{
        width: 30px;
    };

    @media(max-width:768px){
        padding-inline: 5%;


        div img{
        width: 40px;
        }
    }
`