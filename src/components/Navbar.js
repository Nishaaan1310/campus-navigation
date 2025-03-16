import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Campus Navigation
        </Typography>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/signup">Signup</Button>
        <Link to='/AboutUs'>
          <Button variant='contained'>About us</Button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/name'>
          <Button variant='contained'>Library</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;