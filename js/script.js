const numero = document.querySelector ("#numero_usuario")
const btn_tabuada = document.querySelector ("#btn_tabuada")
const resultado = document.querySelector ("#res")

function descobrir_tabuada(){
    const numero_convertido = Number (numero.value)
    resultado.innerHTML = `
    <p>${numero_convertido} x 1 = ${numero_convertido * 1}</p>
    <p>${numero_convertido} x 1 = ${numero_convertido * 2}</p>
    <p>${numero_convertido} x 1 = ${numero_convertido * 3}</p>
    <p>${numero_convertido} x 1 = ${numero_convertido * 4}</p>
    <p>${numero_convertido} x 1 = ${numero_convertido * 5}</p>
    <p>${numero_convertido} x 1 = ${numero_convertido * 6}</p>
    <p>${numero_convertido} x 1 = ${numero_convertido * 7}</p>
    <p>${numero_convertido} x 1 = ${numero_convertido * 8}</p>
    <p>${numero_convertido} x 1 = ${numero_convertido * 9}</p>
    <p>${numero_convertido} x 1 = ${numero_convertido * 10 }</p>`
}
btn_tabuada.addEventListener ("click",descobrir_tabuada)
