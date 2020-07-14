import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header =  (props) => {
    const {branding} = props;
    return (
     <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><i className="fa fa-home"></i>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addcontact" className="nav-link"><i className="fa fa-plus"></i>Add New</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>

                    
                </ul>
            </div>
            </div>
            
        </nav>
    </div>
    )
}
Header.defaultProps = {
    branding: 'Contact Manager'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

export default Header;