import { useContext } from "react";
import user from "../../assets/user-svg.svg";
import cartImg from "../../assets/cart-svg.svg";
import {Headerbox} from "./headerStyle.js";
import { CartContext } from "../../Context/CartContext";


export default function Header(){

    const { cartItens, cartIsOpen, setCartIsOpen } = useContext(CartContext)


    return(
        <Headerbox>
            <h2>SelfCare</h2>
            <nav>
                <img src={user} alt="user option" />
                <div onClick={() => {setCartIsOpen(!cartIsOpen)}}>
                    <img src={cartImg} alt="" />
                    <div>
                        <span>{cartItens.length}</span>
                    </div>
                </div>
            </nav>
        </Headerbox>
    )
}