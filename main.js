'use stritc'

const clientes = [
{
    nome: "Giselle",
    imagem: "gisel.jpg",
    ultimaMensagem: "Gostaria de realizar o paga...",
    contato: "Pedro",
    tempo: "Há 30 minutos",
    lidas: "2",
    social: "instagram.png"
},

{
    nome: "Karina",
    imagem: "karina.jpg",
    ultimaMensagem: "Ainda está disponi...",
    contato: "João",
    tempo: "Há 2 minutos",
    lidas: "1",
    social: "bate-papo.png"

},

{
    nome: "NingNing",
    imagem: "ning.jpg",
    ultimaMensagem: "Adorei o produto!!",
    contato: "Lua",
    tempo: "Há 6 minutos",
    lidas: "3",
    social: "whatsapp.png"
},

{
    nome: "Winter",
    imagem: "winter.jpg",
    ultimaMensagem: "Quero o meu dinheiro de...",
    contato: "Luiz",
    tempo: "Há 5 minutos",
    lidas: "8",
    social: "whatsapp.png"
}
    
]

const criarItem = (clientes) => {
    const imagem = document.createElement('img')
    imagem.src = `./img/${clientes.imagem}`
    imagem.alt = clientes.name
    imagem.classList.add('primeiro')

    const social= document.createElement('img')
    social.src = `./img/${clientes.social}`
    social.alt = clientes.name
    social.classList.add('social')

    const nome = document.createElement('h1')
    nome.textContent = clientes.nome
    nome.classList.add('nome')
    
    const lidas = document.createElement('h2')
    lidas.textContent = clientes.lidas
    lidas.classList.add('nao_lidas')

    const ultimaMensagem = document.createElement('p')
    ultimaMensagem.textContent = clientes.ultimaMensagem
    ultimaMensagem.classList.add('mensagem_down')

    const contato = document.createElement('div')
    contato.textContent = Informacoes.contato
    contato.classList.add('atendente')

    const tempo = document.createElement('div')
    tempo.textContent = Informacoes.tempo
    tempo.classList.add('status')
}