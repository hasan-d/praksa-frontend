import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import IgraciList from './components/IgraciList';
import Footer from './components/Footer';
import DodajIgraca from './components/DodajIgraca';
import DetaljiModal from './components/DetaljiModal';
import UrediOpisModal from './components/UrediOpisModal';
import Vrijeme from './components/Vrijeme';

function App() {
  const [igraci, setIgraci] = useState([
    { ime: "Edin Džeko", pozicija: "Napadač", broj: 11, godina: 1986, grad: "Sarajevo", klub: "Schalke 04", golovi: 73, nastupi: 148, opis: "Kapiten i rekorder po broju golova. Vodi BiH na drugo Svjetsko prvenstvo." },
    { ime: "Amir Hadžiahmetović", pozicija: "Defenzivni vezni", broj: 16, godina: 1997, grad: "Zenica", klub: "Hull City", golovi: 0, nastupi: 34, opis: "Tvrdi vezni igrač, pčelica u sredini terena." },
    { ime: "Tarik Muharemović", pozicija: "Štoper", broj: 4, godina: 2003, grad: "Sarajevo", klub: "Sassuolo", golovi: 1, nastupi: 12, opis: "Mlad i lud, igra u Serie A. Budućnost odbrane BiH." },
    { ime: "Esmir Bajraktarević", pozicija: "Desno krilo", broj: 20, godina: 2005, grad: "Milwaukee, SAD", klub: "PSV Eindhoven", golovi: 1, nastupi: 14, opis: "Rođen u Americi, izabrao BiH. Junak play-offa protiv Italije." },
    { ime: "Kerim Alajbegović", pozicija: "Lijevo krilo", broj: 19, godina: 2008, grad: "München", klub: "RB Salzburg", golovi: 1, nastupi: 8, opis: "Najmlađi u timu sa 18 godina. Wunderkind iz Salzburga." },
    { ime: "Amar Memić", pozicija: "Desni vezni", broj: 15, godina: 2001, grad: "Mostar", klub: "Viktoria Plzeň", golovi: 1, nastupi: 11, opis: "Nevjerovatan dribler, brz k'o munja." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterPozicija, setFilterPozicija] = useState("svi");
  const [detaljiIgrac, setDetaljiIgrac] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  
  const usluge = [
    { title: 'Izrada web stranica', text: 'Moderni responsive sajtovi.' },
    { title: 'Redizajn sajtova', text: 'Osavremenite vaš sajt.' },
    { title: 'Responsive dizajn', text: 'Prilagodba svim uređajima.' },
    { title: 'Optimizacija', text: 'Brže učitavanje stranice.' },
  ];

  const filtrirani = igraci.filter(igrac => {
    const matchIme = igrac.ime.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPozicija = filterPozicija === "svi" || igrac.pozicija.toLowerCase().includes(filterPozicija.toLowerCase());
    return matchIme && matchPozicija;
  });

  function prikaziDetalje(index) {
    setDetaljiIgrac(igraci[index]);
  }

  function obrisiIgraca(index) {
    setIgraci(prev => prev.filter((_, i) => i !== index));
  }

  function urediOpis(index, noviOpis) {
    setIgraci(prev => prev.map((igrac, i) =>
      i === index ? { ...igrac, opis: noviOpis } : igrac
    ));
  }

  function dodajIgraca(novi) {
  setIgraci(prev => [...prev, novi]);
  }

  return (
    <>
      <Header />
      <Hero />
      <section id="onama" className="container py-5">
        <h2>O nama</h2>
        <p>Bavimo se frontend i backend developmentom. Koristimo moderne tehnologije kao što su HTML, CSS, JavaScript i React.</p>
        <p>Naš cilj je da naučimo.</p>
      </section>
      <section id="usluge" className="container py-5">
        <h2>Naše usluge</h2>
        <div className="row mt-4">
          {usluge.map((u, i) => (
            <Card key={i} title={u.title} text={u.text} />
          ))}
        </div>
      </section>
      <section id="sportasi" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Reprezentacija BiH - 2026</h2>
           <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterPozicija={filterPozicija}
          onFilterChange={setFilterPozicija}
          prikazano={filtrirani.length}
          ukupno={igraci.length}
        />
           <DodajIgraca onAdd={dodajIgraca} />
          <IgraciList
            igraci={filtrirani}
            onDelete={obrisiIgraca}
            onEdit={urediOpis}
            onEditIndex={setEditIndex}
            onDetalji={prikaziDetalje}
          />
        </div>
        <Vrijeme />
      </section>
      <section id="kontakt" className="container py-5 text-center">
        <h2>Kontaktirajte nas</h2>
        <p>Email: hasandurakovic45@gmail.com | hasan.durakovic@edu.fit.ba</p>
      </section>
        <DetaljiModal igrac={detaljiIgrac} onClose={() => setDetaljiIgrac(null)} />
        {editIndex !== null && (
          <UrediOpisModal
            igrac={igraci[editIndex]}
            index={editIndex}
            onSave={(index, noviOpis) => { urediOpis(index, noviOpis); setEditIndex(null); }}
            onClose={() => setEditIndex(null)}
          />
        )}
      <Footer />
    </>
  );
}

export default App;