import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './consts/navbarItems';
import { navbarStyles } from './styles';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <Drawer
          sx={navbarStyles.drawer}
          variant="permanent"
          anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((text, index) => (
            <ListItemButton
                key={text.id}
                onClick={() => navigate(text.route)}
            >
              <ListItemIcon
                sx={navbarStyles.icons}
              >
                {text.icon}
              </ListItemIcon>
              <ListItemText
                sx={navbarStyles.text}
                primary={text.label}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    );
};

export default Navbar