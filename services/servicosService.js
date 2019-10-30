var getServicos = function() {
    var servicos = [
      {
        id: 1,
        title: 'Correio Eletrônico',
        image: 'servico6.jgp',
        description: 'Correio Eletrônico',
        body: 'Este é um dos serviços mais antigos da Internet moderna. O mesmo facilitou durante décadas a interação entre os usuários de computadores de diferentes continentes, baseadas em mensagens de texto.'
      },
      {
        id: 2,
        title: 'FTP',
        image: 'servico2.jpg',
        description: 'FTP',
        body: 'FTP é a sigla para File Transfer Protocol, um termo que, traduzido para o português, significa Protocolo de Transferência de Arquivos.'
      },
      {
        id: 3,
        title: 'WWW',
        image: 'servico3.jpg',
        description: 'WWW',
        body: 'WWW é a sigla para World Wide Web, que em português significa: “Rede de alcance mundial”.'
      },
      {
        id: 4,
        title: 'Motores de Busca',
        image: 'servico4.jpg',
        description: 'Motores de Busca',
        body: 'É um programa feito para procurar palavras chave escritas pelos utilizadores em documentos ou em bases de dados. Na Internet, um motor de busca permite procurar palavras chave que estão em documentos na world wide web, como aqueles que se encontram em websites.'
      },
      {
        id: 5,
        title: 'Chat',
        image: 'servico5.jpg',
        description: 'Chat',
        body: 'Em português: conversação. É uma modernice para designar aplicações de conversação em tempo real.'
      },

    ]
  
    return servicos;
  }
  
  module.exports = {
    getServicos: getServicos
  }