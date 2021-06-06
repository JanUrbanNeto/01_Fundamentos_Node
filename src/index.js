const { request, response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (request,response) => {
  return response.json({ message: "Hello Ignite - Fundamentos Nodejs!"});
});

app.get("/courses", (request,response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request,response) => {
  //const body = request.body
  const { name, age } = request.body;
  console.log(name);
  console.log(age);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request,response) => {
  //const params = request.params
  const { id } = request.params;
  console.log(id);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request,response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request,response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 4"]);
});

app.listen(3333);


/*
TIPOS DE PARÂMETROS
route params -> identificar um recurso para editar deletar ou buscar, vem na rota como um id, ex.: rota/:id
query params -> usado para paginação, filtro - na rota vem depois do "?", separador "&", ex.: rota?page=1&order=asc
body params -> por onde são passados os objetos de inserção / alteração, ex.: JSON
*/