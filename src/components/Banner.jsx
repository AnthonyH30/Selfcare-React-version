import { Component } from "react";
import Bannerimg from "../assets/imagem.svg"
import {Bannerbg} from "./BannerStyle.js"


export class Banner extends Component{
    render(){
        return(
            <Bannerbg>
                <img src={Bannerimg} alt="For Sale banner" />
            </Bannerbg>
        )
    }
}

export default Banner;