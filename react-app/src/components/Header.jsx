function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Moj Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#hero">Početna</a></li>
            <li className="nav-item"><a className="nav-link" href="#onama">O nama</a></li>
            <li className="nav-item"><a className="nav-link" href="#usluge">Usluge</a></li>
            <li className="nav-item"><a className="nav-link" href="#kontakt">Kontakt</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;