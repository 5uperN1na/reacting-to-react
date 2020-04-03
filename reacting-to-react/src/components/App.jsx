import React, { Component } from 'react';


/*
//basic App component
let App = (props) => {
    return <h1>Hello, Hello..., {props.name}!</h1>;
}
*/

//class based componenet
class App extends Component {
    constructor (props) {
        super(props);
        //initialize state
        //concatenate these strings in the same pair of JSX curly brace
        this.state = {text: 'Add some text here...', hasLoaded: false};
    }

    
    handleEvent = (text) => {
        this.setState({text})
    }
    

    handleClick = () => {
        this.setState({hasLoaded: !this.state.hasLoaded});
    }

    componentDisplayed = () => {
        this.setState({hasLoaded: true});
    }

    render() {

        if (this.state.hasLoaded === true) {
        return (
            
        <React.Fragment>
             <h1> Hello, {this.props.name}. {this.state.text}!</h1>
            <input 
                placeholder={this.state.text}
                value={this.state.text}
                onChange={ (event) => this.handleEvent(event.target.value)} />
                <button 
                    value={this.state.hasLoaded}
                    onClick={this.handleClick}>Refresh</button>
               
                </React.Fragment>
        );
        } else {
            return (
                <React.Fragment>
                <h1> Wait for it...</h1>
                   <button 
                   value={this.state.hasLoaded}
                   onClick={this.handleClick}>F5 Me!</button>
                  
                   </React.Fragment>
            )
        }
        
        
                
    
                
       
    }
    
}


export default App;