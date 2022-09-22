import { createContext, useState } from "react";

export const CartContext = createContext()

export const ShopCartContext = ({children}) => {
    const [cartIsOpen, setCartIsOpen] = useState(false)
    const [cartItens, setCartItens] = useState([])
    const totalPrice = cartItens.reduce((a, c) => a + c.qnt * c.preco, 0)
    const [products, setProducts] = useState([
        {
        id: 1,
        nome: "Chandra Oh",
        image: "chandra-oh-y5hRv6UNKMg-unsplash",
        preco: 50,
        qnt: 0
    },
    {
        id: 2,
        nome: "Devin Avery",
        image: "devin-avery-bMH8ub9z1_U-unsplash",
        preco: 30,
        qnt: 0
    },
    {
        id: 3,
        nome: "Devin Avery",
        image: "devin-avery-BRVqq2uak4E-unsplash",
        preco: 55,
        qnt: 0
    },
    {
        id: 4,
        nome: "Gabrielle Henderson",
        image: "gabrielle-henderson-1DMNn6gBbwQ-unsplash",
        preco: 60,
        qnt: 0
    },
    {
        id: 5,
        nome: "Nery Montenegro",
        image: "nery-montenegro-SmEty_TVr80-unsplash",
        preco: 35,
        qnt: 0
    },
    {
        id: 6,
        nome: "Olena Sergienk",
        image: "olena-sergienko-GOVTETevRm8-unsplash",
        preco: 50,
        qnt: 0
    },
    {
        id: 7,
        nome: "Phaedra Botanicals",
        image: "phaedra-botanicals-uFAHrKYkTVI-unsplash",
        preco: 55,
        qnt: 0
    },
    {
        id: 8,
        nome: "Pharma Hemp Complex",
        image: "pharma-hemp-complex-tAzdKblAinw-unsplash",
        preco: 35,
        qnt: 0
    },
    {
        id: 9,
        nome: "Pharma Hemp",
        image: "pharma-hemp-complex-yVAXSK6zFIM-unsplash",
        preco: 30,
        qnt: 0
    }])

    function addCart(item){
        const productsInCart = [...cartItens];

        const iten = productsInCart.find((i) => i.id === item.id)

        if(!iten){
            productsInCart.push({
                id: item.id,
                nome: item.nome,
                image: item.image,
                preco: item.preco,
                qnt: item.qnt + 1
            })
        }else{
            iten.qnt = iten.qnt + 1
        }
        setCartItens(productsInCart)
    }


    function plusQntCart(item){
        const productsInCart = [...cartItens];

        const iten = productsInCart.find((i) => i.id === item.id)

        if(iten.qnt >= 1){
            iten.qnt = iten.qnt + 1;
            setCartItens(productsInCart)
        }
    }
    

    function minusQntCart(item){
        const productsInCart = [...cartItens];

        const iten = productsInCart.find((i) => i.id === item.id)

        if(iten.qnt > 1){
            iten.qnt = iten.qnt - 1;
            setCartItens(productsInCart)
        }else{
            const cartFilter = cartItens.filter((i) => i.id !== item.id);
            setCartItens(cartFilter);
        }
    }

    function RemoveItemCart(id){
        const cartFilter = cartItens.filter((item) => item.id !== id);
        setCartItens(cartFilter);
    }

    return(
        <CartContext.Provider value={{ cartIsOpen, setCartIsOpen, addCart, cartItens, setCartItens, products, setProducts, RemoveItemCart, minusQntCart, plusQntCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}