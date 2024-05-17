function calcular() {
    let gasolina = Number(document.getElementById("gasolina").value);
    let alcool = Number(document.getElementById("alcool").value);
    let calcular = document.getElementById("resultado");
    let valor = (alcool / gasolina)

    if (valor > 0.7) { calcular.innerHTML = "Colocar Gasolina" }
    if (valor < 0.7) { calcular.innerHTML = "Colocar Alcool" }
    if (valor == 0.7) { calcular.innerHTML = "Colocar Alcool" }

}