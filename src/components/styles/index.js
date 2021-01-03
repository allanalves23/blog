import {
  styled,
  Box,
  Icon,
  Fab,
  AppBar,
  Toolbar,
  Typography,
  ListItem,
} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

import {Link} from 'react-router-dom';

import {devices, COLORS} from '../../config/constants';

import {fakeLink} from '../Footer/styles/Footer';

export const CustomAlert = styled(Alert)({
  alignItems: 'center',
});

export const FooterContainer = styled(Box)({
  width: '100%',
  background: 'linear-gradient(to right, #8a05be, #42275a)',
  backgroundColor: '#8a05be',
  minHeight: 260,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const FooterBox = styled(Box)({
  width: '50%',
  [`${devices.laptop}`]: {
    width: '100%',
    margin: (props) => props.disablemargin === 'true' ? 0 : '2rem',
  },
});

export const FooterFakeLink = styled(Link)({
  ...fakeLink,
});

export const FooterIconArea = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
});

export const FooterIconDescription = styled(Box)({
  color: '#fff',
  width: '100%',
  justifyContent: 'center',
});

export const FooterIcon = styled(Icon)({
  fontSize: '5rem',
  margin: '0 1rem',
});

export const CustomFloatingButton = styled(Fab)({
  position: 'fixed !important',
  zIndex: 1,
  left: '90%',
  top: '85%',
  overflow: 'hidden',
  backgroundColor: '#8a05be !important',
  color: '#fff !important',
  [devices.tablet]: {
    left: '85%',
  },
  [devices.mobileLarge]: {
    left: '75%',
  },
});

export const MenuAppBar = styled(AppBar)({
  display: 'flex',
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: '#fff',
  borderBottom: `1px solid ${COLORS.secondary}`,
});

export const MenuToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const MenuToolbarLeftArea = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  [devices.laptop]: {
    justifyContent: 'space-between',
    width: '100vw',
  },
});

export const MenuToolbarItem = styled(Box)({
  fontSize: '1.3rem',
});

export const ToolbarMenuToogle = styled(Box)({
  display: 'none',
  alignItems: 'center',
  marginRight: '1rem',
  [devices.laptop]: {
    display: 'flex',
  },
});

export const ToolbarLinks = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px',
  marginRight: '20px',
  [devices.laptop]: {
    display: 'none',
  },
});

export const MenuTitle = styled(Link)({
  color: COLORS.secondary,
  display: 'flex',
  fontWeight: 400,
  textDecoration: 'none',
});

export const MenuAction = styled(Box)({
  'color': COLORS.secondary,
  'fontSize': '1.1rem',
  'fontWeight': 500,
  'textDecoration': 'none',
  'padding': 23,
  '&:hover': {
    backgroundColor: 'rgba(66, 39, 90, .2)',
  },
});

export const MenuSearchArea = styled(Box)({
  display: 'block',
  minWidth: '40%',
  [devices.laptop]: {
    display: 'none',
  },
});

export const DrawerItemMenuContent = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  color: COLORS.secondary,
});

export const DrawerHeader = styled(Box)({
  color: '#fff',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 15,
  paddingBottom: 15,
  background: `linear-gradient(to right, #734b6d, ${COLORS.secondary})`,
  backgroundColor: COLORS.secondary,
  height: 100,
});

export const DrawerContent = styled(Box)({
  backgroundColor: 'transparent',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const DrawerFooter = styled(ListItem)({
  display: 'flex',
  justifyContent: 'center',
});

export const DrawerButton = styled(DrawerFooter)({
  height: 100,
  fontSize: '1.5rem',
});

export const CoderMindDrawerLogoContainer = styled(Box)({
  width: '100%',
  height: '100%',
  margin: '0px 40px',
  display: 'flex',
  alignItems: 'center',
});
