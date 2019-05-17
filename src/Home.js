import React, { Component } from 'react';

class Home extends Component {

	constructor() {
		super()

		this.state = {
            home: "home"
        }
    }
    
    render() {
        return (
            <div>
              <h1>{this.state.home}</h1>  
            </div>
        );
    }
}

export default Home;