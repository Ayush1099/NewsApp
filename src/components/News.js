/////  CLASS BASED COMPONENTS   ////////////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NavBar from "./NavBar";

import { withRouter } from "react-router-dom";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    // category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log("Hello, I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };

    this.APIDomain = "https://newsapi.org/v2/";
    document.title = props.category;
    console.log("===>", this.props);
  }

  updateNews(isMoreData = false) {
    this.setState({ loading: true });
    const { pageSize, page } = this.state;
    const { country  } = this.props;
    const url = `${this.APIDomain}top-headlines?country=${country}&category=${this.props.match.params.subcategory}&apiKey=ac0cff8d09414151b9686d8af01ed53b&page=${page}&pageSize=${pageSize}`;

    fetch(url)
      .then((data) => data.json())
      .then((parsedData) => {
        console.log(parsedData);
        this.setState({
          articles: isMoreData
            ? [...this.state.articles, ...parsedData.articles]
            : parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    console.log("Component Did Mount");

    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.updateNews(true);
    });
  };

  render() {
    console.log("Render");
    return (
      <>
        <NavBar />
        <div className="container my-3">
          <h1
            className="text-center"
            style={{ margin: "35px 0px", marginTop: "90px" }}
          >
            News-Top Headlines {this.props.match.params.subcategory}
          </h1>
          <div className="row">
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<h4>Loading...</h4>}
            >
              {this.state.articles.map((element) => {
                return (
                  <div key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(News);

// const setCookie = (name, value, days = 7, path = '/') => { const expires = new Date(Date.now() + days * 864e5).toUTCString() document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path } const getCookie = (name) => { return document.cookie.split('; ').reduce((r, v) => { const parts = v.split('=') return parts[0] === name ? decodeURIComponent(parts[1]) : r }, '') } const deleteCookie = (name, path) => { setCookie(name, '', -1, path) }

// Send a message
