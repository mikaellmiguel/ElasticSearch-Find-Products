require('dotenv').config();
const express = require('express');
const cors = require('cors');
const inicializarBD = require('./database/inicializarBD');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

inicializarBD();

app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
