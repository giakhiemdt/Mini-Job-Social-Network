import type React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"

export const Navbar : React.FC = () => {

    return(
       <>
            <div className="main-navbar-wrap">
                <div className="main-wrap">
                    <div className="left-wrap">
                        <div className="button-hamburger">
                            <span className="md mdi-menu"/> 
                        </div>
                        <div className="logo"> 
                            <Link to ="#" title="Tìm kiếm việc làm nhanh, không ai nhanh">
                                <img src="#" alt="Logo của ông vua Tagigi"/>
                            </Link>
                        </div>
                        <div className="main-menu">
                            <ul className="menu">
                                <li> Jobs </li>
                                <li> Jobs Handbook</li>
                                <li> Community </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       </>
    )
}

export default Navbar