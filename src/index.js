import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAPKx7ZLZHx2dWxJ2ypsV0ejvfkNQK_eSA';


// create a new component that should produce some HTML
const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
}

// take this component and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

