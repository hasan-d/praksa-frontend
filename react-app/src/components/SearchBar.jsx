function SearchBar({ searchTerm, onSearchChange, filterPozicija, onFilterChange, prikazano,ukupno }) {
    return (
         <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="row g-2 align-items-end">
          <div className="col-md-5">
            <label className="form-label fw-semibold small text-muted mb-1">Pretraži po imenu</label>
            <input
              type="text"
              className="form-control"
              placeholder="Upiši ime igrača..."
              value={searchTerm}
              onChange={e => onSearchChange(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label fw-semibold small text-muted mb-1">Filtriraj po poziciji</label>
            <select
              className="form-select"
              value={filterPozicija}
              onChange={e => onFilterChange(e.target.value)}
            >
              <option value="svi">Sve pozicije</option>
              <option value="Napadač">Napadač</option>
              <option value="Vezni">Vezni</option>
              <option value="Branič">Branič</option>
              <option value="Golman">Golman</option>
            </select>
          </div>
          <div className="col-md-3">
            <span className="badge bg-secondary fs-6 d-block py-2 text-center">
              Prikazano {prikazano} od {ukupno}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;