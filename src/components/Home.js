import React from 'react';
import '../styles/Home.css';


const lanches = [
  {
    nome: "BIG PALMIRINHA",
    preco: "R$ 16,00",
    descricao: "Hambúrguer de costela, vinagrete, barbecue, molho especial e cheddar",
  },
  {
    nome: "BIG PARAISO",
    preco: "R$ 23,00",
    descricao: "Dois hambúrgueres de costela, vinagrete, barbecue, molho especial e cheddar",
  },
  {
    nome: "BIG PICANHA",
    preco: "R$ 18,00",
    descricao: "Bife de picanha, vinagrete, barbecue, molho especial",
  }, {
    nome: "LANCHE DE ESPETO",
    preco: "R$ 11,00",
    descricao: "Espeto da sua preferencia, vinagrete, barbecue, molho especial",
  },
  {
    nome: "LANCHE DE ESPETO DUPLO",
    preco: "R$ 17,00",
    descricao: "Dois espetos da sua preferencia, vinagrete, barbecue, molho especial",
  },
];

const espetos = [
  { nome: "CARNE", preco: "R$ 6,00" },
  { nome: "LINGUIÇA", preco: "R$ 6,00" },
  { nome: "MISTO", preco: "R$ 6,00" },
  { nome: "FRANGO", preco: "R$ 6,00" },
  { nome: "PÃO DE ALHO", preco: "R$ 6,00" },
];

const especiais = [
  { nome: "QUEIJO COALHO", preco: "R$ 8,00" },
  { nome: "TULIPA", preco: "R$ 8,00" },
  { nome: "MEDALHÃO DE FRANGO", preco: "R$ 8,00" },
  { nome: "CORAÇÃO", preco: "R$ 8,00" },
];

const bebidas = [
{ nome: "HEINEKEN LONG NECK", preco: "R$ 9,00" },
{ nome: "CORONA LONG NECK", preco: "R$ 9,00" },
{ nome: "BUDWEISER LONG NECK", preco: "R$ 9,00" },
{ nome: "SKOL 269ML", preco: "R$ 5,00" },
{ nome: "ORIGINAL 269ML", preco: "R$ 5,00" },
{ nome: "BUDWEISER 269ML", preco: "R$ 5,00" },
{ nome: "BRAHMA 269ML", preco: "R$ 5,00" },
{ nome: "REFRIGERANTE", preco: "R$ 6,00" },
{ nome: "ÁGUA", preco: "R$ 3,00" },
];


function Home() {
  return (
    <main className="home">
      <h2>Lanches</h2>
      <ul className="menu-list">
        {lanches.map((item, index) => (
          <li key={index}>
            <div className="item-info">
              <span className="item-nome">{item.nome}</span>
              <p className="item-descricao">{item.descricao}</p>
            </div>
            <span className="item-preco">{item.preco}</span>
          </li>
        ))}
      </ul>

      <h2>Espetos</h2>
      <ul className="menu-list">
        {espetos.map((item, index) => (
          <li key={index}>
            <span className="item-nome">{item.nome}</span>
            <span className="item-preco">{item.preco}</span>
          </li>
        ))}
      </ul>

      <h2>Especiais</h2>
      <ul className="menu-list">
        {especiais.map((item, index) => (
          <li key={index}>
            <span className="item-nome">{item.nome}</span>
            <span className="item-preco">{item.preco}</span>
          </li>
        ))}
      </ul>

      <h2>Bebidas</h2>
      <ul className="menu-list">
        {bebidas.map((item, index) => (
          <li key={index}>
            <span className="item-nome">{item.nome}</span>
            <span className="item-preco">{item.preco}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
