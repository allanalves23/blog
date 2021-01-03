import {styled, Grid, Icon, Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {devices, COLORS} from '../../../config/constants';

export const SampleContainer = styled(Grid)({
  display: (props) => props.visible === 'true' ? 'block' : 'none',
});

export const SampleBox = styled(Box)({
  display: (props) => props.visible === 'true' ? 'flex' : 'none',
  width: '100%',
  justifyContent: 'center',
  marginTop: 50,
});

export const ArticlesListContainer = styled(Grid)({
  padding: '4rem 0',
});

export const HudTopBar = styled(Grid)({
  display: 'flex',
  maxHeight: 75,
  margin: '15px !important',
});

export const HudTopBarIcon = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 25,
});

export const HudTopBarSearch = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0 20px',
  minHeight: '100px',
});

export const IconButton = styled(Icon)({
  marginRight: 5,
});

export const ArticleListContainer = styled(Grid)({
  minHeight: '450px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const ArticleBox = styled(Box)({
  display: 'flex',
  marginTop: '20px',
  marginBottom: '20px',
  flexWrap: 'wrap',
  [devices.laptop]: {
    margin: '10px',
    padding: '20px',
    boxShadow: '0px 2px 4px #ccc',
  },
});

export const ArticleLogo = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ArticleContent = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: '10px 0',
  [devices.laptop]: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ArticleTitle = styled(Link)({
  textDecoration: 'underline',
  textTransform: 'uppercase',
  color: '#8a05be',
  [devices.laptop]: {
    display: 'flex',
    justifyContent: 'center',
    padding: '15px',
  },
});

export const ArticleBoostedIndicator = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [devices.laptop]: {
    alignItems: 'center',
  },
});

export const ArticleDetails = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  [devices.laptop]: {
    justifyContent: 'center',
  },
});

export const NoResultIcon = styled(Icon)({
  fontSize: '5rem',
  margin: '0 10px',
});

export const ArticleContainer = styled(Grid)({
  marginTop: 80,
});

export const ArticleImageHeaderContainer = styled(Grid)({
  maxHeight: '300px',
  width: '100%',
  overflow: 'hidden',
  marginTop: '1rem',
  marginBottom: '5rem',
  boxShadow: '0px 4px 4px gray',
});

export const ArticleHudHeader = styled(Grid)({
  padding: '15px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  fontSize: '.9rem',
});

export const ArticleTitleArea = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 15px 2px 15px',
  textAlign: 'center',
});

export const ArticleDescriptionArea = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 15px',
  textAlign: 'center',
});

export const ArticleTextContent = styled(ReactMarkdown)({
  fontSize: '1.4rem',
  textAlign: 'justify',
  minHeight: '250px',
});

export const ArticleTextContentPlaceholder = styled(Box)({
  padding: '4rem 1rem',
  minHeight: '600px',
});

export const ArticleTextContentErrorResultContainer = styled(Box)({
  minHeight: '650px',
  display: (props) => props.visible === 'true' ? 'flex' : 'none',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ArticleFooterContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '15px',
});

export const ArticleFooterIconButton = styled(FontAwesomeIcon)({
  'cursor': (props) => props.state === 'disabled' ? 'normal' : 'pointer',
  'color': (props) => props.state === 'disabled' ? COLORS.disabled : COLORS.primary,
  '&:hover': {
    color: (props) => props.state === 'disabled' ? COLORS.disabled : COLORS.primaryHovered,
  },
});

export const ArticleErrorResultIconContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 4,
  fontSize: '3rem',
  [devices.laptop]: {
    width: '100%',
    marginTop: 25,
    marginBottom: 25,
  },
});

export const ArticleErrorResultIcon = styled(NoResultIcon)({
  fontSize: '3rem',
});

export const ArticleErrorResultMessageContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  [devices.laptop]: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
});
