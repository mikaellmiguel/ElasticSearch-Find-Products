export interface Product {
  _id: string;
  _source: {
    nome: string;
    descricao: string;
    categoria: string;
    preco: number;
    estoque: number;
  };
}

export interface ProductInput {
  nome: string;
  descricao: string;
  categoria: string;
  preco: number;
  estoque: number;
}