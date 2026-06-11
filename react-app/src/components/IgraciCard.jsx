function IgraciCard({igrac, index, onDelete, onEdit, onDetalji, onEditIndex}) { 
    return(
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                    <h5 className="card-title">{igrac.ime}</h5>
                    <p className="card-text text-muted">
                        {igrac.pozicija} | Broj {igrac.broj}
                    </p>
                    <p className="card-text mt-2"><small>{igrac.opis}</small></p>
                    <span className="badge bg-primary">{igrac.klub}</span>
                    <div className="mt-3 d-flex gap-2 justify-content-center">
                        <button className="btn btn-sm btn-outline-danger" onClick={()=>onDelete(index)}>Obrisi</button>
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => onEditIndex(index)}>Uredi opis</button>
                        <button className="btn btn-sm btn-outline-info" onClick={() => onDetalji(index)}>
                            Detalji
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default IgraciCard;