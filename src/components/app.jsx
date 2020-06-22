import React, { Component } from 'react';
import Searchbar from './searchbar';
import Gif from './gif';
import GiftList from './gift_list';
import giphy from 'giphy-api';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  search = (query) => {
    giphy("tyiZBuO7ODMNjDUVs15LWlST0KfWrj4y").search({
      q: query,
      rating: 'g'
      }, (err, res) => {
        this.setState({
          gifs: res.data
        })
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
        <Searchbar search={this.search}/>
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId}/>
        </div>
        </div>
        <div className="right-scene">
          <GiftList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
