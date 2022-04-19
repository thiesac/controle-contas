let listaReceita = [];
let listaDespesa = [];
let soma = 0;
let somaDespesa = 0;

//função que calcula a receita do usuário
function adicionarItem() {
    soma = 0;

    let valorDaReceita = document.getElementById("item").value
    
    if (valorDaReceita == "") {
        alert("Campo não preenchido!");
    } else {
        listaReceita.push(valorDaReceita);
        //soma valor
            for (let i = 0; i < listaReceita.length; i++) {
                soma += parseFloat(listaReceita[i]);
                //imprime valor na tela e limpa
                    document.getElementById("item").value = ""
                    document.getElementById("controleReceita").innerText = soma.toLocaleString("pt-BR")
            }
    }
}

//função que calcula as despesas
function removerItem() {
    somaDespesa = 0;

    let valorDaDespesa = document.getElementById("itemDespesa").value
    
    if (valorDaDespesa == "") {
        alert("Campo não preenchido!");
    } else {
        listaDespesa.push(valorDaDespesa);
//subtrai valor
            for (let i = 0; i < listaDespesa.length; i ++) {
                somaDespesa += parseFloat(listaDespesa[i]);
                //imprime valor na tela e limpa
                document.getElementById("itemDespesa").value = ""
                document.getElementById("controleDespesa").innerText = somaDespesa.toLocaleString("pt-BR")
            }
    }
}
//NÃO ESTÁ FUNCIONANDO!!!
//função que calcula o balanço final
function balancoFinal() {
    let balanco = (soma - somaDespesa);
    document.getElementById("balancoFinal").innerHTML = balanco
}


