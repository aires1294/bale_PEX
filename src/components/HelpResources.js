import React from "react";

function HelpResources() {
  const help = [
    {
      name: "CVV - Centro de Valorização da Vida",
      phone: "188",
      description: "Atendimento 24h para apoio emocional"
    },
    {
      name: "CAPS - Centro de Atenção Psicossocial",
      phone: "136",
      description: "Atendimento especializado em saúde mental"
    }
  ];

  return (
    <div id="ajuda" className="container mt-5">
      <h2 className="text-center mb-4">Recursos de Apoio</h2>
      <div className="row">
        {help.map((h, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="card help-card h-100">
              <div className="card-body">
                <h5 className="card-title">{h.name}</h5>
                <p>{h.description}</p>
                <p className="fw-bold">📞 {h.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelpResources;
