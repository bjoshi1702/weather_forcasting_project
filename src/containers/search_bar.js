import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this); // when text change below in input, it calls callback function onInputChange(), and when a callback function have this keyword, it will have incorrect context which will be some mystery context.
		// the above line indicates -> onInputChange() function - bind it to searchBar -> replace the current value with new one. - like overriding it with new one
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}


	onInputChange(event) {
		this.setState({ term: event.target.value }); // it is not an actual component here, so it will not have anything like State here. So, it will generate an error.
	}

	onFormSubmit(event) {
		event.preventDefault();
		//we need to go and fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}


	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
				placeholder="Get a five day forcast in your favortie cities"
				className="form-control"
				value={this.state.term}
				onChange={this.onInputChange} />
				
				<span className="input-group-btn">
				<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
			);
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
//to hook up the action creator - fetchWeather to our container
//whenever you have callback function, and if callback function is referencing this -> you have to bind it with context