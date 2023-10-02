/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NavBar from "./NavBar";
import Spinner from "./Spinner";
import { withRouter } from "react-router-dom";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const APIDomain = "https://newsapi.org/v2/";
  const APIKey = "ac0cff8d09414151b9686d8af01ed53b";

  useEffect(() => {
    updateNews();
  }, [])
  
  const updateNews = async (isMoreData = false) => {

    const url = `${APIDomain}top-headlines?country=${props.country}&category=${props.match.params.subcategory}&apiKey=${APIKey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    
    fetch(url)
    .then((data) => data.json())
    .then((parsedData) => {
      setArticles(isMoreData? [...articles, ...parsedData.articles]: parsedData.articles);
      setTotalResults( parsedData.totalResults);
      setLoading(false) 
    })
    .catch((err)=>{
      setLoading(false);
    })
    setPage(page+1);
  }

  const fetchMoreData = async () => {
    setPage(page+1);
    updateNews(true);
  };

  const handleNewsClick = () => {
    setArticles([]);
    setLoading(false);
    setPage(1);
    setTotalResults(0);
    updateNews();
  }

  return (
    <>
      <NavBar handleNewsType={handleNewsClick} />
      <div className="container my-3">
        {loading && <Spinner />}
        <div className="row">
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            {articles.map((element) => {
              return (
                <>
                  <div key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={element.description ? element.description : ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                </>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 8
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default withRouter(News);