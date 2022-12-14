import { Footercontainer } from "./FooterStyle";
import Socialmedias from "../Social Medias/Socialmedias.jsx"

export default function Footer(){
    return(
        <div>
            <Footercontainer>
                <nav>
                    <ul>
                        <il><a href="#">Contact</a></il>
                        <il><a href="#">Service Terms</a></il>
                        <il><a href="#">Privacy Policy</a></il>
                        <il><a href="#">Cancellations, exchanges or returns</a></il>
                    </ul>
                </nav>
                <div>
                    <h3>Newslater</h3>
                    <form>
                        <input placeholder="Your best email" type="email" name="email" id="email" />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </Footercontainer>
            <Socialmedias/>
        </div>
    )
}