import './_form.scss';
import { useState } from 'react';

function Form(props) {

    const [method, setMethod] = useState('')
    const [url, setUrl] = useState('');

    const handleSetMethod = e => {
        e.preventDefault();
        setMethod(e.target.id)
    }

    const handleSetUrl = e => {
        e.preventDefault();
        setUrl(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setUrl(e.target.value)
        console.log('method', method)
        console.log('url', url)
        const formData = {
            method: method,
            url: url,
        };
        props.handleApiCall(formData);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="methods">
                    <span onClick={handleSetMethod} id="get">GET</span>
                    <span onClick={handleSetMethod} id="post">POST</span>
                    <span onClick={handleSetMethod} id="put">PUT</span>
                    <span onClick={handleSetMethod} id="delete">DELETE</span>
                </label>
                <label className="searchUrl">
                    <span>URL: </span>
                    <input onChange={handleSetUrl} name='url' type='text' />
                    <button type="submit">GO!</button>
                </label>
            </form>
        </>
    );
}

export default Form;