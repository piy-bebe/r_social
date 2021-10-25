function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Messages
              </a>
            </li>
          </ul>
          <span class="navbar-text">Communication with the whole world</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar