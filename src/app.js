import React from 'react';
import superagent from 'superagent';

import './app.scss';
import { useState, useReducer, useEffect } from 'react'
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history'


const initialState = {
    data: {},
    requestParams: {},
    history: []
}

function appReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'SET_API_DATA':
            return { ...state, data: payload };
        case 'SET_REQUEST_PARAMS':
            return { ...state, requestParams: payload };
        case 'SET_HISTORY':
            return { ...state, history: [...state.history, payload] };
        default:
            return state
    }
}

function App() {

    const [state, dispatch] = useReducer(appReducer, initialState);

    const callApi = async () => {
        console.log(state.requestParams)
        try {
            await superagent[state.requestParams.method](state.requestParams.url)
                .then(data => {
                    let setData = {
                        type: 'SET_API_DATA',
                        payload: data
                    }
                    dispatch(setData)
                })
        } catch (err) {
            let action = {
                type: 'SET_API_DATA',
                payload: 'Bad request'
            }
            dispatch(action)
            console.log(err)
        }
    }

    const formSubmit = (formData) => {
        let action = {
            type: 'SET_REQUEST_PARAMS',
            payload: formData
        }
        dispatch(action)
    }

    const showHistory = (idx) => {
        console.log(history)
        let setData = {
            type: 'SET_API_DATA',
            payload: state.history[idx].data
        }
        dispatch(setData)
        let setRequestParams = {
            type: 'SET_REQUEST_PARAMS',
            payload: state.history[idx].requestParams
        }
        dispatch(setRequestParams)
    }

    useEffect(() => {
        let setHistory = {
            type: 'SET_HISTORY',
            payload: { requestParams: state.requestParams, data: state.data }
        }
        console.log('history', setHistory)
        state.requestParams?.method ? dispatch(setHistory) : null
    }, [state.data])

    useEffect(async () => {
        callApi()
    }, [state.requestParams])

    return (
        <>
            <Header />
            <Form formSubmit={formSubmit} />
            <div data-testid='method'>Request Method: {state.requestParams.method}</div>
            <div>URL: {state.requestParams.url}</div>
            <div className='displayBoxes'>
                <Results data={state.data} />
                <History data={state.history} showHistory={showHistory} />
            </div>
            <Footer />
        </>
    );
}

export default App;