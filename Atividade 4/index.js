import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Necessário por causa do "type": "module"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lista de filmes
const filmes = [
  {
    id: 1,
    titulo: "Interestelar",
    genero: "Ficção Científica",
    ano: 2014
  },
  {
    id: 2,
    titulo: "Vingadores: Ultimato",
    genero: "Ação",
    ano: 2019
  },
  {
    id: 3,
    titulo: "A Origem",
    genero: "Ficção Científica",
    ano: 2010
  }
];


// ====================
// PÁGINAS HTML
// ====================
app.use(express.static("style"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Paginas", "index.html"));
});

app.get("/filmes", (req, res) => {
  res.sendFile(path.join(__dirname, "Paginas", "filmes.html"));
});

app.get("/contato", (req, res) => {
  res.sendFile(path.join(__dirname, "Paginas", "contato.html"));
});


// ====================
// API
// ====================

// Retorna todos os filmes
app.get("/api/filmes", (req, res) => {
  res.json(filmes);
});


// ====================
// BÔNUS
// ====================

// Retorna um filme específico
app.get("/api/filmes/:id", (req, res) => {
  const id = Number(req.params.id);

  const filme = filmes.find(f => f.id === id);

  if (!filme) {
    return res.json({
      mensagem: "Filme não encontrado."
    });
  }

  res.json(filme);
});


// Pesquisa usando query string
app.get("/api/pesquisa", (req, res) => {
  const termo = req.query.nome;

  const resultado = filmes.filter(f =>
    f.titulo.toLowerCase().includes(
      termo.toLowerCase()
    )
  );

  res.json(resultado);
});


// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});