import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import NavDrawer from './NavDrawer';

import { alpha, styled } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const NavButton = styled(Button)({
  '&.active': {
    backgroundColor: "#6b0204",
    borderRadius:'10'
  }
});

function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  var isLoggedIn = useSelector(state => state.isLoggedIn)
  const [LogState, setLogState] = useState(isLoggedIn);

  useEffect( 
    () => {setLogState(isLoggedIn)},
    [isLoggedIn]
  )

                // <NavButton sx={{mr:2}} component={NavLink} to="/subscriptions" color="inherit">Subscriptions</NavButton>

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#991416','color': 'white'}}>
        { isMobile ? (
            <NavDrawer /> 
          ):(
              <Toolbar sx={{minWidth: '300px'}}>
                <NavButton sx={{mr:2}} component={NavLink} to="/" color="inherit">Home</NavButton>
                {/* <NavButton sx={{mr:2}} component={Link} href="https://medium.com/@mirajadhav.n" color="inherit">Blog</NavButton> */}
                <NavButton sx={{mr:2}} component={NavLink} to="/blog" color="inherit">Bookclub Blog</NavButton>
                <NavButton sx={{mr:2}} component={NavLink} to="/newsletter" color="inherit">Newsletter</NavButton>
                <NavButton sx={{mr:2}} component={NavLink} to="/faqs" color="inherit">FAQs</NavButton>
                <NavButton sx={{mr:2}} component={NavLink} to="/workshops" color="inherit">Workshops</NavButton>
                <Box sx={{ flexGrow: 1 }}>
                </Box>
                { /*LogState ? (
                    <>
                      <NavButton sx={{mr:2}} component={NavLink} to="/dashboard" color="inherit">Dashboard</NavButton>
                      <NavButton sx={{mr:2}} component={NavLink} to="/logout" color="inherit">Logout</NavButton>
                    </>
                  ):(
                    <>
                      <NavButton sx={{mr:2}} component={NavLink} to="/signup" color="inherit">Sign Up</NavButton>
                      <NavButton sx={{mr:2}} component={NavLink} to="/login" color="inherit">Login</NavButton>
                    </>
                  ) */
                }

              </Toolbar>
          )
        }
      </AppBar>
    </Box>
  );
}

export default Nav;
