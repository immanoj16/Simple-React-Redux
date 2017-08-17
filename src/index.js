import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const API_KEY = 'AIzaSyApv6QTaTn3a5ZallMxHecMhtPku9SbvGg'

class App extends Component {

  constructor (props) {
    super (props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards')
  }

  videoSearch (term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    return (
      <div className="container">
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <div className="row">
          <div className="col-md-7">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-md-5">
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
