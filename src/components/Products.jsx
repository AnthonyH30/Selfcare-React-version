import { Component } from "react";
import { Productheader } from "./ProductStyle.js";
import { Cards } from "./Cards.jsx";


export class Products extends Component{
    render(){
        return(
            <div>
                <Productheader>
                    <h2>For Sale</h2>
                    <h3>9 Products</h3>
                </Productheader>
                <Cards/>
            </div>
        )
    }
}

export default Products;