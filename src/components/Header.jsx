import { Component } from "react";
import user from "../assets/user-svg.svg";
import cart from "../assets/cart-svg.svg";
import {Headerbox} from "./headerStyle.js";


export class Header extends Component{

    state={
        cart: 0
    }

    render(){
        return(
            <Headerbox>
                <h2>SelfCare</h2>
                <nav>
                    <img src={user} alt="user option" />
                    <div>
                        <img src={cart} alt="" />
                        <div>
                            <span>{this.state.cart}</span>
                        </div>
                    </div>
                </nav>
                </Headerbox>
        )
    }
}

export default Header;