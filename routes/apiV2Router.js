const express = require('express');
const apiV2Router = express.Router();
const knexconfig = require('../knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(knexconfig);

apiV2Router.get('/produtos', (req, res) => { 
  knex('produtos')
    .select('id', 'descricao', 'marca', 'valor')
    .then(dados => res.status(200).json(dados))
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: `Erro ao recuperar lista de produtos. Erro: ${error.message}`
      });
    });
});

apiV2Router.get('/produtos/:id', (req, res) => { 
  const id = req.params.id;
  knex('produtos')
    .select('id', 'descricao', 'marca', 'valor')
    .where({id})
    .then(dados => {
      if (dados.length == 0) {
        res.status(404).json(`Produto ${id} não encontrado.`);
      } else {
        res.status(200).json(dados[0]);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: `Erro ao recuperar lista de produtos. Erro: ${error.message}`
      });
    });
});

module.exports = apiV2Router;