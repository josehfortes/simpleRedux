import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
// create a new component. This component should produce some HTML

//React: create and manage our components
//ReactDOM: render files

//api key: AIzaSyCbjKBxzrOZyXC5ARs6ZPpCMEliOzStAqU

const API_KEY = 'AIzaSyCbjKBxzrOZyXC5ARs6ZPpCMEliOzStAqU'; //google API Key


//every variable like const is the final value to this variable, dont change anymore
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));