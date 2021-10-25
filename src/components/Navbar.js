function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Messages
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            Communication with the whole world
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
