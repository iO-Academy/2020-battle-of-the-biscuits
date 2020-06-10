import React from 'react';
import './Header.scss';

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
