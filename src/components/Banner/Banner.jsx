import Bannerimg from "../../assets/imagem.svg"
import {Bannerbg} from "./BannerStyle.js"


export default function Banner(){
    return(
        <Bannerbg>
            <img src={Bannerimg} alt="For Sale banner" />
        </Bannerbg>
    )
}
