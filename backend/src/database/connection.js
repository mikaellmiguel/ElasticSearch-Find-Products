require('dotenv').config();
const {Client} = require('@elastic/elasticsearch');
const path = require('path');


const cliente = new Client({
        node: process.env.DB_NODE || "http://localhost:9200",
        auth: {
            username: process.env.DB_USER || "elastic",
            password: process.env.DB_PASSWORD || "password"
        }
});

// Testa a conexão
async function testConnection() {
    try {
        const health = await cliente.cluster.health();
        console.log("Conectado ao Elasticsearch:", health.cluster_name);
    } catch (error) {
        console.error('Erro ao conectar ao Elasticsearch:', error);
    }
}

testConnection();

module.exports = cliente;