let resposta = document.getElementById('res')

function calcula_volume(){
    let altura = Number(document.getElementById('altura').value)
    console.log(altura)
    let larg = Number(document.getElementById('larg').value)
    console.log(larg)
    let comp = Number(document.getElementById('comp').value)
    console.log(comp)
     
    // Entrada de dados do teclado
    
    console.log("alt = " + altura + " larg = " + larg + " comp = " + comp)

    let vol = altura * larg * comp
    console.log("O volume do paralelepipedo é =" + vol + "m3")

    res.innerHTML = "O volume do paralelepipedo é = " + vol + "m3"

    res.style.fontSize = "1.25rem"
    res.style.fontWeight = "bold"


}