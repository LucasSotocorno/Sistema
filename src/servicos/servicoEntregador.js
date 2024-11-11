const urlBase = "https://backend-lp-2-2-bim.vercel.app/entregadores";

export async function gravarEntregador(entregador) {
    const resposta = await fetch(urlBase, {
        'method': "POST",
        'headers': {
            'Content-Type': "application/json"
        },
        'body': JSON.stringify(entregador)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function alterarEntregador(entregador) {
    const resposta = await fetch(urlBase, {
        'method': "PUT",
        'headers': {
            'Content-Type': "application/json"
        },
        'body': JSON.stringify(entregador)
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function excluirEntregador(entregador) {
    const resposta = await fetch(urlBase + "/" + entregador.codigo, {
        'method': "DELETE",
    });
    const resultado = await resposta.json();
    return resultado;
}

export async function consultarEntregador() {
    const resposta = await fetch(urlBase, {
        'method': "GET"
    });
    const resultado = await resposta.json();
    return resultado;
}