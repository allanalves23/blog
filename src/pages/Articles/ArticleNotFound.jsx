import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core';

import ErrorResult from './ErrorResult';
import {ArticleTextContentErrorResultContainer} from './styles';

const ArticleNotFound = (props) => {
  const {visible, codeError} = props;
  return (
    <ArticleTextContentErrorResultContainer visible={visible.toString()}>
      <ErrorResult
        visible={visible}
      >
        {
          codeError === 404 ?
          (<Box>
            Ops, parece que não existe nenhum artigo com este nome, que tal nos mandar uma sugestão de conteúdo?
          </Box>) :
          (<Box>Ops, parece que ocorreu um erro inesperado, tente atualizar a página, se persistir reporte</Box>)
        }
      </ErrorResult>
    </ArticleTextContentErrorResultContainer>
  );
};

ArticleNotFound.propTypes = {
  visible: PropTypes.bool.isRequired,
  codeError: PropTypes.number.isRequired,
};

export default ArticleNotFound;
