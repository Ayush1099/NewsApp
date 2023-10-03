import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;

  return (
    <div className="card my-3 center ">
      <img
        src={
          !imageUrl
            ? "https://static.toiimg.com/photo/79638690.cms"
            : imageUrl
        }
        className="card-img-top"
        alt="..."
        height="300"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
          </small>
        </p>
        <a
          rel="noreferrer"
          href={newsUrl}
          className="btn btn-sm btn-dark"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
