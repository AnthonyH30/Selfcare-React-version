import { Component } from "react";
import { Cardspart } from "./CardsStyle";
import { Card } from "./CardsStyle";


export class Cards extends Component{

    state={
        product:[
            {
                id: 1,
                nome: "Chandra Oh",
                image: "chandra-oh-y5hRv6UNKMg-unsplash"
            },
            {
                id: 2,
                nome: "Devin Avery",
                image: "devin-avery-bMH8ub9z1_U-unsplash"
            },
            {
                id: 3,
                nome: "Devin Avery",
                image: "devin-avery-BRVqq2uak4E-unsplash"
            },
            {
                id: 4,
                nome: "Gabrielle Henderson",
                image: "gabrielle-henderson-1DMNn6gBbwQ-unsplash"
            },
            {
                id: 5,
                nome: "Nery Montenegro",
                image: "nery-montenegro-SmEty_TVr80-unsplash"
            },
            {
                id: 6,
                nome: "Olena Sergienk",
                image: "olena-sergienko-GOVTETevRm8-unsplash"
            },
            {
                id: 7,
                nome: "Phaedra Botanicals",
                image: "phaedra-botanicals-uFAHrKYkTVI-unsplash"
            },
            {
                id: 8,
                nome: "Pharma Hemp Complex",
                image: "pharma-hemp-complex-tAzdKblAinw-unsplash"
            },
            {
                id: 9,
                nome: "Pharma Hemp",
                image: "pharma-hemp-complex-yVAXSK6zFIM-unsplash"
            }
        ]
    }


    render(){

        return(
            <Cardspart>
                {this.state.product.map((item) => (
                <Card key={item.id}>
                    <img src={require('../assets/' + item.image + '.jpg')} alt={item.nome} />
                    <h2>{item.nome}</h2>
                    <p>R$ <span>50</span></p>
                    <button>Add to Cart</button>
                </Card>
                ))}
            </Cardspart>
        )
    }
}

export default Cards;