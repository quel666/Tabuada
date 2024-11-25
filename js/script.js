
/* var inicial = 0
while(inicial <=0){
    alert(inicial)
    
    inicial++ 
    }
    */
   
   /* var inicial = 0
   do {
    alert(inicial)
    inicial++
    
    } while (inicial <= 10) */
    
const numero = document.querySelector ("#numero_usuario")
const btn_tabuada = document.querySelector ("#btn_tabuada")
const resultado = document.querySelector ("#res") 

function resultado_calculo (){
    resultado.innerHTML = ``

    var numero_convertido = Number(numero.value)

    var inicial = 1 
    while(inicial <= 10){

        resultado.innerHTML += `<p> ${numero_convertido} x ${inicial} = ${numero_convertido * inicial} </p>`

        inicial++

    }
}

btn_tabuada.addEventListener ("click",resultado_calculo)
    