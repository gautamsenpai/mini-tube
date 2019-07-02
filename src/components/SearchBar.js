import React from 'react';

class SearchBar extends React.Component {

    state = { term: "" };

    onInputChange = (event) => {
        this.setState({ term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.callBackToApp(this.state.term);
        // make callback from parent component here
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}    
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;