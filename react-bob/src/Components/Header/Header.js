import React from 'react';
import './Header.scss';
// import Logo from "./oreo-biscuit-recipe-cookie.jpg"

class Header extends React.Component {
    render () {
        return (
            <div className="banner_container" >
                <div className="banner">
                <img className="logo" src={process.env.PUBLIC_URL + './Images/Logo_biscuit.png'} alt ="logo"/>
                </div>
            </div>
        )
    }
}

export default Header
