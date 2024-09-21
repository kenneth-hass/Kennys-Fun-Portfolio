import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    const currentPage = useLocation().pathname

    return(
        <div>
            <ul className='nav navTabs bgNav'>

                <li className='navItem'>

                    <Link to="/"
                    className={currentPage === "/" ? 'navLinkActive' : 'navLink'}>
                        About Me
                    </Link>
                </li>

                <li className='navItem'>

                    <Link to="/Contact"
                    className={currentPage === "/Contact" ? 'navLinkActive' : 'navLink'}>
                        Contacts
                    </Link>
                </li>

                <li className='navItem'>

                    <Link to="/Portfolio"
                    className={currentPage === "/Portfolio" ? 'nav-link-active' : 'nav-link'}>
                        Portfolio
                    </Link>
                </li>

                <li className='navItem'>

                    <Link to="/Resume"
                    className={currentPage === "/Resume" ? 'nav-link-active' : 'nav-link'}>
                        Resume
                    </Link>
                    
                </li>
            </ul>
        </div>
    );
}

export default Navbar