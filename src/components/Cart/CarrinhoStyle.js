import styled from "styled-components";


export const CarrinhoStyle = styled.div`
    width: 30vw;
    max-width: 500px;
    min-width: 320px;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: whitesmoke;
    position: fixed;
    top: 80px;
    right: 0;
    padding: 5px;
    overflow-y: auto;

    .cart-header{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding-inline: 2%;

        p{
            font-size: 18px;
            font-weight: 600;
        }
        
        .close-cart{
        /* position: absolute; */
        display: flex;
        align-items: center;
        justify-content: center;
        /* top: 10px;
        right: 10px; */
        font-size: 25px;
        height: 25px;
        background-color: transparent;
        cursor: pointer;
        border: none;
    }
    }

    

    ul{
        width: 100%;
        height: 100%;
        padding-block: 20px;
        
        li{
            height: fit-content;
            width: 100%;
            display: flex;
            gap: 10px;
            border: 1px solid #5CA720;
            margin-bottom: 10px;
            position: relative;
            border-radius: 4px;
            overflow: hidden;

            img{
                width: 100px;
                height: 130px;
                object-fit: cover;
                border-right: 1px solid #5CA720;
            }

            .content{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                padding-block: 5px;
            }

            .title-price{

                h3{
                    font-size: 25px;
                    margin-bottom: 5px;
                    margin-right: 40px;
                }

                p{
                    font-weight: 600;
                    font-size: 15px;

                    span{
                        color: #5CA720;
                        font-size: 18px;
                        margin-left: 2px;
                    }
                }
            }

            button.delete{
                position: absolute;
                top: 10px;
                right: 10px;
                width: 30px;
                height: 30px;
                background-color: transparent;
                border: none;
                cursor: pointer;

                i{
                    font-size: 20px;
                    color: gray;
                }
            }
        }
    }

    .qnt{
        width: 170px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid black;
        border-radius: 15px;
        overflow: hidden;
        margin-top: 8px;

        .add{
            position: relative;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            font-size: 18px;
            border: none;
            cursor: pointer;
        }

        p{
            font-size: 18px;
            font-weight: 700;
        }

        .remove{
            position: relative;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            font-size: 18px;
            border: none;
            cursor: pointer;
        }  
        
    }

`;

export default CarrinhoStyle;