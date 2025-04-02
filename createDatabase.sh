#!/bin/bash

# Criar índice de produtos
curl -X PUT "localhost:9200/produtos" -H "Content-Type: application/json" -d '{
  "settings": {
    "analysis": {
      "analyzer": {
        "meu_analisador": {
          "type": "standard",
          "stopwords": ["e", "ou", "de", "da", "do", "em", "um", "uma", "para"]
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "nome": { "type": "text", "analyzer": "meu_analisador" },
      "descricao": { "type": "text", "analyzer": "meu_analisador" },
      "categoria": { "type": "keyword" },
      "preco": { "type": "float" },
      "estoque": { "type": "integer" }
    }
  }
}'

# Inserir produtos
curl -X POST "localhost:9200/produtos/_doc" -H "Content-Type: application/json" -d '{
  "nome": "Smartphone Samsung Galaxy S23",
  "descricao": "Celular Android com câmera de alta resolução e bateria de longa duração.",
  "categoria": "Eletrônicos",
  "preco": 4999.99,
  "estoque": 10
}'

curl -X POST "localhost:9200/produtos/_doc" -H "Content-Type: application/json" -d '{
  "nome": "Notebook Dell Inspiron 15",
  "descricao": "Notebook potente para trabalho e estudos.",
  "categoria": "Informática",
  "preco": 3599.00,
  "estoque": 5
}'

curl -X POST "localhost:9200/produtos/_doc" -H "Content-Type: application/json" -d '{
  "nome": "Fone de Ouvido Bluetooth JBL",
  "descricao": "Áudio de alta qualidade e conexão sem fio.",
  "categoria": "Acessórios",
  "preco": 299.90,
  "estoque": 20
}'

# Buscar um produto pelo ID
curl -X GET "localhost:9200/produtos/_doc/1" -H "Content-Type: application/json"

# Buscar todos os produtos
curl -X GET "localhost:9200/produtos/_search" -H "Content-Type: application/json" -d '{
  "query": {
    "match_all": {}
  }
}'


# Atualizar um produto pelo ID
curl -X POST "localhost:9200/produtos/_update/1" -H "Content-Type: application/json" -d '{
  "doc": {
    "preco": 4799.99
  }
}'

# Deletar um produto pelo ID
curl -X DELETE "localhost:9200/produtos/_doc/1"
