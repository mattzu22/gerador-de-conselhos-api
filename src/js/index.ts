
const btn = document.getElementById('btn') as HTMLButtonElement;
const numberId = document.getElementById('numero') as HTMLSpanElement;
const message = document.getElementById('mensagem-motivacional') as HTMLParagraphElement;

interface AdviceResponse {
    advice: string;
    id: number;
}

async function buscarConselhosAleatorios(): Promise<AdviceResponse> {
    try {
        const url: string = 'https://api.adviceslip.com/advice';
        const resposta: Response = await fetch(url);
        const json: { slip: AdviceResponse } = await resposta.json();
        const { id, advice }: AdviceResponse = json.slip;

        return { id, advice }
    } catch (error) {
        console.log(error);
    };
}

async function mostrarConselhoAleatorio(): Promise<void> {
    const response: AdviceResponse = await buscarConselhosAleatorios();

    numberId.innerHTML = `#${response.id}`;

    message.innerHTML = `"${response.advice}"`;
}

mostrarConselhoAleatorio()

btn.addEventListener('click', () => {
    mostrarConselhoAleatorio();
})

