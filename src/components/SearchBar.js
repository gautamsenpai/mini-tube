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
            <div className="search-bar ui segment" style={{ marginTop: '15px' }}>
                <div className="ui grid">
                     <div className="ui row">
                         <div className="four wide column">
                            <img alt="minitube logo" src="minitube.jpg"/>
                         </div>
                         <div className="twelve wide column">
                            <form onSubmit={this.onFormSubmit} className="ui form">
                                <div className="field">
                                    <label>Search</label>
                                    <input 
                                        type="text" 
                                        value={this.state.term}
                                        onChange={this.onInputChange}
                                        placeholder="Search..."    
                                        style={{backgroundColor: 'rgb(242, 242, 242)'}}
                                    />
                                </div>
                             </form>
                         </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;