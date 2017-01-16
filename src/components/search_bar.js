import React from 'react';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state =  { term : "" };
}

  render () {
    return (
      <div className="search-bar">
        <SearchIcon />
        <TextField
         id="search"
         value={this.state.term}
         onChange={event => this.onInputChange(event.target.value)} placeholder="Search Videos"/>
     </div>
    );
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar;
