import { Component } from "react";
import {SocialStyle} from "./SocialStyle.js"
import instagram from "../assets/instagram-svg.svg"
import facebook from "../assets/facebook-svg.svg"
import mastercard from "../assets/mastercard.svg"
import paypal from "../assets/paypal.svg"
import visa from "../assets/visa.svg"


export class Socialmedias extends Component{
    render(){
        return(
            <SocialStyle>
                <div>
                    <a href="#"><img src={instagram} alt="instagram link" /></a>
                    <a href="#"><img src={facebook} alt="facebook link" /></a>
                </div>
                <div>
                    <img src={mastercard} alt="mastercard logo" />
                    <img src={paypal} alt="paypal logo" />
                    <img src={visa} alt="visa logo" />
                </div>
            </SocialStyle>
        )
    }
}

export default Socialmedias;