import { Link } from "react-router"
import "../Home/index.css"

const Header =()=>{
    return(
        <>
        <nav>
            <div className="icons">
                <img src="./src/assets/iconRes.png" alt="" />
                <h1>Geeksfood</h1>
            </div>
            <div className="lists">
                <ul>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to='/qoutes'><li id='routeList'>Quote</li></Link>
                    <li>Resturants</li>
                    <li>Foods</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="getStarted">
                <button>Get started</button>
            </div>
        </nav>
        </>
    )
}
export default Header