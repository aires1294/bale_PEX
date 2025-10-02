import React from "react";

function CardMaterial({ image, title, description, type, downloads }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 material-card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <div className="mt-auto">
            <span className="badge bg-primary mb-2">{type}</span>
            <p className="text-muted small">{downloads} downloads</p>
            <button className="btn btn-success w-100">
              ⬇️ Baixar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMaterial;
