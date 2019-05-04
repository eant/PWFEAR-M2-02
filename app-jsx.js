let Hola =  class Hola extends React.Component {

  render(){
      return <div>Hola {this.props.nombre}!!!</div>
  }

}

ReactDOM.render(
  <Hola nombre="JSX" />,
  document.querySelector("#app")
)
