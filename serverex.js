require('dotenv').config();
const express = require ('express')
const morgan = require('morgan')
const app = express ()
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(morgan('common'));

app.use('/site', express.static('public'))

app.set('view engine', 'ejs');

app.set('views', './views');

app.get ('/', (req, res)  => {
    res.send (`Hello to API World<br>
        <a href="/api/produtos">API de Produtos</a>`)
})

const apiV1Router = require('./routes/apiV1Router');
app.use('/api/v1', apiV1Router);

const apiV2Router = require('./routes/apiV2Router');
app.use('/api/v2', apiV2Router);

app.use ((req, res) => {
    res.status(404).send (`<h2>Erro 404 - Recurso não encontrado</h2>`)
})

app.listen (port, () => {
    console.log (`Servidor rodando na porta ${port}`);
});
