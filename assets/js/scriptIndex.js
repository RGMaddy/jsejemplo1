let personas =[]
function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("error nombre")
    let eApellido = document.getElementById("apellido")
    let vApellido = eNombre.value
    let eErrorApellido = document.getElementById("error apellido")
    let fNombre= validarLargoMinimo(eNombre,vNombre,eErrorNombre)
    let fApellido= validarLargoMinimo(eApellido,vApellido,eErrorApellido)
    if(fNombre == "exito" && fApellido == "exito"){
        let p = {
            nombre:vNombre,
            apellido:vApellido
        }
        personas.push(p)
        console.log(personas)
        eNombre.value= ""
        eApellido.value= ""
        cargarDatos()
    }

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
        return "exito"
    }
}
function cargarDatos(){
    console.log("cargando...")
    let mapPersonas = personas.map((p, index)=>{
        return"<tr><td>"+p.nombre+
        "</td><td>"+p.apellido+
        "</td><td><button type='button' value'"+index+"'>Eliminar</button></td></tr>"
    })

    let tablaPersonas = document.getElementById("tablaPersonas")
    let strTablaPersonas = mapPersonas.join("")
    tablaPersonas.innerHTML =""
    console.log(mapPersonas)
}

