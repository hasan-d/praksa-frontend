import { useState } from 'react';

function Vrijeme() {
  const [podaci, setPodaci] = useState(null);
  const [loading, setLoading] = useState(false);

  const utakmice = [
    { grad: "Toronto", datum: "12. jun 2026", protivnik: "Qatar", stadion: "BMO Field", lat: "43.65", lon: "-79.38" },
    { grad: "Inglewood", datum: "18. jun 2026", protivnik: "Švicarska", stadion: "SoFi Stadium", lat: "33.94", lon: "-118.34" },
    { grad: "Seattle", datum: "24. jun 2026", protivnik: "Kanada", stadion: "Lumen Field", lat: "47.60", lon: "-122.33" }
  ];

  function osvjezi() {
    setLoading(true);
    Promise.all(utakmice.map(ut =>
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${ut.lat}&longitude=${ut.lon}&current=temperature_2m,wind_speed_10m`)
        .then(r => r.json())
        .then(data => ({ ...ut, temp: data.current.temperature_2m, vjetar: data.current.wind_speed_10m  }))
        .catch(() => ({ ...ut, temp: 'N/A', vjetar: 'N/A' }))
    )).then(rez => {
      setPodaci(rez);
      setLoading(false);
    });
  }

  return (
    <section id="vrijeme" className="py-5 bg-white">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Vrijeme</h2>
          <button className="btn btn-outline-primary" onClick={osvjezi} disabled={loading}>
            {loading ? 'Učitavanje...' : 'Osvježi'}
          </button>
        </div>
        <div className="row">
          {!podaci && !loading && (
            <p className="text-center text-muted">Klikni "Osvježi" za prikaz vremena</p>
          )}
          {loading && (
            <div className="col-12 text-center py-4">
              <div className="spinner-border text-primary"></div>
              <p className="mt-2">Učitavanje...</p>
            </div>
          )}
          {podaci && podaci.map((ut, i) => (
            <div key={i} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <h5 className="card-title">{ut.grad}</h5>
                  <h6 className="text-muted">{ut.stadion}</h6>
                  <p className="small">{ut.datum} · vs {ut.protivnik}</p>
                  <div className="display-4 fw-bold my-3">{ut.temp}°C</div>
                  <p className="text-muted small">Vjetar: {ut.vjetar} km/h</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vrijeme;