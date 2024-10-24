import React, { useState } from 'react';
import './NavBar.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <Link to={"/"}>
                <Button variant="contained" className="nav-button">Inicio</Button>
            </Link>
            <Link to={"/Characters"}>
                <Button variant="contained" className="nav-button">Personajes</Button>
            </Link>
            <Link to={"/humans"}>
                <Button variant="contained" className="nav-button">Humanos</Button>
            </Link>
            <Link to={"/aliens"}>
                <Button variant="contained" className="nav-button">Aliens</Button>
            </Link>
            <Link to={"/about"}>
                <Button variant="contained" className="nav-button">Acerca De</Button>
            </Link>
        </nav>
    );
};

export default NavBar;
