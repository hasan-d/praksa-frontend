import { useState } from "react";

function UrediOpisModal({ igrac, index, onSave, onClose }) {
  const [opis, setOpis] = useState(igrac.opis);

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Uredi opis '{igrac.ime}'</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <textarea
                className="form-control"
                rows="4"
                value={opis}
                onChange={(e) => setOpis(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>Odustani</button>
              <button className="btn btn-primary" onClick={() => onSave(index, opis)}>Sačuvaj</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UrediOpisModal;
