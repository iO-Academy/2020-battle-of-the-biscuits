import React from 'react';
// import Logo from "./oreo-biscuit-recipe-cookie.jpg"

class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <img src={process.env.PUBLIC_URL + '/Images/Logo_biscuit.svg'} />
            </div>
        )
    }
}

export default Header
