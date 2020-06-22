import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e474dbbbbf7bfb75fdbcb0b26392101e7686f331ee7&rid=giphy.gif`
   return (
      <img src={src} alt="" className="gif"
      onClick={this.handleClick}/>
    );
  }
}

export default Gif;
