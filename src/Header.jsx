import geeklogo from './assets/iconRes.png'
import './index.css'

const Header =()=>{
    return(
        <>
        <div className='menu'>
        <nav>
            <div className="icons">
                <img src="./src/assets/iconRes.png" alt="" />
                <h1>Geeksfood</h1>
            </div>
            <div className="lists">
                <ul>
                    <li>Home</li>
                    <li>Qoute</li>
                    <li>Resturants</li>
                    <li>Foods</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="getStarted">
                <button>Get started</button>
            </div>
        </nav>
        </div>
        </>
    )
}
export default Header