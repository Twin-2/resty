

function History(props) {

    return (
        <section className="historyData">
            {props.data.map((request, idx) => {
                return <div key={idx} onClick={() => props.showHistory(idx)}>
                    <span>{request.requestParams.method.toUpperCase()}</span>
                    <span>{request.requestParams.url}</span>
                </div>
            })}
        </section>
    )

}

export default History