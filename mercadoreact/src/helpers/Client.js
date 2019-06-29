class Client {
/*
  getData(url){

    return fetch(url).then((data) => {
      //Capa 1: Convertir los datos...
      return data.json()
    }).then((json) => {
      //Capa 2: Usar los datos...
      return json
    })

  }
*/
  async getData(url){
    let data, objects = null

    if( !window.localStorage.getItem("_products") ){

      data = await fetch(url) //<-- Obtener el JSON
      objects = await data.json() //<-- Convertir a Object

      await window.localStorage.setItem("_products", JSON.stringify(objects) ) //<-- Guardar copia en LS

    } else {

      data = await window.localStorage.getItem("_products") //<-- Obtener el JSON
      objects = await JSON.parse( data ) //<-- Convertir a Object

    }
    return objects
  }

}
export default Client
