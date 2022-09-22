import {SocialStyle} from "./SocialStyle.js"
import instagram from "../../assets/instagram-svg.svg"
import facebook from "../../assets/facebook-svg.svg"
import mastercard from "../../assets/mastercard.svg"
import paypal from "../../assets/paypal.svg"
import visa from "../../assets/visa.svg"


export default function SocialMedias(){
    return(
        <SocialStyle>
            <div>
                <a rel="noreferrer" target="_blank" href="https://instagram.com"><img src={instagram} alt="instagram link" /></a>
                <a rel="noreferrer" target="_blank" href="https://facebook.com"><img src={facebook} alt="facebook link" /></a>
            </div>
            <div>
                <img src={mastercard} alt="mastercard logo" />
                <img src={paypal} alt="paypal logo" />
                <img src={visa} alt="visa logo" />
            </div>
        </SocialStyle>
    )
}