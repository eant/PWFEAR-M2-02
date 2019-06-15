import React, { Component } from 'react'
import slugify from '../helpers/String'

class Menu extends Component {
  render(){

    return(
      <nav className="navbar navbar-dark navbar-expand-sm bg-primary">
        <ul className="navbar-nav mx-auto">
          <Items links={this.props.links} />
        </ul>
      </nav>
    )
  }
}

class Items extends Component {

  constructor(){
    super()
    this.state = {
      categories : [],
      loaded : false
    }
  }

  componentDidMount(){

    //console.log("Estos son los links ↓")
    //console.log( ...this.props.links )


    this.setState({
      categories : [ ...new Set( this.props.links.map(link => link.Categoria) ) ],
      loaded : true
    })

  }

  render(){
    //console.log( this.state.categories )

    if( !this.state.loaded ) {

      return <li>Cargando...</li>

    } else {
      //console.log("Hay datos... el estado esta cargado :)")

      return this.state.categories.map(
        (link, index) =>
            <li className="nav-item" key={index}>
              <a className="nav-link" href={slugify(link)}>{link}</a>
            </li>
      )

    }



  }
}

export default Menu;
