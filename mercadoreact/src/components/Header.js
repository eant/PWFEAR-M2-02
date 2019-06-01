import React from 'react'
import logo from '../assets/logo.svg'

class Header extends React.Component {
  render(){
    console.log(this.props)
    return (
      /** Inicio del componente Header **/
      <header className="jumbotron jumbotron-fluid text-center py-3 m-0">
        <img src={logo} className="w-50" alt={this.props.title} />
        <h1>{this.props.title}</h1>
        <h2>{this.props.slogan}</h2>
      </header>
      /** Fin del componente Header **/
    )
  }
}

export default Header
