import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const cartItems = useSelector(state => state.cart.cartItems);

    const menuItems = [
        { text: 'Categories', link: '/categories', icon: faList },
        { text: 'Users', link: '/users', icon: faUser },
        { text: 'Cart', link: '/cart', icon: faShoppingCart }
    ];




    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    eCommerce
                </Link>
                <ul className="navbar-menu">
                    {menuItems.map((item, index) => (
                        <li className="navbar-item" key={index}>
                            <Link to={item.link} className="navbar-link">
                                {item.text}
                                {item.icon && (
                                    <FontAwesomeIcon className='fa-icon' icon={item.icon} />
                                )}
                                {item.text === 'Cart' && (
                                    <span>({cartItems.length})</span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
