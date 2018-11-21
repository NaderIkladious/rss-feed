import React from "react";

import { ArticleCard, FilterBar, Loading } from "../components";
import { rssFeedProviders, ProvidersLinkMap } from "../core/consts";

import "../styles/containers/feed.css";

export class Feed extends React.Component {
  state = {
    rssProvider: "CNN",
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
    this.fetchFeed();
  }

  fetchFeed = () => {
    let apiKey = "9kkelzp3jtff1mq9hxw4oxf3aq4iw2i1fj38tf1a";
    let rssAPI = `https://api.rss2json.com/v1/api.json?rss_url=${
      ProvidersLinkMap[this.state.rssProvider]
    }&api_key=${apiKey}&count=100`;
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
  };

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

  handleChangeProvider = (e, provider) => {
    e.preventDefault();
    this.setState(
      {
        rssProvider: provider
      },
      () => {
        this.fetchFeed();
      }
    );
  };

  render() {
    return (
      <div className="py-5">
        <ul className="list-inline">
          {rssFeedProviders.map((provider, idx) => (
            <li className="list-inline-item" key={idx}>
              <a
                href={ProvidersLinkMap[provider]}
                onClick={e => this.handleChangeProvider(e, provider)}
                className={`btn btn-outline-primary ${
                  this.state.rssProvider === provider ? "active" : ""
                }`}
              >
                {provider}
              </a>
            </li>
          ))}
        </ul>
        <FilterBar
          value={this.state.filter}
          count={this.filter().length}
          handleChange={this.handleFilterChange}
        />
        {this.state.loading ? (
          <Loading />
        ) : (
          <div>
            <h2
              className="h3 mb-4 text-secondary feed-title"
              dangerouslySetInnerHTML={{
                __html:
                  this.state.feedDescription.title &&
                  this.state.feedDescription.title.replace(
                    new RegExp(this.state.rssProvider, "i"),
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
