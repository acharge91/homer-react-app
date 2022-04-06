import { Component } from 'react';
import giphy from "giphy-api";

import Searchbar from './components/searchbar.js';
import Gif from './components/gif.js';
import Giflist from './components/giflist.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  selectGif = (id) => {
    this.setState ({
      selectedGifId: id
    });
  }

  search = (query) => {
    giphy("DG0Ai1t48EkVUU22NKRkOSTRZ6jDtyqH").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }
  render () {

    return (
      <div>
        <div className='left-scene'>
          <Searchbar search={this.search} />
          <div className='selected-gif'>
            <Gif id={ this.state.selectedGifId }/>
            { this.state.selectedGifId ? (
               null) : (
                <h2 className='select'>
                Click your favourite Gif to select it!
                </h2>
            )}

          </div>
        </div>
        <div className='right-scene'>
          <Giflist gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    )
  }
}

export default App;
