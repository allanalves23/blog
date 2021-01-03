import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink, useHistory} from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import {
  IconButton,
  Drawer,
  List,
  Icon,
  Box,
  Grid,
  Typography,
} from '@material-ui/core';

import {environment} from '../../config/environment';

import {styles} from './styles/Menu';
import {
  MenuAppBar,
  MenuToolbar,
  MenuToolbarItem,
  MenuToolbarLeftArea,
  ToolbarMenuToogle,
  MenuTitle,
  MenuSearchArea,
  DrawerItemMenuContent,
  DrawerHeader,
  ToolbarLinks,
  DrawerContent,
  DrawerFooter,
  DrawerButton,
  CoderMindDrawerLogoContainer,
} from '../styles';

const useStyles = makeStyles(styles);

const Menu = () => {
  const classes = useStyles();
  const history = useHistory();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [search, setSearch] = useState('');


  const toogleDrawerMenu = () => {
    setDrawerVisible(!drawerVisible);
  };

  const searchArticles = () => {
    if (search) {
      history.push(`/artigos?q=${search}`);
    }
  };

  return (
    <Box>
      <MenuAppBar>
        <MenuToolbar>
          <MenuToolbarLeftArea>
            <ToolbarMenuToogle>
              <IconButton
                onClick={toogleDrawerMenu}
                edge="start"
                color="inherit"
              >
                <Icon color="secondary">menu</Icon>
              </IconButton>
            </ToolbarMenuToogle>
            <Box display="flex" alignItems="center">
              <MenuTitle to="/">
                <Box display="flex" alignItems="center">
                  <Box mr={1} display="flex" alignItems="center">
                    <Icon fontSize="large" >
                      code
                    </Icon>
                  </Box>
                  <Typography
                    component="h1"
                    variant="h5"
                    className="codermind"
                  >
                    Coder Mind
                  </Typography>
                </Box>
              </MenuTitle>
            </Box>
            <ToolbarLinks>
              <NavLink
                to="/artigos"
                className={classes.menuLink}
                activeClassName={classes.activeLink}
              >
                <MenuToolbarItem>
                    Artigos
                </MenuToolbarItem>
              </NavLink>
              <NavLink
                to="/sobre"
                className={classes.menuLink}
                activeClassName={classes.activeLink}
              >
                <MenuToolbarItem>
                    Sobre
                </MenuToolbarItem>
              </NavLink>
              <a href={environment.panel} className={classes.menuLink}>
                <MenuToolbarItem>
                    Painel
                </MenuToolbarItem>
              </a>
            </ToolbarLinks>
          </MenuToolbarLeftArea>
          <MenuSearchArea>
            <SearchBar
              value={search}
              onChange={(searchValue) => setSearch(searchValue)}
              onRequestSearch={searchArticles}
              placeholder="Pesquise por qualquer conteúdo!"
              width="100%"
              className="search-input"
              searchIcon={
                (<Icon color="primary">search</Icon>)
              }
            />
          </MenuSearchArea>
        </MenuToolbar>
      </MenuAppBar>
      <Drawer open={drawerVisible}
        onClose={toogleDrawerMenu}
        anchor="top"
      >
        <DrawerHeader>
          <Grid item xs={10} sm={11}>
            <CoderMindDrawerLogoContainer>
              <Typography component="h1" variant="h4" className="codermind">
                  Coder Mind
              </Typography>
            </CoderMindDrawerLogoContainer>
          </Grid>
          <Grid item xs={2} sm={1}>
            <IconButton
              color="inherit"
              onClick={toogleDrawerMenu}
            >
              <Icon fontSize="large">
                clear
              </Icon>
            </IconButton>
          </Grid>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <NavLink
              to="/artigos"
              className={classes.buttonLink}
              activeClassName={classes.activeLink}
              onClick={toogleDrawerMenu}
            >
              <DrawerButton button key={'articles'}>
                <DrawerItemMenuContent variant="h5">
                  Artigos
                </DrawerItemMenuContent>
              </DrawerButton>
            </NavLink>
            <NavLink
              to="/sobre"
              className={classes.buttonLink}
              activeClassName={classes.activeLink}
              onClick={toogleDrawerMenu}
            >
              <DrawerButton button key={'about'}>
                <DrawerItemMenuContent variant="h5">
                  Sobre
                </DrawerItemMenuContent>
              </DrawerButton>
            </NavLink>
            <a href={environment.panel} className={classes.buttonLink}>
              <DrawerButton button key={'panel'}>
                <DrawerItemMenuContent variant="h5">
                  Painel
                </DrawerItemMenuContent>
              </DrawerButton>
            </a>
            <NavLink
              to="/privacidade"
              className={classes.buttonLink}
              activeClassName={classes.activeLink}
              onClick={toogleDrawerMenu}
            >
              <DrawerButton button key={'use'}>
                <DrawerItemMenuContent variant="h5">
                  Políticas de uso
                </DrawerItemMenuContent>
              </DrawerButton>
            </NavLink>
          </List>
          <List>
            <DrawerFooter key={'version'}>
              <Box display="flex" alignItems="center">
                <Icon color="primary" fontSize="large">
                  code
                </Icon>
              </Box>
            </DrawerFooter>
          </List>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};


export default Menu;
