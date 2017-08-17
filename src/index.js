import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/SearchBar'

const API_KEY = 'AIzaSyApv6QTaTn3a5ZallMxHecMhtPku9SbvGg'

YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
  console.log(data)
})

ReactDOM.render(
  <SearchBar/>,
  document.getElementById('app')
)
