import { Productheader } from "./ProductStyle.js";
import { Cards } from "../Cards/Cards";


export default function Products(){

    return(
        <div>
            <Productheader>
                <h2>For Sale</h2>
                <h3>9 Products</h3>
            </Productheader>
            <Cards />
        </div>
    )
}