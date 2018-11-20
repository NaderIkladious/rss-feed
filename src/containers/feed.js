import React from "react";

import { ArticleCard } from "../components";

export class Feed extends React.Component {
  state = {
    feed: [],
    feedDescription: {}
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

  render() {
    return (
      <div className="py-5">
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <ul className="row list-inline">
              {this.state.feed.map((item, i) => (
                <li
                  className={`list-inline-item col-12 mr-0 mb-2 px-1 ${
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
          </div>
        )}
      </div>
    );
  }
}
