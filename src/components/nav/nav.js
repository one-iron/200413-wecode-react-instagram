import React, { Component } from 'react';
import './nav.css';


class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="navContainer">
                    <div className="logo">
                        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                    </div>
                    <div className="search">
                        <input type="text" placeholder="검색" />
                    </div>
                    <div className="icons">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWkyGbohFTOEWMbOWCeeYGtnK1FF3gMw1CL90wff_Jf08_79EZ&usqp=CAU" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsfD2TZuxpfLC3OOzUScz0FyQwLFghgQv4dNX7RvbxbPsytMHS&usqp=CAU" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRXr4gIJ46kaq7RVJ2zLVCE9MC41P-nWU3-AcR4t6vuSISnjHd&usqp=CAU" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6equvE1VuyGtmIxZEXu6sXDY-ZWPlK1hP4KTZJCaABta4k_1_&usqp=CAU" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;