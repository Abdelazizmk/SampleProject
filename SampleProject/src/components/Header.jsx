

function Header() {
    return (
        <header>
            <nav className="navbar bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">
                        <img src="./src/assets/react.svg" />
                        React Practice
                    </span>
                    <span className="navbar-text" style={{color: "white"}}>
                        Date: {new Date().toLocaleDateString('en-UK', { day: "2-digit", month: "2-digit", year: "numeric" })}
                    </span>
                </div>
            </nav>
        </header>
    )
}

export default Header