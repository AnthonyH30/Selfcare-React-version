import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Cardspart } from "./CardsStyle";
import { Card } from "./CardsStyle";


export function Cards(){

    const {products, addCart } = useContext(CartContext)


        return(
            <Cardspart>
                {products.map((item) => (
                <Card key={item.id}>
                    <img src={require('../../assets/' + item.image + '.jpg')} alt={item.nome} />
                    <h2>{item.nome}</h2>
                    <p>R$ <span>{item.preco}</span></p>
                    <button onClick={() => addCart(item)} >Add to Cart</button>
                </Card>
                ))}
            </Cardspart>
        )
}

export default Cards;