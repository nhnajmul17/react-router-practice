// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/restaurent">Restaurent</NavLink>
            <NavLink to='/meal'>Meal</NavLink>
        </nav>



    );
};

export default Header;