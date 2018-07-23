import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
// create a new component. This component should produce some HTML

//React: create and manage our components
//ReactDOM: render files

const API_KEY = 'AIzaSyCbjKBxzrOZyXC5ARs6ZPpCMEliOzStAqU'; //google API Key


//every variable like const is the final value to this variable, dont change anymore
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'manhuacu'}, videos => {
            this.setState({ videos });
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));