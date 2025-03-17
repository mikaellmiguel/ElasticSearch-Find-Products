const cliente = require('./connection');

async function insertProdutos() {
    try {
        const produtos = [
            {"nome": "Smartwatch Garmin Forerunner 945", "descricao": "Relógio inteligente com GPS, monitoramento de saúde e resistência à água.", "categoria": "Acessórios", "preco": 349.99, "estoque": 50},
            {"nome": "Mouse Gamer Logitech G502", "descricao": "Mouse gamer com 11 botões programáveis e sensor de alta precisão.", "categoria": "Acessórios", "preco": 299.99, "estoque": 100},
            {"nome": "Monitor Dell 24' Full HD", "descricao": "Monitor de 24 polegadas com resolução Full HD e tecnologia antirreflexo.", "categoria": "Informática", "preco": 899.99, "estoque": 30},
            {"nome": "Teclado Mecânico Corsair K70 RGB", "descricao": "Teclado mecânico com switches Cherry MX, iluminação RGB e design robusto.", "categoria": "Informática", "preco": 799.00, "estoque": 40},
            {"nome": "Smartphone iPhone 14 Pro Max", "descricao": "Celular Apple com câmera de 48 MP, chip A16 Bionic e tela Super Retina XDR.", "categoria": "Eletrônicos", "preco": 9999.99, "estoque": 15},
            {"nome": "Televisão Samsung 55' 4K", "descricao": "TV 4K Ultra HD de 55 polegadas com suporte a HDR10+ e controle remoto inteligente.", "categoria": "Eletrônicos", "preco": 2799.00, "estoque": 25},
            {"nome": "Câmera Canon EOS 90D", "descricao": "Câmera DSLR com 32,5 MP, vídeo 4K e conectividade Wi-Fi.", "categoria": "Eletrônicos", "preco": 7499.00, "estoque": 10},
            {"nome": "Fone de Ouvido Sony WH-1000XM5", "descricao": "Fones de ouvido com cancelamento de ruído ativo, som de alta qualidade e bateria de longa duração.", "categoria": "Acessórios", "preco": 1699.00, "estoque": 60},
            {"nome": "Smartphone Samsung Galaxy Z Flip 4", "descricao": "Smartphone dobrável com tela AMOLED de 6,7' e câmeras duplas.", "categoria": "Eletrônicos", "preco": 8499.00, "estoque": 12},
            {"nome": "Notebook Lenovo ThinkPad X1 Carbon", "descricao": "Ultrabook com processador i7, 16GB de RAM e 512GB SSD, ideal para produtividade.", "categoria": "Informática", "preco": 8999.99, "estoque": 5},
            {"nome": "Câmera GoPro Hero 10 Black", "descricao": "Câmera de ação com gravação em 5.3K, à prova d'água e estabilização de imagem.", "categoria": "Eletrônicos", "preco": 4499.00, "estoque": 20},
            {"nome": "Fone de Ouvido Bose QuietComfort 45", "descricao": "Fones de ouvido com cancelamento de ruído ativo, som de alta qualidade e conforto prolongado.", "categoria": "Acessórios", "preco": 1299.00, "estoque": 30},
            {"nome": "Geladeira Brastemp 500L", "descricao": "Geladeira de 500 litros, com sistema de descongelamento automático e design moderno.", "categoria": "Eletrodomésticos", "preco": 2999.00, "estoque": 10},
            {"nome": "Impressora HP LaserJet Pro MFP", "descricao": "Impressora multifuncional a laser, com capacidade de impressão de até 30 páginas por minuto.", "categoria": "Informática", "preco": 1599.00, "estoque": 18},
            {"nome": "Smartphone Xiaomi Redmi Note 11", "descricao": "Celular com tela AMOLED de 6.43', câmera quad de 50 MP e bateria de 5000 mAh.", "categoria": "Eletrônicos", "preco": 1799.00, "estoque": 40},
            {"nome": "Micro-ondas Panasonic 32L", "descricao": "Micro-ondas com capacidade de 32 litros, tecnologia de descongelamento rápido e 1000W de potência.", "categoria": "Eletrodomésticos", "preco": 799.99, "estoque": 15},
            {"nome": "Cafeteira Expresso Nespresso", "descricao": "Cafeteira expresso com cápsulas, 19 bar de pressão e design compacto.", "categoria": "Eletrodomésticos", "preco": 1299.00, "estoque": 25},
            {"nome": "Cadeira Gamer DXRacer", "descricao": "Cadeira ergonômica para gamers, com ajuste de altura e apoio lombar, ideal para longas sessões de jogo.", "categoria": "Acessórios", "preco": 2299.00, "estoque": 12},
            {"nome": "MacBook Air M2", "descricao": "Notebook Apple com chip M2, 8GB de RAM e 256GB SSD, perfeito para tarefas diárias e produtividade.", "categoria": "Informática", "preco": 10999.00, "estoque": 8},
            {"nome": "Console PlayStation 5", "descricao": "Console de última geração com gráficos 4K, controle sem fio e exclusivos de jogos.", "categoria": "Eletrônicos", "preco": 4999.00, "estoque": 50},
            {"nome": "Tablet Samsung Galaxy Tab S8", "descricao": "Tablet de 11' com processador Snapdragon, 128GB de armazenamento e tela LCD de alta resolução.", "categoria": "Eletrônicos", "preco": 3799.00, "estoque": 30},
            {"nome": "Jogo de Panelas Tramontina 5 Peças", "descricao": "Jogo de panelas de alumínio com revestimento antiaderente e design sofisticado.", "categoria": "Eletrodomésticos", "preco": 299.00, "estoque": 100},
            {"nome": "Caixa de Som JBL Flip 5", "descricao": "Caixa de som Bluetooth resistente à água, com 12 horas de reprodução contínua.", "categoria": "Acessórios", "preco": 699.00, "estoque": 80},
            {"nome": "Máquina de Lavar Brastemp 12Kg", "descricao": "Máquina de lavar roupas com 12kg de capacidade e 12 programas de lavagem.", "categoria": "Eletrodomésticos", "preco": 2299.00, "estoque": 20},
            {"nome": "Fone de Ouvido Skullcandy Crusher Evo", "descricao": "Fones com som potente e graves ajustáveis, tecnologia de cancelamento de ruído.", "categoria": "Acessórios", "preco": 1199.00, "estoque": 40},
            {"nome": "Câmera Digital Nikon D3500", "descricao": "Câmera DSLR com 24.2 MP e gravação em Full HD, ideal para iniciantes.", "categoria": "Eletrônicos", "preco": 2499.00, "estoque": 20},
            {"nome": "Carregador Wireless Anker 10W", "descricao": "Carregador sem fio de 10W para smartphones com suporte a Qi.", "categoria": "Acessórios", "preco": 169.00, "estoque": 150},
            {"nome": "TV LG 65' OLED 4K", "descricao": "TV OLED 4K de 65 polegadas com suporte a Dolby Vision e som superior.", "categoria": "Eletrônicos", "preco": 13999.00, "estoque": 5},
            {"nome": "Notebook Asus VivoBook 15", "descricao": "Notebook com processador Intel Core i5, 8GB de RAM e 512GB SSD.", "categoria": "Informática", "preco": 3199.00, "estoque": 25},
            {"nome": "Smartphone Motorola Moto G100", "descricao": "Celular com processador Snapdragon 870, tela 6.7' e câmera de 64 MP.", "categoria": "Eletrônicos", "preco": 2599.00, "estoque": 18},
            {"nome": "Projetor Epson Home Cinema 2150", "descricao": "Projetor Full HD para cinema em casa, com brilho de 2500 lumens e conectividade sem fio.", "categoria": "Eletrônicos", "preco": 3299.00, "estoque": 10},
            {"nome": "Teclado Logitech G Pro X", "descricao": "Teclado mecânico para gamers com switches substituíveis e iluminação RGB.", "categoria": "Informática", "preco": 799.00, "estoque": 50},
            {"nome": "Notebook HP Pavilion 14", "descricao": "Notebook com processador Intel Core i7, 16GB de RAM e 1TB de HD.", "categoria": "Informática", "preco": 4799.00, "estoque": 12},
            {"nome": "Câmera de Segurança Arlo Pro 4", "descricao": "Câmera de segurança sem fio com resolução 2K, visão noturna e áudio bidirecional.", "categoria": "Eletrônicos", "preco": 1999.00, "estoque": 20},
            {"nome": "Ventilador Arno Turbo Silence Maxx", "descricao": "Ventilador com 3 velocidades, design compacto e alto poder de ventilação.", "categoria": "Eletrodomésticos", "preco": 199.99, "estoque": 60},
            {"nome": "Liquidificador Philips Walita 1000W", "descricao": "Liquidificador com 1000W de potência e 5 velocidades para preparo rápido de sucos e vitaminas.", "categoria": "Eletrodomésticos", "preco": 299.00, "estoque": 100},
            {"nome": "Máquina de Café Expresso Oster Prima Latte", "descricao": "Máquina de café expresso e cappuccino com sistema de preparação rápida e fácil.", "categoria": "Eletrodomésticos", "preco": 899.00, "estoque": 15},
            {"nome": "Pendente LED Luz Dimerizável", "descricao": "Pendente de teto com lâmpada LED, regulagem de intensidade e design moderno.", "categoria": "Eletrodomésticos", "preco": 349.00, "estoque": 30},
            {"nome": "Console Xbox Series X", "descricao": "Console de videogame com gráficos 4K, desempenho ultrarrápido e compatibilidade com jogos antigos.", "categoria": "Eletrônicos", "preco": 4999.00, "estoque": 40},
            {"nome": "Smartphone OnePlus 9 Pro", "descricao": "Celular com tela AMOLED de 6.7', câmera Hasselblad de 48 MP e Snapdragon 888.", "categoria": "Eletrônicos", "preco": 5899.00, "estoque": 12},
            {"nome": "Cafeteira Expresso Dolce Gusto Mini Me", "descricao": "Cafeteira expresso com sistema de cápsulas e design compacto.", "categoria": "Eletrodomésticos", "preco": 399.00, "estoque": 50},
            {"nome": "Ferro de Passar Roupas Philips Azur", "descricao": "Ferro a vapor com tecnologia de alta emissão de vapor e base de cerâmica.", "categoria": "Eletrodomésticos", "preco": 249.00, "estoque": 70},
            {"nome": "HD Externo Seagate 2TB", "descricao": "HD externo de 2TB com USB 3.0, ideal para backup de dados e transferências rápidas.", "categoria": "Informática", "preco": 399.00, "estoque": 120},
            {"nome": "Câmera de Segurança Ring Video Doorbell 4", "descricao": "Campainha com vídeo e áudio bidirecional, visão noturna e integração com smartphone.", "categoria": "Eletrônicos", "preco": 1199.00, "estoque": 25},
            {"nome": "Monitor Acer Predator 27' 4K", "descricao": "Monitor 4K de 27' com taxa de atualização de 144Hz e suporte a G-Sync.", "categoria": "Informática", "preco": 4999.00, "estoque": 8}
        ];

        const {count} = await cliente.count({ index: 'produtos' });

        if (count === 0) {
            for (const produto of produtos) {
            await cliente.index({
                index: 'produtos',
                body: produto
            });
            }
        } else {
            console.log('O índice "produtos" já está preenchido.');
        }
    }
    catch (err) {
        console.error('Erro ao inserir produtos:', err);
    }
}

module.exports = insertProdutos;