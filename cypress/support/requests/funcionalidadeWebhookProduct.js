Cypress.Commands.add("EnviaProduct", function () {
    cy.request({
        method: "POST",
            url: Cypress.env("urproduct") + "product",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: {
            "CorrelationId":"56072ac7-8603-42c7-9741-d809d5eefbd6",
            "Topic":null,
            "Key":null,
            "Bandeira":"CasasBahia",
            "Token":null,
            "TimeStamp":"2020-08-15T12:22:58.956-03:00",
            "Message":{
               "Content":"{\"Produtos\":[{\"Codigo\":56565,\"DisplayName\":\"Livro - Cole��o Guias Wallpaper ? Nova York: o Guia da Cidade\",\"DescricaoLonga\":\"O `Guia wallpaper` mostra o que h� de mais sofisticado em Nova York, com destaque para o design e a arquitetura local. Apresenta uma rela��o de tudo o que voc� precisa saber sobre a cidade. Quer sua viagem dure 48 horas, quer cinco dias, a trabalho ou em f�rias, o guia oferece uma sele��o dos melhores restaurantes, bares, hot�is, museus, academias e lojas. O guia traz, ainda, um roteiro para o viajante ficar sintonizado com as novidades e op��es de passeios pr�ximos da cidade.<br />\",\"IdCategoria\":660,\"CodigoFabricante\":1060,\"NomeFabricante\":\"Editora Publifolha\",\"FotoPequena\":4366443,\"FotoMedia\":4366449,\"FotoGrande\":70013369,\"PalavraChave\":\"Cole��o Guias Wallpaper ? Nova York: o Guia da Cidade, Wallpaper, 9788574028712, Editora Publifolha, 8574028711, restaurantes, bares, hot�is, museus, academias, lojas\",\"MaisVendidos\":0,\"Skus\":[{\"IdSku\":144970,\"UltimaModificacao\":\"2020-08-15T12:18:00.397\",\"Habilitado\":false,\"Modelo\":\".\",\"EAN\":\"9788574028712\",\"Imagens\":[{\"ImageMenor\":4366442,\"ImagemMaior\":4366448,\"ImagemZoom\":null,\"Ordem\":1,\"ImagemMedia\":null}],\"Ordem\":null,\"Peso\":245.0000,\"Altura\":2.0000,\"Largura\":15.0000,\"Comprimento\":20.0000,\"FlagAtiva\":true,\"IdLojista\":10037}],\"FichaTecnica\":{\"Grupos\":[{\"Itens\":[{\"Descricao\":\"Assunto\",\"Valor\":\"Viagens e Turismo\"},{\"Descricao\":\"Editora\",\"Valor\":\"Publifolha\"},{\"Descricao\":\"Edi��o\",\"Valor\":\"1�\"},{\"Descricao\":\"ISBN-13\",\"Valor\":\"9788574028712\"},{\"Descricao\":\"N�mero de P�ginas\",\"Valor\":\"128\"},{\"Descricao\":\"Origem\",\"Valor\":\"Nacional\"},{\"Descricao\":\"Idioma\",\"Valor\":\"Portugu�s\"},{\"Descricao\":\"Acabamento\",\"Valor\":\"Brochura\"},{\"Descricao\":\"Data de Lan�amento\",\"Valor\":\"2008\"},{\"Descricao\":\"Formato\",\"Valor\":\"Pequeno\"},{\"Descricao\":\"Medidas (cm)\",\"Valor\":\"16 x 10,7\"},{\"Descricao\":\"Cole��es e s�ries\",\"Valor\":\"Guias Wallpaper\"}],\"Codigo\":514,\"Nome\":\"Especifica��es T�cnicas\"},{\"Itens\":[{\"Descricao\":\"T�tulo\",\"Valor\":\"Nova York:\"},{\"Descricao\":\"Subt�tulo\",\"Valor\":\"o Guia da Cidade\"},{\"Descricao\":\"Autor\",\"Valor\":\"Wallpaper\"}],\"Codigo\":740,\"Nome\":\"Caracter�sticas\"}]},\"FotoZoom\":null,\"OrdemImagem\":0,\"PermaLink\":\"livro-colecao-guias-wallpaper-nova-york-o-guia-da-cidade-107752\",\"PermaLinkCategoria\":\"guias-e-mapas\",\"PermaLinkFabricante\":\"editora-publifolha\",\"NomeCategoria\":\"Guias e Mapas\",\"FlagAtiva\":false}]}"
            }
         },
        failOnStatusCode: false
    })
})