function DetaljiModal({ igrac, onClose }) {
  if (!igrac) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{igrac.ime}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <p><strong>Pozicija:</strong> {igrac.pozicija}</p>
              <p><strong>Broj:</strong> {igrac.broj}</p>
              <p><strong>Klub:</strong> {igrac.klub}</p>
              <p><strong>Nastupi:</strong> {igrac.nastupi || '/'}</p>
              <p><strong>Golovi:</strong> {igrac.golovi || 0}</p>
              <p>{igrac.opis}</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>Zatvori</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetaljiModal;