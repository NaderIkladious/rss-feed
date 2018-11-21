import React from "react";

import { ArticleCard } from "../components";
import "../styles/containers/feed.css";

export class Feed extends React.Component {
  state = {
    feed: [],
    feedDescription: {},
    limit: 7,
    filter: ""
  };

  handleLoadMore = e => {
    e.preventDefault();
    this.setState(prevState => ({
      limit: prevState.limit + 7
    }));
  };
  componentDidMount() {
    let apiKey = "9kkelzp3jtff1mq9hxw4oxf3aq4iw2i1fj38tf1a";
    let rssAPI = `https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss&api_key=${apiKey}&count=100`;
    this.setState({
      loading: true
    });
    fetch(rssAPI)
      .then(result => {
        return result.json();
      })
      .then(data => {
        this.setState({
          feed: data.items,
          feedDescription: data.feed,
          loading: false
        });
      });
  }

  filter = () => {
    let re = new RegExp(this.state.filter, "gi");
    return this.state.feed.filter(item => {
      return re.test(item.title) || re.test(item.content);
    });
  };

  paginate = () => {
    return this.filter().slice(0, this.state.limit);
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
      limit: 7
    });
  };

  render() {
    return (
      <div className="py-5">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Filter Feed"
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
          <small className="form-text text-muted">
            Filter the results based on your input
          </small>
        </div>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h2
              className="h3 mb-4 text-secondary feed-title"
              dangerouslySetInnerHTML={{
                __html:
                  this.state.feedDescription.title &&
                  this.state.feedDescription.title.replace(
                    /cnn/i,
                    match => `<span>${match}</span>`
                  )
              }}
            />
            <ul className="row list-inline">
              {this.paginate().map((item, i) => (
                <li
                  className={`list-inline-item col-12 mr-0 mb-2  ${
                    (i + 1) % 7 === 1 || (i + 1) % 7 === 0
                      ? "col-md-8"
                      : "col-md-4"
                  }`}
                  key={item.guid}
                >
                  <ArticleCard data={item} />
                </li>
              ))}
            </ul>

            {this.state.limit < this.state.feed.length && (
              <div className="load-more text-center">
                <a
                  href="/"
                  className="btn btn-outline-secondary custom-btn"
                  onClick={this.handleLoadMore}
                >
                  Load More
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
