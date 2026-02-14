import { useDuration } from '../context/DurationContext'

function CardControls() {
  const { duration, setDuration, min, max } = useDuration()

  return (
    <div className="card text-bg-primary mb-3 d-flex justify-content-center align-items-center">
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 className="card-title">Card Color adjuster</h5>
        <p className="card-text">Adjust the duration that the card above changes colors</p>
        <span className="d-flex flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => setDuration(duration - 1)}
            disabled={duration <= min}
            aria-label="Decrease duration"
          >
            -
          </button>
          <input
            type="number"
            className="w-50"
            min={min}
            max={max}
            value={duration}
            readOnly
            aria-label="Duration in seconds"
          />
          <button
            type="button"
            className="btn btn-light"
            onClick={() => setDuration(duration + 1)}
            disabled={duration >= max}
            aria-label="Increase duration"
          >
            +
          </button>
        </span>
      </div>
    </div>
  )
}

export default CardControls