import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component {

    state = { videos: [] };

    onTermSubmit = async (term) => {
        const reponse = await youtube.get("/search", {
            params: { 
                q: term,
                part: "snippet",
                maxResults: 5,
                key: "AIzaSyAibyGpltDKnNn8Mi4eyszLpfq_DDKnGSw" 
            }
        });

        this.setState({videos: reponse.data.items});
        console.log(this.state.videos);
    }

    render(){
        return (
        <div className="ui container">
            <SearchBar sendToApp={this.onTermSubmit}/>
            <VideoList videos={this.state.videos}/>
        </div>
        );
    }
}

export default App;