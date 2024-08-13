import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { useAuth } from "../store/auth";

export const Navbar = () => {

    const isloggedin = useAuth();

    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-blue">
            <NavLink className="navbar-brand" to="/home">SavvyFinance</NavLink>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item"><NavLink className="nav-link text-white" to="/home">Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-white" to="/about">About</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-white" to="/learn">Learn</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-white" to="/contact">Community and Support</NavLink></li>
                </ul>
                <ul className="navbar-nav">

                    {isloggedin ? (<li className="nav-item"><NavLink className="nav-link text-white" to="/logout">Logout</NavLink></li>) 
                    : <> (<li className="nav-item"><NavLink className="nav-link text-white" to="/logout"><FontAwesomeIcon icon={faUser} /></NavLink></li>) </>}
                    
                    

                    <div id="menuIcon" className="dropdown">

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#"><FontAwesomeIcon icon={faBars} />
                            </a>
                        </li>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><NavLink className="dropdown-item" to="/expense tracking">Expense Tracking</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/income tracking">Income Tracking</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/savings goal">Savings Goal</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/budgeting">Budgeting</NavLink></li>
                        </ul>
                    </div>
                </ul>
            </div>
        </nav>
    </>
}