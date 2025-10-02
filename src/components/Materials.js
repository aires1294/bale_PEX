import React from "react";
import CardMaterial from "./CardMaterial";

import bale from "../assets/images/bale.jpeg";
import atividade from "../assets/images/atfisica.jpeg";
import saude from "../assets/images/saude.png";

function Materials() {
  const materials = [
    {
      id: 1,
      title: "Ballet e Bem-Estar",
      description: "Os benefícios da dança clássica para a saúde física e mental.",
      type: "Ballet",
      image: bale,
      downloads: 130
    },
    {
      id: 2,
      title: "Atividade Física para Todos",
      description: "Identifique as melhores práticas e exercícios para você.",
      type: "Exercício",
      image: atividade,
      downloads: 85
    },
    {
      id: 3,
      title: "Dicas de Saúde",
      description: "Conteúdo informativo para melhorar seu bem-estar geral.",
      type: "Saúde",
      image: saude,
      downloads: 203
    }
  ];

  return (
    <div id="materiais" className="container mt-5">
      <h2 className="text-center mb-4">Materiais em Destaque</h2>
      <div className="row">
        {materials.map((m) => (
          <CardMaterial key={m.id} {...m} />
        ))}
      </div>
    </div>
  );
}

export default Materials;
