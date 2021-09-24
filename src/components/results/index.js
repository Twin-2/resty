// import './_results.scss';
import ReactJson from 'react-json-view';

function Results(props) {

    return (
        <section className='resultsData'>
            {props.data ? <ReactJson src={props.data.headers} /> : null}
            {props.data ? <ReactJson src={props.data.body} /> : null}
        </section>
    )
}

export default Results;