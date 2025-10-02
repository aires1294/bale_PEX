import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container">
        <h1 className="display-4">Promoção da Saúde e Bem-Estar</h1>
        <p className="lead">
          Acesse materiais educativos e encontre recursos de apoio confiáveis
          sobre prática de atividade física, dança e vida saudável.
        </p>
        <div>
          <a href="#materiais" className="btn btn-success btn-lg">
            📘 Materiais Educativos
          </a>
          <a href="#ajuda" className="btn btn-outline-light btn-lg">
            ❤️ Recursos de Apoio
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

