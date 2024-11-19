import '../style.css';

const Navbar = () => {
    return(
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase">
            <div className="container-fluid">
              <h1 className="navbar-brand">John Doe</h1>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active text-decoration-underline fw-semibold" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/mentions">Mentions légales</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </header>
    )
}

export default Navbar;