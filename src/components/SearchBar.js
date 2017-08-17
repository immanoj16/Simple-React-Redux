import React, { Component } from 'react'

class SearchBar extends Component {

  onInputChange(e) {

  }

  render () {
    return (
      <input type="text" onChange={(e) => console.log(e.target.value)}/>
    )
  }
}

export default SearchBar