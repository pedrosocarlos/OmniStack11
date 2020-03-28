const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Tipos de métodos:
 * GET: buscar/listar informações
 * POST: criar informação
 * PUT: alterar informação 
 * DELETE: deletarinformação
*/

/**
 * Tipos de parametros:
 * Querry: nomeados enviados na rota após "?"
 * Route: utilizado para identificar recursos
 * Request body: corpo da requisição
 */

app.listen(3333);

