import '../styles/CardDisplay.css'

function CardDisplay({ duration }) {

    const dur = Number(duration) || 3

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="card mb-3 card-animated" style={{maxWidth: "18rem", animation: `colorChange ${dur}s ease-in-out infinite`}}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">This is a card</h5>
                    <p className="card-text">This is the content of the card.</p>
                </div>
            </div>
        </div>
    )
}

export default CardDisplay