import React from "react";

class Feed extends React.Component {
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
      <div>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <ul>
              {this.state.feed.map(item => (
                <div key={item.guid}>title: {item.title}</div>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Feed;
