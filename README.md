# GOD OF WAR 

Esse é um projeto desenvolvido para informar sobre os três jogos principais da franquia God of War.
<a>https://godofwarweb.netlify.app/</a>

## 🚀 Começando:

O site é simples, você pode navegar pelas páginas sem nenhuma dificuldade e clicar nas imagens e palavras para aparecer vídeos e textos sobre o assunto

## ⚙️ Executando os testes:

Na página 'História Principal da Trilogia' você pode clicar nos títulos dos jogos para entender do que se trata cada jogo da trilogia.
Na página 'Gameplay' você pode clicar nas imagens representando cada jogo e ser redirecionado para um vídeo de uma parte do jogo que você escolher.

## 📦 Desenvolvimento:

Eu comecei desenvolvendo a página inicial aplicando o código HTML e juntamente desenvolvendo o CSS, assim também para as outras páginas, porém deixei os links de vídeos e imagens por último para facilitar o desenvolvimento de estilo do site.

## 🛠️ Construído com:

Editor de Código Visual Studio Code - Vscode

## Códigos utilizados e explicados
### Tags HTML:
### Páginas HTML:
1 = index.html 2 = história.html 3 = gameplay.html

!DOCTYPE html: esta é uma declaração do tipo de documento (DOCTYPE) e indica ao navegador que o documento é um documento HTML5. É uma parte essencial do documento HTML e deve ser a primeira linha. (presente nas páginas: 1, 2 e 3)

html lang="pt-BR": aqui é identificado o idioma preponderante da página adicionando o atributo 'lang' na tag 'html'.(presente nas páginas: 1, 2 e 3)

head: head é um elemento que contém informações sobre o documento que não são mostradas na tela.(presente nas páginas: 1, 2 e 3)

body: body é um elemento que contém tudo o que é exibido como parte de uma página de um site.(presente nas páginas: 1, 2 e 3)

meta charset="UTF-8": essa tag serve para que os navegadores saibam como devem renderizar os textos incluídos em uma página específica.(presente nas páginas: 1, 2 e 3)

meta name="viewport" content="width=device-width, initial-scale=1.0": fornece ao navegador instruções sobre como controlar o dimensionamento da página quando acessada de diferentes tamanhos de dispositivos.(presente nas páginas: 1, 2 e 3)

title: usado para inserir um título em um documento.(presente nas páginas: 1, 2 e 3)

h1: coloca um texto para possuir um maior destaque, uma fonte maior, e geralmente ele é o elemento de texto mais visível na página de um site.(presente nas páginas: 2 e 3)

h2: destinados a textos que são subtítulos.(presente nas páginas: 1 e 2)

h3: informam o assunto da página para os mecanismos de busca.(presente nas páginas: 1 e 3)

link: especifica as relações entre o documento atual e um recurso externo.(presente nas páginas: 1, 2 e 3)

href: indica a relação entre diferentes páginas para os mecanismos de pesquisa.(presente nas páginas: 1, 2 e 3)

rel: diz qual é a função do arquivo que você está importando.(presente nas páginas: 1, 2 e 3)

script: reúne instruções para que o PC execute tarefas e pode ser utilizado para programar infinitas funções.(presente na página: 2)

class: é uma lista das classes de um elemento, separada por espaços que podem permitir o CSS e o Javascript selecionar e acessar elementos específicos.(presente nas páginas: 1, 2 e 3)

a: com o atributo href cria-se um hiperligação nas páginas web, arquivos, endereços de emails, ligações na mesma página ou endereços na URL.(presente nas páginas: 1 e 3)

div: é utilizada para agrupar e delimitar conteúdos e para isso esses conteúdos devem ser declarados entre a tag de início e a tag de fechamento.(presente nas páginas: 1, 2 e 3)

style: contém informações de estilo para um documento ou uma parte de um documento.(presente nas páginas: 1 e 2)

img: representa a inserção de uma imagem no documento.(presente nas páginas: 1 e 3)

