import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NavBar from "./NavBar";
import Spinner from "./Spinner";

import { withRouter } from "react-router-dom";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log("Constructor in news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    this.APIDomain = "https://newsapi.org/v2/";
    document.title = props.category;
    console.log("Props Data ===>", this.props);
  }

  updateNews(isMoreData = false) {
    console.log("Update News Function()");

    this.setState({ loading: true });
    const { pageSize, page } = this.state;
    const { country } = this.props;

    const url = `${this.APIDomain}top-headlines?country=${country}&category=${this.props.match.params.subcategory}&apiKey=ac0cff8d09414151b9686d8af01ed53b&page=${page}&pageSize=${pageSize}`;

    fetch(url)
      .then((data) => data.json())
      .then((parsedData) => {
        console.log("Parsed Data===>>>", parsedData);
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

      let currentPath=this.props.match.params.subcategory;

      localStorage.setItem('NewsCategory',currentPath);
  }

  componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.updateNews(true);
    });
  };

  handleNewsClick=()=>{
    this.setState ({
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    },()=>{this.updateNews(false)});
  }

  render() {
    return (
      <>
        <NavBar handleNewsType={this.handleNewsClick} />
        <div className="container my-3">
          <h1
            className="text-center"
            style={{ marginTop: "70px" }}
          >
            News-Top Headlines
          </h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
            >
              {this.state.articles.map((element) => {
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
}

export default withRouter(News);