function leerJson () {
    const fs= require('fs');
    const tarea = fs.readFileSync ("tareas.json", "utf8")
    return tareaConvertida = JSON.parse(tarea)  
} 

function guardarJson(json) {
    const fs= require('fs');
    jsonNuevo = JSON.stringify(json)
    fs.writeFileSync("tareas.json",jsonNuevo) 
}

function escribirJson(tareaNueva) {
    tareas = leerJson()
    tareas.push({titulo:tareaNueva,estado:"en proceso"})
    guardarJson(tareas)  
}

function filtrarPorEstado (estado) {
    json = leerJson()
    jsonFiltarado = json.filter((json) => json.estado == estado  )
    return jsonFiltarado
}


function borrarUltimo() {
    tareas = leerJson()
    console.log("Se borro:" ,tareas.pop())
    guardarJson(tareas)
}

function main() {
    
    switch(process.argv [2]) {
        case "filtrar":
            estado = process.argv [3]
            console.log(filtrarPorEstado(estado))
            break

        case "borrar":
            borrarUltimo()
            break

        case "crear":
            escribirJson(process.argv [3])
            break

        case "listar":
            tareaConvertida = leerJson ()
            tareaConvertida.forEach(valores => console.log(valores));
            break

        default :
            console.log("No entiendo que quieres hacer")
            break

        case undefined:
            console.log("Atención - Tienes que pasar una acción.")
            break
}}



module.exports ={
main,
filtrarPorEstado,
leerJson,
guardarJson,
borrarUltimo,
escribirJson,
}