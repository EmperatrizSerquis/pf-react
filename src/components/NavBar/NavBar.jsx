import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import myLogo from '/logo.svg';
import blackLogo from '/light-black.svg';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';


const pages = ['products', 'about', 'contact'];
const settings = ['cart', 'account', 'login', 'logout'];

function ResponsiveAppBar({ show,  handleShow }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { user, logout } = useContext(AuthContext)
  

  return (
    
    <AppBar position="static" className="appbar" color="transparent">
      <Container maxWidth="xl">
      
        <Toolbar disableGutters>          

          <Link to={`/`}><img src={myLogo} className="header__logo" alt="Light logo" /></Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/${page}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
              
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#000', display: 'block' }}
              >
                <Link to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>
          <CartWidget  show={show} handleShow={handleShow}/>
          <Box sx={{ flexGrow: 0 }}>
          
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {
                  user.email ?
                  <p className="user-nav">Hola<br /> {user.email} <br /> <LogoutIcon onClick={logout} /> </p>
                  :
                  <p className="user-nav"> <Link  to="/login"> Login <br /> <LoginIcon  /> </Link> </p>
                }
                <Avatar alt="Light" src={blackLogo} />
               
               
              </IconButton>
              
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link to={`/${setting}`} >{setting}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
     
    </AppBar>
  );
}
export default ResponsiveAppBar;