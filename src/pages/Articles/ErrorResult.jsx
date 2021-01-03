import React from 'react';
import PropTypes from 'prop-types';

import {Box, Button, Typography} from '@material-ui/core';

import {
  SampleContainer,
  ArticleErrorResultIconContainer,
  ArticleErrorResultIcon,
  ArticleErrorResultMessageContainer,
} from './styles';

const ErrorResult = (props) => {
  const {visible, message, children} = props;

  return (
    <SampleContainer item xs={12} visible={visible.toString()}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="450px"
      >
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="center"
          flexDirection="column"
          m={2}
        >
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <ArticleErrorResultIconContainer>
              <ArticleErrorResultIcon color="primary">healing</ArticleErrorResultIcon>
            </ArticleErrorResultIconContainer>
            <ArticleErrorResultMessageContainer>
              <Typography component="h2" variant="h5">
                {message || children}
              </Typography>
            </ArticleErrorResultMessageContainer>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" mt={3}>
            <Button
              color="primary"
              fullWidth
              variant="outlined"
              onClick={() => window.location.reload()}
            >
                Atualizar página
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" width="100%" mt={3}>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              onClick={() => window.location.href = '/sobre#contact'}
            >
              Fale conosco
            </Button>
          </Box>
        </Box>
      </Box>
    </SampleContainer>
  );
};

ErrorResult.propTypes = {
  visible: PropTypes.bool,
  message: PropTypes.string,
  children: PropTypes.node,
};

ErrorResult.defaultProps = {
  visible: false,
  message: '',
  children: null,
};

export default ErrorResult;
