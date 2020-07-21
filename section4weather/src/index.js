import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';

class App extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {lat: null, errorMessage: ''};

    // }
    
    state = {lat: null, errorMessage: '' };

    componentDidMount(){

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setstate
                this.setState({ lat: position.coords.latitude})
            },
            (err) => {
                this.setState({ errorMessage: err.message})
            }
        );

    }

    componentDidUpdate(){
        console.log('My component was just updated - it rerendered!');
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner />
    }
    

    // React says we have to define render!! Only used for returning JSX
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector("#root"));