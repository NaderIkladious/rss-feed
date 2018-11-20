import React from "react";

export class ResponsiveImage extends React.Component {
  state = {
    imageLoaded: false
  };
  handleLoad = () => {
    this.setState({
      imageLoaded: true
    });
  };
  render() {
    return (
      <div
        className={this.props.className}
        style={{ width: "100%", height: "100%" }}
      >
        <img
          onLoad={this.handleLoad}
          src={this.props.image ? this.props.image : ""}
          hidden
          alt=""
        />

        <div
          className={`responsive-image ${
            this.state.imageLoaded ? "" : "responsive-placeholder"
          }`}
          style={{
            backgroundImage: `url(${this.props.image ? this.props.image : ""})`,
            width: this.props.width,
            height: this.props.height
          }}
        />
      </div>
    );
  }
}

ResponsiveImage.defaultProps = {
  width: "100%",
  height: "100%",
  className: ""
};
