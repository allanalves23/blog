import React, {useState, useEffect} from 'react';
import {matchType} from '../../types';
import {Grid} from '@material-ui/core';

import axios from 'axios';
import {getHttpStatusCode} from '../../config/httpHelper';

import ArticlePlaceholder from './placeholders/ArticlePlaceholder';
import FloatingButton from '../../components/FloatingButton.jsx';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import ArticleComments from './ArticleComments';
import ArticleFooter from './ArticleFooter';
import ArticleNotFound from './ArticleNotFound';

import {ArticleContainer} from './styles';

const Article = (props) => {
  const {match} = props;
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(true);
  const [isError, setIsError] = useState(false);
  const [codeError, setCodeError] = useState(0);

  useEffect(() => {
    const get = async () => {
      const {resource} = match.params;

      const url = `/articles/${resource}`;
      setIsLoading(true);
      await axios(url).then((response) => {
        const {data} = response;
        setArticle({...data, publishedAt: new Date(data.publishedAt)});
        setIsError(false);
      }).catch((err) => {
        setCodeError(getHttpStatusCode(err));
        setIsError(true);
      });
      setIsLoading(false);
    };

    if (load) {
      setLoad(false);
      get();
    }
  }, [article, isLoading, load, match.params, isError, codeError]);

  return (
    <ArticleContainer>
      { isLoading &&
        <ArticleContainer>
          <ArticlePlaceholder />
        </ArticleContainer>
      }
      { !isLoading && !isError &&
        <Grid item xs={12} className="article-content">
          <ArticleHeader article={article}/>
          <ArticleContent article={article} />
          <ArticleFooter />
          <ArticleComments />
        </Grid>
      }
      <ArticleNotFound visible={isError} codeError={codeError} />
      <FloatingButton action={() => window.scrollTo(0, 0)}/>
    </ArticleContainer>
  );
};

Article.propTypes = {
  match: matchType.isRequired,
};

export default Article;
