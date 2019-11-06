import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="main-nav">
            <div className="logo">Movie review</div>
            <ul>
                <li><a href="#">{props.home}</a></li>
                <li><a href="#">{props.about}</a></li>
                <li><a href="#">{props.movies}</a></li>
            </ul>
        </div>

    )
};

export default Header;