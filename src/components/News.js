import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'

// import Spinner from "./Spinner";

export class News extends Component {

  static defaultProps={
    country:'in',
    pageSize:8,
    category: 'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    console.log("Hello, I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
    document.title=this.props.category;
  }

  async componentDidMount() {
    console.log("Component Did Mount");
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac0cff8d09414151b9686d8af01ed53b&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url); //fetching api
    console.log(data);
    console.log(
      "After fetching the url the Data needs to be extracted from it"
    );
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({ 
        articles: parsedData.articles,
        totalResults: parsedData.totalResults 
    });
  }

  handlePreviousClick = async () => {
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac0cff8d09414151b9686d8af01ed53b&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url); //fetching api
    console.log(data);
    console.log(
      "After fetching the url the Data needs to be extracted from it"
    );
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if(this.state.page>Math.ceil(this.state.totalResults/this.props.pageSize))
    {

    }
    else
    {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac0cff8d09414151b9686d8af01ed53b&page=${
          this.state.page + 1
        }&pageSize=${this.props.pageSize}`;
        let data = await fetch(url); //fetching api
        console.log(data);
        console.log(
          "After fetching the url the Data needs to be extracted from it"
        );
        let parsedData = await data.json();
        console.log(parsedData);
    
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
        });
    }
  };
  render() {
    console.log("Render");
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '35px 0px'}}>News-Top Headlines</h1>
        {/* <Spinner/> */}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4">
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page>Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
