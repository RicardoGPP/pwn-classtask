const express = require('express');
const apiV1Router = express.Router();

// monte um array de produtos com campos de id, nome, marca, descrição, preço e quantidade em estoque. Seja criativo nos itens desse array, apresentando produtos reais em um número de 10 a 15 itens
let produtos = [
    {
      "id": 1,
      "nome": "Smartphone Galaxy S22",
      "marca": "Samsung",
      "descrição": "Última geração de smartphone com 5G e câmera de 108 MP.",
      "preço": 1199.99,
      "quantidade_em_estoque": 35
    },
    {
      "id": 2,
      "nome": "Notebook Gamer VX5",
      "marca": "Asus",
      "descrição": "Notebook com placa de vídeo dedicada e processador de alta velocidade para jogos.",
      "preço": 2500.00,
      "quantidade_em_estoque": 20
    },
    {
      "id": 3,
      "nome": "Tênis Runner High",
      "marca": "Nike",
      "descrição": "Tênis para corrida com tecnologia de amortecimento e suporte para longas distâncias.",
      "preço": 130.00,
      "quantidade_em_estoque": 50
    },
    {
      "id": 4,
      "nome": "Cafeteira Express Pro",
      "marca": "Oster",
      "descrição": "Cafeteira expresso com controle de temperatura e pressão.",
      "preço": 299.90,
      "quantidade_em_estoque": 15
    },
    {
      "id": 5,
      "nome": "Smart TV 4K 50''",
      "marca": "LG",
      "descrição": "Televisão inteligente com resolução 4K, HDR e conectividade inteligente.",
      "preço": 4500.00,
      "quantidade_em_estoque": 25
    },
    {
      "id": 6,
      "nome": "Console PlayStation 5",
      "marca": "Sony",
      "descrição": "Console de última geração com SSD ultra-rápido e gráficos em 4K.",
      "preço": 5000.00,
      "quantidade_em_estoque": 10
    },
    {
      "id": 7,
      "nome": "Perfume Elegance",
      "marca": "Chanel",
      "descrição": "Perfume com aroma floral para uma sensação de frescor duradouro.",
      "preço": 350.00,
      "quantidade_em_estoque": 40
    },
    {
      "id": 8,
      "nome": "Câmera Mirrorless Alpha",
      "marca": "Sony",
      "descrição": "Câmera profissional com lentes intercambiáveis e alta resolução.",
      "preço": 3200.00,
      "quantidade_em_estoque": 15
    },
    {
      "id": 9,
      "nome": "Headphone Noise Cancelling",
      "marca": "Bose",
      "descrição": "Fones de ouvido com cancelamento de ruído ativo e som de alta fidelidade.",
      "preço": 599.99,
      "quantidade_em_estoque": 30
    },
    {
      "id": 10,
      "nome": "Drone Explorer X2",
      "marca": "DJI",
      "descrição": "Drone com câmera 4K e estabilização de imagem para gravação aérea.",
      "preço": 1500.00,
      "quantidade_em_estoque": 12
    },
    {
      "id": 11,
      "nome": "Kit de Ferramentas Master 200",
      "marca": "Tramontina",
      "descrição": "Kit completo com ferramentas variadas para reparos e manutenção doméstica.",
      "preço": 250.00,
      "quantidade_em_estoque": 50
    },
    {
      "id": 12,
      "nome": "Tablet ProTab 11",
      "marca": "Apple",
      "descrição": "Tablet com processador rápido e tela de retina para profissionais criativos.",
      "preço": 850.00,
      "quantidade_em_estoque": 20
    }
]

apiV1Router.get ('/produtos', (req, res) => { 
    let sort = req.query.sort
    if (sort) {
        produtosOrdenados = produtos.sort ((a, b) => a[sort].localeCompare (b[sort]))
        res.status(200).json (produtosOrdenados)
    }
    else
        res.status(200).json (produtos)
})

apiV1Router.get ('/produtos/:id', (req, res) => {
    let id = parseInt (req.params.id)
    let produto = produtos.find (p => p.id === id)
    res.status(200).json (produto)
})

// apiV1Router.get('/produtos/:id', (req, res) => {
//   let id = parseInt(req.params.id);

//   let produto = produtos.find(p => p.id == id);

//   if (produto) {
//     res.render('index', {
//       ...produto
//     });
//   } else {
//     res.status(404).send('Produto não encontrado');
//   }
// });

apiV1Router.post('/produtos', (req, res) => {
  let id = Math.max(...produtos.map(p => p.id)) + 1;
  
  let produto = {
    id,
    ...req.body
  };

  produtos.push(produto);

  res.status(201).json(produto);
})

module.exports = apiV1Router;