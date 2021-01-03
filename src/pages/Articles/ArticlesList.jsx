import React, {useState, useEffect} from 'react';

import 'react-checkbox-tree/lib/react-checkbox-tree.css';

import {
  Box,
  Grid,
  Icon,
  Typography,
} from '@material-ui/core';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import SearchBar from 'material-ui-search-bar';
import queryString from 'query-string';

import ArticleItem from './ArticleItem.jsx';
import ArticleItemPlaceholder from './placeholders/ArticleItemPlaceholder';
import NoResultsFound from './NoResultsFound';
import ErrorResult from './ErrorResult';
import LoadMore from './LoadMore';
import CustomDivider from '../../components/Divider';


import {locationType} from '../../types/location';

import {
  ArticlesListContainer,
  HudTopBar,
  HudTopBarSearch,
  ArticleListContainer,
} from './styles';

const ArticlesList = (props) => {
  const {
    location,
  } = props;

  const [articles, setArticles] = useState([]);
  const [articlesPlaceholder] = useState([1, 2, 3, 4, 5, 6]);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(10);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [load, setLoad] = useState(true);
  const [existMore, setExistMore] = useState(true);

  const loadMore = () => {
    setSkip((skip+limit));
    setLoad(true);
  };

  const changeSearchState = () => {
    setArticles([]);
    setLoad(true);
  };

  const resetSearchState = () => {
    setSearch('');
    changeSearchState();
  };

  useEffect(() => {
    const getQueryStringKey = () => queryString.parse(location.search).q;

    const get = async () => {
      setIsLoading(true);
      setLoad(false);

      const searchTerm = search || getQueryStringKey() || '';
      const url = `/articles?query=${searchTerm}&skip=${skip}&limit=${limit}`;

      await axios(url).then((res) => {
        setExistMore(Boolean(res.data.articles.length));
        setArticles(articles.concat(res.data.articles));
        setError(false);
      }).catch(() => setError(true));

      setIsLoading(false);
    };

    if (load) {
      get();
    }
  },
  [
    search,
    isLoading,
    load,
    error,
    articles,
    existMore,
    skip,
    limit,
    location,
  ]);

  return (
    <ArticlesListContainer container>
      <HudTopBar item xs={12}>
        <HudTopBarSearch item xs={12}>
          <SearchBar
            value={search}
            onChange={setSearch}
            onRequestSearch={changeSearchState}
            onCancelSearch={resetSearchState}
            placeholder="O que você está procurando?"
            searchIcon={
              (<Icon color="primary">search</Icon>)
            }
          />
        </HudTopBarSearch>
      </HudTopBar>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" alignItems="center" mx={3}>
          <Box display="flex" alignItems="center" mr={1}>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              size="1x"
              color="#8a05be"
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography component="span" variant="body2">
                Informe o assunto desejado e pressione
                o enter do seu teclado para confirmar a busca.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <CustomDivider />
      <ArticleListContainer item xs={12}>
        { Boolean(articles.length) &&
            <Box>
              { articles.map((article) => (
                <ArticleItem article={article} key={article.uri}/>
              ))}
            </Box>
        }
        { isLoading && !Boolean(articles.length) &&
            articlesPlaceholder.map(
                (elem) => (<ArticleItemPlaceholder key={elem} />),
            )
        }
        <NoResultsFound
          visible={!isLoading && !Boolean(articles.length) && !error }
        />
        <ErrorResult visible={error && !isLoading} message="Ops! ocorreu um erro ao buscar nossos artigos. Já tentou atualizar a página?"/>
        <LoadMore
          isLoading={Boolean(isLoading && articles.length)}
          visible={Boolean(existMore && articles.length)}
          onLoad={loadMore}
        />
      </ArticleListContainer>
    </ArticlesListContainer>
  );
};

ArticlesList.propTypes = {
  location: locationType,
};

ArticlesList.defaultProps = {
  locations: {
    pathName: '',
    search: '',
  },
};

export default ArticlesList;
