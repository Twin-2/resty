// import './_form.scss';
import { useState } from 'react';

function Form(props) {

    const [method, setMethod] = useState('')
    const [url, setUrl] = useState('');
    const [body, setBody] = useState('');

    const handleSetMethod = e => {
        e.preventDefault();
        setMethod(e.target.id)
    }

    const handleSetBody = e => {
        e.preventDefault();
        setBody(e.target.value)
    }

    const handleSetUrl = e => {
        e.preventDefault();
        setUrl(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        // console.log('method', method)
        // console.log('url', url)
        const formData = {
            method: method,
            url: url,
            body: body,
        };
        props.formSubmit(formData);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label className="searchUrl">
                    <span>URL: </span>
                    <input onChange={handleSetUrl} name='url' type='text' />
                    <button type="submit">GO!</button>
                </label>
                <label className="methods">
                    <button onClick={handleSetMethod} id="get">GET</button>
                    <button onClick={handleSetMethod} id="post">POST</button>
                    <button onClick={handleSetMethod} id="put">PUT</button>
                    <button onClick={handleSetMethod} id="delete">DELETE</button>
                </label>
                <label>
                    <span>BODY </span>
                    <input onChange={handleSetBody} placeholder="JSON object" type="text" name="body"></input>
                </label>
            </form>
        </>
    );
}

export default Form;