src: é o caminho para um arquivo ou recurso externo que você deseja vincular ao seu documento HTML.(presente nas páginas: 1 e 3)

alt: é utilizado para descrever o conteúdo de uma imagem.(presente nas páginas: 1 e 3)

height: determina a altura da área de determinado conteúdo de um elemento.(presente na página: 1)

width: determina a largura da área de determinado conteúdo de um elemento.(presente na página: 1)

br: produz uma quebra de linha em um texto.(presente na página: 1)

footer: representa o rodapé da página ou da seção.(presente nas páginas: 1, 2 e 3)

b: coloca um texto em formato negrito.(presente nas páginas: 1, 2 e 3)

ID: define um identificador exclusivo que deve ser único por todo o documento.(presente na página: 2)

p: representa um parágrafo, em mídias visuais, parágrafos são representados como blocos indentados de texto com a primeira letra avançada e separados por linhas em branco.(presente na página: 2)

span: é um elemento que possui a finalidade de agrupar um conteúdo textual e até mesmo apresentar um conteúdo visual.(presente na página: 2)

iframe: O 'iframe' é uma tag usada para inserir uma página HTML em outra.(presente na página: 3)


# Códigos utilizados e explicados
## Códigos CSS

## style.css:

Asterisco(*): o asterisco é o seletor universal, no qual representa que todos os elementos do site serão afetados de acordo com as definições de estilo ali colocadas.

a: dentro do css, a tag HTML 'a' tem as definições de estilo para alterar a sua fonte(font-family), colocar uma decoração no texto(text-decoration), colocar uma cor no texto(color), mudar o cursor do mouse(cursor), alterar o seu espaço ao redor(justify-content), organizar os elementos da página dentro de containers de forma dinâmica(display) e ter uma cor de fundo quando o cursor estiver na palavra(hover e background-color).

header: a tag 'header' está definida para ter uma cor de fundo(background), alterar a largura e altura(width e height), ter uma posição no site(position), estar no topo do site(top), alinhar os itens igualmente(align-items), alterar o seu espaço ao seu redor(justify-content) e organizar os elementos da página dentro de containers de forma dinâmica(display).

imagem-topo-direita: essa classe detém das definições de uma posicão no site para uma imagem(position), estar no topo e na direita do site(top e right)e ter uma margem(margin).

body: o corpo do site tem as definições de alteração de tamanho em largura e altura(width e height), ter uma imagem de fundo com tamanho definido(background-image e background-size), não repetir a imagem do fundo ao rolar a página(background-repeat) e esconder a barra de rolagem horizontal(overflow-x).

texto1 e texto2: ambas as classes tem as definições de terem uma margem(margin).

conceito e estúdio: a classe 'conceito' e a classe 'estúdio', tem definições para ter um alinhamento de texto(text-align), colocar uma decoração no texto(text-decoration), ter uma cor de fundo(background-color), colocar uma cor no texto(color) e uma margem(margin).

sobre e sobre2: todas as duas classes tem definidas a elas uma cor de fundo(background-color) e uma margem(margin).

container: a classe 'container' possui uma definição de organizar os elementos da página dentro de containers de forma dinâmica(display) e alteração de tamanho em largura(width).

esquerda: essa classe atribui uma definição de cor de fundo(background-color) e de tamanho em largura(width).

direita: a classe 'direita' possui as definições de ter uma cor de fundo(background-color), alteração de tamanho em largura e altura(width e height), ter um tamanho de elemento definido(background-size), ter um alinhamento de texto(text-align), alterar o seu espaço ao seu redor(justify-content) e alinhar os itens igualmente(align-items).

footer: essa tag HTML, está definida para ter uma cor de fundo(background-color), uma cor para o texto(color), uma a distância entre o conteúdo de um elemento e suas bordas(padding) e um alinhamento de texto(text-align).








## ✒️ Autores

Leonardo Cassio dos Santos

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢
* Convide alguém da equipe para uma cerveja amanteigada 🍺 
* Obrigado publicamente 🤓.
* etc.
