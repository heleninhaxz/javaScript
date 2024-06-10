let resposta = document.getElementById('res')

function calc_vol_cilindro(){
    let altura = Number(document.getElementById('altura').value)
    console.log(altura)
    let raio = Number(document.getElementById('raio').value)
    console.log(raio)
   
     
    // Entrada de dados do teclado
    
    console.log("alt = " + altura + " raio = " + raio)

    let vol = (Math.PI) * raio * raio * altura
    console.log("O volume do cilindro é = " + vol + "m3")

    res.innerHTML = "O volume do cilindro é = " + vol.toFixed(2) + "m3"

    res.style.fontSize = "1.25rem"
    res.style.fontWeight = "bold"

}