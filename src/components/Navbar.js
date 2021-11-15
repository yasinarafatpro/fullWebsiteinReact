

import { Link } from "react-router-dom"
import { useState } from "react"
const Navbar = () => {
    // eslint-disable-next-line
    const [click, setClick] = useState(false)
    const nandleClick = () => setClick(!click)
    const closeMobileMenu=()=>setClick(false)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" >
                        GoTo <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={nandleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click?"nav-menu active":"nav-menu"}>
                        <li>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
