let Hola = class Hola extends React.Component {

  render(){
    //React.createElement(ETIQUETA, ATRIBUTOS, CONTENIDO, PROPIEDADES DEL OBJETO)
    return React.createElement(
      "div", //<-- Etiqueta
      { style : { color : 'red', fontFamily : 'Arial' } }, //<-- Atributos
      "Hola ", //<-- Contenido estatico
      this.props.nombre //<-- Contenido dinamico (Propiedades del Objeto)
    )
  }

}
let Imagen = class Imagen extends React.Component {
  render(){

      return React.createElement("img", { src : this.props.url, alt : this.props.name }, null)

  }
}
///////////////////////////////////////
//ReactDOM.render(COMPONENTE, AREA)
ReactDOM.render(
  //React.createElement(Hola, { nombre : "Luna" }),
  React.createElement(Imagen, { url : "https://lorempixel.com/100/100/animals", name : "Imagen al azar de animales" }),
  document.querySelector("#app")
)
