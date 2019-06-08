import React from 'react';

/* Importar módulos propios */
import Header from './components/Header'
import Menu from './components/Menu'
import Product from './components/Product'

/* Importar recursos propios */
//import './App.css';
import productos from './productos.json'

class App extends React.Component {

  constructor(){
    super()

    console.log( productos )

    this.state = {
      title : "Mercado React v1.1",
      slogan : "Mucho más que JavaScript",
      //products : ["Música", "Deportes", "Electro", "Pesca", "Calzado Masculino"]
      /*
      products : [
        { nombre : "Guitarra Criolla", precio : 1200, stock : 300, categoria : "Música" },
        { nombre : "Paleta Ping Pong x 2", precio : 350, stock : 650, categoria : "Deportes" },
        { nombre : "Microondas", precio : 8600, stock : 100, categoria : "Electro" },
        { nombre : "Pelota Basket", precio : 960, stock : 225, categoria : "Deportes" },
        { nombre : "Marcadores Color", precio : 80, stock : 400, categoria : "Librería" }
      ]
      */
      products : productos
    }
  }

  render(){
    /* Aca se pueden programar cosas que desemboquen en el return */
    const losProductos = this.state.products.map(
      (product, index) => <Product item={product} key={index} />
    )

    return (
      /******* ACÁ VAN TODOS LOS COMPONENTES ********/
      <div className="App">
        <Header title={this.state.title} slogan={this.state.slogan} />
        <Menu links={this.state.products} />
        <section className="row">{losProductos}</section>
      </div>
     /******* ACÁ AFUERA, NADA ********/
    )
  }

}

export default App;
