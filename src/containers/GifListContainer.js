import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch"

const URL =
  "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC";


class GifListContainer extends React.Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    this.fetchApi(URL);
  }

  fetchApi = (newString) => {
    fetch(newString)
      .then(res => res.json())
      .then(json => {
        let firstThreeGifs = json.data.slice(0, 3);
        let urls = firstThreeGifs.map(
          gif => gif.images.original.url.split("?")[0]
        );
        this.setState({
          gifs: [...urls]
        });
      });
  };

  querySearch = (event) => {
    this.fetchApi("http://api.giphy.com/v1/gifs/search?q=" + event +"&api_key=dc6zaTOxFJmzC")
  }

  render() {
    return (
      <div>
        <GifSearch data={this.state.gifs} querySearch={this.querySearch}/>
        <GifList data={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
