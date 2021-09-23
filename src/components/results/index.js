// import './_results.scss';
import ReactJson from 'react-json-view';

function Results(props) {

    return (
        <section>
            <pre>{props.data ? <ReactJson src={props.data.body} /> : null}</pre>
        </section>
    )
}

export default Results;