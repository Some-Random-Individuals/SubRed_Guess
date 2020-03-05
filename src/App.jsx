import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Filter1Rounded, Filter2Rounded, Filter3Rounded } from '@material-ui/icons';
import axios from 'axios';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#2e3440',
    color: '#eceff4',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#4c566a',
    color: '#eceff4',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    color: 'black',
  },
  icon: {
    color: '#eceff4',
  },
  toolbar: theme.mixins.toolbar,
}));

const App = () => {
  const classes = useStyles();

  const [apodSource, setApodSource] = useState('');

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(res => {
      const { data } = res;
      setApodSource(data.hdurl);
    });
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            TOM EST S U P E R GAY
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.toolbar} />
        <List>
          <ListItem button key="TOM">
            <ListItemIcon className={classes.icon}>
              <Filter1Rounded />
            </ListItemIcon>
            <ListItemText primary="TOM" />
          </ListItem>
          <ListItem button key="EST">
            <ListItemIcon className={classes.icon}>
              <Filter2Rounded />
            </ListItemIcon>
            <ListItemText primary="EST" />
          </ListItem>
          <ListItem button key="GAY">
            <ListItemIcon className={classes.icon}>
              <Filter3Rounded />
            </ListItemIcon>
            <ListItemText primary="GAY" />
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.content}>
        <img src={apodSource} alt="APOD" />
      </div>
    </div>
  );
};

export default App;
