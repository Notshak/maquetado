import React from 'react'

export default function Comp1() {
    return (
        <div className="Landing" >
        <div className="logo">Lenovo</div>
        <span className="copy in" >TM</span>
        <div className="links">
            <span className="nav_1 in nav_e">PRODUCT</span>
            <span className="nav_2 in nav_e">DEALS</span>
            <span className="nav_3 in nav_e">SOLUTIONS</span>
            <span className="nav_4 in nav_e">SUPPORT</span>
            <form className="search_form">
                <input className="search_input" type="text" placeholder="  SEARCH" name="search"/>
                <button className="search_button">
                <img className="search_img" src="https://cdn4.iconfinder.com/data/icons/font-awesome-2/2048/f002-512.png"></img></button>
            </form>
            <span className="nav_5 in">Sales 1-855-253-6686</span>
            <span className="nav_6 in">Stay in Touch</span>
        </div>

    </div>
    )
}
