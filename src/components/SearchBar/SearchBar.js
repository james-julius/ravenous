import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
            initialized: 0}
 
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'}

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        } else {return ''}
    }
    
    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption})
        if (this.state.initialized) {this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)}
    }

    handleTermChange(event) {
        this.setState( {term: event.target.value} )
    }

    handleLocationChange(event) {
        this.setState( {location: event.target.value} )
    }

    handleSearch(event) {
        if (event.type === 'click' || event.keyCode === 13) {
            if (this.state.term && this.state.location && this.state.sortBy) {
                this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)
                event.preventDefault()
                // eslint-disable-next-line
                this.setState({initialized: (this.state.initialized += 1) })}
            else {alert("Please enter a valid search term")}
    }}

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this,sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
        });
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields" onKeyDown={this.handleSearch}>
                    <input placeholder="Search Restaurants" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a href="/#">Let's go</a>
                </div>
            </div>
        )};
}

export default SearchBar;