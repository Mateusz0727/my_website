import {  faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const Footer=()=>
{
    return(
        <footer>
        <div className="footer-style">
           
    </div>
    <div className="footer-content">


        <div >
                MKJBD
            </div>
           
            <nav >
         
              <Link to="/product">Product</Link>
            
              <Link to="/FAQ">FAQ</Link>
           
        </nav>
               <div> 
                <Link to="/"> <FontAwesomeIcon icon={faFacebookSquare} color="white"  fontSize={30}/></Link>
                <Link to="/">  <FontAwesomeIcon icon={faInstagramSquare}  color="white"  fontSize={30}/> </Link>
       
            </div>
     </div>
                 
        </footer>
    )
}