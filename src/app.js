import React from 'react';
import superagent from 'superagent';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            requestParams: {},
            history: []
        };
    }

    callApi = (requestParams) => {
        this.setState({ requestParams });
        try {
            superagent[requestParams.method](requestParams.url)
                .then(data => this.setState({ data: data }))
        } catch (err) {
            this.setState({ data: err })
            console.log(err)
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Form handleApiCall={this.callApi} />
                <div data-testid='method'>Request Method: {this.state.requestParams.method}</div>
                <div>URL: {this.state.requestParams.url}</div>
                <Results data={this.state.data} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;