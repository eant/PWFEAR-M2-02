let hola = class Hola extends React.Component {

  render(){
    //React.createElement(ETIQUETA, ATRIBUTOS, CONTENIDO, PROPIEDADES DEL OBJETO)
    let etiqueta = React.createElement("div", null, "Hola ", this.props.nombre)
    return etiqueta
  }

}
///////////////////////////////////////
//ReactDOM.render(COMPONENTE, AREA)
let app = document.querySelector("#app")
let saludo = React.createElement(hola, { nombre : "Marte" })

ReactDOM.render(saludo, app)
