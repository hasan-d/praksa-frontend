import { useState } from "react";

function DodajIgraca({onAdd}){
    const [ime, setIme] = useState("");
    const [pozicija, setPozicija] = useState("");
    const [broj, setBroj] = useState("");
    const [klub, setKlub] = useState("");
    const [opis, setOpis] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(!ime || !pozicija || !broj || !klub) return alert("Sva polja su obavezna!");
        onAdd({ime, pozicija, broj: parseInt(broj), klub, opis});
        setIme(""); setPozicija(""); setBroj(""); setKlub(""); setOpis("");
    }
    return (
        <form onSubmit={handleSubmit} className="row g-2 mb-4">
            <div className="col-md-2">
                <label htmlFor="ime" className="form-label">Ime</label>
                <input type="text" className="form-control" id="ime" value={ime} onChange={(e) => setIme(e.target.value)} />
            </div>
            <div className="col-md-2">
                <label htmlFor="pozicija" className="form-label">Pozicija</label>
                <input type="text" className="form-control" id="pozicija" value={pozicija} onChange={(e) => setPozicija(e.target.value)} />
            </div>
            <div className="col-md-2">
                <label htmlFor="broj" className="form-label">Broj</label>
                <input type="number" className="form-control" id="broj" value={broj} onChange={(e) => setBroj(e.target.value)} />
            </div>
            <div className="col-md-2">
                <label htmlFor="klub" className="form-label">Klub</label>
                <input type="text" className="form-control" id="klub" value={klub} onChange={(e) => setKlub(e.target.value)} />
            </div>
            <div className="col-md-3">
                <label htmlFor="opis" className="form-label">Opis</label>
                <textarea className="form-control" id="opis" value={opis} onChange={(e) => setOpis(e.target.value)} />
            </div>
            <div className="col-md-2">
                <button type="submit" className="btn btn-primary">Dodaj Igrača</button>
            </div>
        </form>
    );
}
export default DodajIgraca;