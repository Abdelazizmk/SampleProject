import Header from './components/Header'
import CardDisplay from './components/CardDisplay'
import CardControls from './components/CardControls'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

  const [duration, setDuration] = useState(3)

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center bg-dark">
          <CardDisplay duration={duration} />
          <CardControls duration={duration} setDuration={setDuration} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
