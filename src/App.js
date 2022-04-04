import { Component } from 'react';
import Searchbar from './searchbar.js';
import Gif from './gif.js';
import Giflist from './giflist.js';
import giphy from "giphy-api";

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
