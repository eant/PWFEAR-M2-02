import React from 'react'

/* Importar módulos propios */
import Header from './components/Header'
import Menu from './components/Menu'
import Product from './components/Product'
import Modal from './components/Modal'

/* Importar recursos propios */
//import './App.css';
//import productos from './productos.json'
import Client from './helpers/Client'

const API = new Client()
/*
- Ciclo de vida de un componente

1) constructor()        //<-- Setear el "estado" inicial
2) componentWillMount() //<-- Trabajar con datos Asincronicos (AJAX)
3) componentDidMount()  //<-- Trabajar con datos Sincronicos (Loops)
4) render()             //<-- Armar la interfaz grafica (segun el "estado")
*/

class App extends React.Component {

  constructor(){
    super()
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
      products : [],
      loaded : false
    }
    this.actualizarEstado = this.actualizarEstado.bind(this)
  }

  componentWillMount(){
    /* Datos Asincronicos obtenidos directamente...

    fetch("https://api.myjson.com/bins/fb377").then((response) => {
      //Capa 1: Convertir los datos...
      return response.json()
    }).then((productos) => {
      //Capa 2: Usar los datos...
      this.setState({ products : productos, loaded : true })
    })
*/

    /* Datos Asincronicos obtenidos mediante un modulo Helper */
    API.getData("https://api.myjson.com/bins/dcg2p").then((productos) => {
      this.setState({ products : productos, loaded : true })
    })
  }

  actualizarEstado(theProduct, borrar = false){
    //0) Variable común
    let nuevo = []

    //1) "Desactivar" el render()
    this.setState({ loaded : false })

    //2) "Actualizar" o "Borrar"
    if(!borrar){ //<-- Si NO hay que "borrar"... entonces "actualizar"
    /*
      this.setState({
        products : this.state.products.map(
          oldProduct => oldProduct.idProducto === theProduct.idProducto ? theProduct : oldProduct
        )
      }, () => { this.setState({ loaded : true }) })
*/
      nuevo = this.state.products.map(
        oldProduct => oldProduct.idProducto === theProduct.idProducto ? theProduct : oldProduct
      )

    } else { //<-- Si EFECTIVAMENTE hay que "borrar"... entonces "borrar"
      /*
      this.setState({
        products : this.state.products.filter(
          oldProduct => oldProduct.idProducto !== theProduct.idProducto
          )
        }, () => { this.setState({ loaded : true }) })
*/
      nuevo = this.state.products.filter(
        oldProduct => oldProduct.idProducto !== theProduct.idProducto
      )
    }

    this.setState({ products : nuevo }, () => {
      window.localStorage.setItem("_products", JSON.stringify(nuevo) ) //<-- Actualizo el LS
      this.setState({ loaded : true })

    })
  }

  render(){
    console.log("Actualizando render...")
    console.log( this.state )
    /* Aca se pueden programar cosas que desemboquen en el return */
    if( !this.state.loaded ){ //<-- Si NO está cargado...
      return <div>Iniciando App..</div>
    } else { //<-- Si EFECTIVAMENTE está cargado...

      const losProductos = this.state.products.map(
        (product, index) => <Product item={product} key={index} onActualizarProducto={this.actualizarEstado} />
      )
      return (
        /******* ACÁ VAN TODOS LOS COMPONENTES ********/
        <div className="App">
          <Header title={this.state.title} slogan={this.state.slogan} />

          <Menu links={this.state.products} />
          <section className="container-fluid">
            <div className="row">{losProductos}</div>
          </section>
          <Modal />
        </div>
       /******* ACÁ AFUERA, NADA ********/
      )

    }




  }

}

export default App;
