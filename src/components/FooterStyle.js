import styled from "styled-components";

export const Footercontainer = styled.footer`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 2%;
    background-color: #F9F9F9;
    padding-block: 15px;

    nav ul{
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    a{
        text-decoration: none;
        color: black;
        font-weight: 600;
    }

    div h3{
        font-size: 20px;
        margin-bottom: 15px;
        font-weight: 600;
    }

    form{
        display: flex;
        flex-wrap: nowrap;
    }

    form input:first-child{
        width: 200px;
        height: 40px;
        padding-left: 5px;
        border-radius: 5px 0px 0px 5px;
        outline: none;
        border: 0.2px solid gray;
    }

    form input:last-child{
        width: 80px;
        border: none;
        background-color: #5CA720;
        color: white;
        font-weight: 600;
        border-radius: 0px 5px 5px 0px;
    }

    @media(max-width: 768px){
        flex-direction: column;
        padding-block: 30px;
        gap: 20px;
        align-items: flex-start;
        padding-inline: 5%;

        div{
            width: 100%;
        }

        form{
            flex-direction: column;
            width: 100%;
            gap: 10px;
        }

        form input:first-child{
            width: 100%;
            border-radius: 3px 3px 3px 3px;
        }

        form input:last-child{
            width: 100%;
            height: 40px;
            border-radius: 3px 3px 3px 3px;
        }
    }
`