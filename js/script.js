function exibirNome() {
    // declaração de variavel
    var nome = document.getElementById("nome").value;
    var result = document.getElementById("result").innerHTML;

    // algoritmo
    // result = nome;
    document.getElementById("result").innerHTML = nome;
}