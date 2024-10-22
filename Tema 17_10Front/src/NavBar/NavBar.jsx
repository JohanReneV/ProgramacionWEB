import React, { useState } from 'react';
import './NavBar.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav>
            <Link to={"/"}>
                <Button variant="contained" style={{ marginRight: '10px' }}>Inicio</Button>
            </Link>

            {}
            <Button
                variant="contained"
                onClick={handleClick}
                style={{ marginRight: '10px' }}
            >
                Personajes
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to={"/humans"}>Humanos</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"/aliens"}>Aliens</Link>
                </MenuItem>
            </Menu>

            <Link to={"/about"}>
                <Button variant="contained">Acerca De</Button>
            </Link>
        </nav>
    );
};

export default NavBar;
