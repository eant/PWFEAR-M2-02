import React from 'react';

/* Importar módulos propios */
import Header from './components/Header'
import Menu from './components/Menu'
//import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      title : "MercadoReact",
      slogan : "Mucho más que JavaScript",
      //products : ["Música", "Deportes", "Electro", "Pesca", "Calzado Masculino"]
      products : [
        { nombre : "Guitarra Criolla", precio : 1200, stock : 300, categoria : "Música" },
        { nombre : "Paleta Ping Pong x 2", precio : 350, stock : 650, categoria : "Deportes" },
        { nombre : "Microondas", precio : 8600, stock : 100, categoria : "Electro" },
        { nombre : "Pelota Basket", precio : 960, stock : 225, categoria : "Deportes" }
      ]
    }
  }

  render(){
    return (
      /******* ACÁ VAN TODOS LOS COMPONENTES ********/
      <div className="App">
        <Header title={this.state.title} slogan={this.state.slogan} />
        <Menu links={this.state.products} />
      </div>
     /******* ACÁ AFUERA, NADA ********/
    )
  }

}

export default App;
