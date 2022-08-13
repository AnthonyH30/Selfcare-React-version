import styled from "styled-components";


export const Cardspart = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 2%;
    align-items: center;
    justify-content: center;
    gap: 20px;


`

export const Card = styled.div`

    width: 30%;
    height: 100%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    border-radius: 8px 8px 0px 0px;
    overflow: hidden;

    img{
        width: 100%;
        height: 300px;
        object-fit: cover;
        margin-bottom: 20px;
        border-radius: 8px 8px 0px 0px;
    }

    h2{
        font-size: 25px;
    }

    p{
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    span{
        font-size: 20px;
        color: #5CA720;
    }

    button{
        height: 35px;
        border: none;
        background-color: #5CA720;
        color: white;
        font-weight: 600;
        cursor: pointer;
        font-size: 18px;
        transition: all ease-in 0.2s;
    }

    button:hover{
        background-color: #3b780b;
    }

    @media(max-width:550px){
        width: 90%;
    }
`