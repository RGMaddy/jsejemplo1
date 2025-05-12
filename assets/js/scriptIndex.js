let personas =[]
function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("error nombre")

    let eApellido = document.getElementById("apellido")
    let vApellido = eNombre.value
    let eErrorApellido = document.getElementById("error apellido")

    validarLargoMinimo(eNombre,vNombre,eErrorNombre)
    validarLargoMinimo(eApellido,vApellido,eErrorApellido)

}
function validarLargoMinimo(elemento,valor,eError){
    if(valor.length < 3 ){
        console.log("pocos caracteres")
        alert("debes ingresar mas de 3 caractres")
        eErrorNombre.innerText = "debes ingresar mas de 3 caracteres!"
        eNombre.style.backgroundColor="red"
        eNombre.style.color="white"
        return"falla"
    }else{
        console.log("todo bien")
        eErrorNombre.innerText=""
        eNombre.style.backgroundColor="green"
    }
}

function validarLargoMinimo(valor){

}
