

function CardControls({ duration, setDuration }) {

    return (
        <>
            <div className="card text-bg-primary mb-3 d-flex justify-content-center align-items-center">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">Card Color adjuster</h5>
                    <p className="card-text">Adjust the duration that the card above changes colors</p>
                    <span className="d-flex flex justify-content-center align-items-center">
                        <button className="btn btn-light" onClick={() => setDuration(duration - 1)}>-</button>
                        <input type="text" className="w-50" min="1" max="10" value={duration} />
                        <button className="btn btn-light" onClick={() => setDuration(duration + 1)}>+</button>
                    </span>
                </div>
            </div>
        </>
    )
}

export default CardControls