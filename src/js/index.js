const btn = document.getElementById('btn');
const numeroConselho = document.getElementById('numero');
const mensagem = document.getElementById('mensagem-motivacional');

async function buscarConselhosAleatorios(){
    const url = 'https://api.adviceslip.com/advice';
    const resposta = await fetch(url);
    return await resposta.json();
}

async function mostrarConselhoAleatorio(){
    const conselho = await buscarConselhosAleatorios();
    const Conselhojson = conselho.slip.id;
    numeroConselho.innerHTML = `#${Conselhojson}`;
    const mensagemJson = conselho.slip.advice;
    mensagem.innerHTML = `"${mensagemJson}"`;
}

mostrarConselhoAleatorio()


btn.addEventListener('click', () => {
    mostrarConselhoAleatorio();
})

