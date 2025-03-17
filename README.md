## Como rodar o código em ambiente de desenvolvimento

1. **Clone o repositório:**
    ```sh
    git clone https://github.com/mikaellmiguel/ElasticSearch-Find-Products
    cd ElasticSearch-Find-Products
    ```

2. **Navegue para as pastas frontend e backend:**
    ```sh
    cd frontend
    cd backend
    ```

3. **Instale as dependências:**
    Dependendo do gerenciador de pacotes utilizado no projeto, execute um dos comandos abaixo:
    ```sh
    npm install
    ```
    ou
    ```sh
    yarn install
    ```

4. **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias. Consulte o arquivo `.env.example` para obter uma lista das variáveis esperadas.

5. **Inicie o servidor de desenvolvimento:**
    Execute o comando abaixo para iniciar o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```
    ou
    ```sh
    yarn dev
    ```