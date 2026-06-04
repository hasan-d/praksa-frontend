import { useState } from 'react';

function Hero() {
  const [naslov, setNaslov] = useState('Dobrodošli na moju stranicu');

  return (
    <section id="hero" className="text-center py-5">
      <h1>{naslov}</h1>
      <p>Student na praksi @ IDK Studio</p>
      <button className="btn btn-primary" onClick={() => setNaslov('Novi naslov!')}>
        Promijeni naslov
      </button>
    </section>
  );
}

export default Hero;