import React from 'react';
import superagent from 'superagent';

import './app.scss';
import { useState, useEffect } from 'react'
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

    const [data, setData] = useState({});
    const [requestParams, setRequestParams] = useState({})
    const [history, setHistory] = useState([])

    useEffect(() => {
        callApi(requestParams)
    }, [requestParams])

    const callApi = async (requestParams) => {
        console.log(requestParams)
        try {
            await superagent[requestParams.method](requestParams.url)
                .then(data => setData(data))
        } catch (err) {
            setData('Bad request')
            console.log(err)
        }
    }

    const formSubmit = (formData) => {
        setRequestParams(formData)
        console.log('form data', formData)
    }

    return (
        <div className="">
            <Header />
            <Form formSubmit={formSubmit} />
            <div data-testid='method'>Request Method: {requestParams.method}</div>
            <div>URL: {requestParams.url}</div>
            <Results data={data} />
            <Footer />
        </div>
    );
}

export default App;