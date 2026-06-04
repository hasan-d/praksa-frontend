function Card({ title, text }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;