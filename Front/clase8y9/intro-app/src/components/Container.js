import React, { Component } from 'react';
import Hola from './Hola.js';
import Inputs from './Inputs.js';
import Counter from './Counter.js'

//la class nos permite usar state, render.
class Container extends Component {

    state = {
        number: 0,
        nombre: '',
        apellido: '',
        saludo: ''
    }

    increment = () => { this.setState({ number: this.state.number + 1 }) }

    resta = () => { this.setState({ number: this.state.number - 1 }) }

    reset = () => { this.setState({ number: this.state.number = 0 }) }

    handleChange = name => event => this.setState({ [name]: event.target.value }, () => console.log(this.state.nombre + ' ' + this.state.apellido))

    sayHi = () => { this.setState({ saludo: this.state.nombre + ' ' + this.state.apellido }) }

    // handleChange = name => event => this.setState({[name]: event.target.value}, () => console.log(this.state))

    // handleChangeNombre = event => this.setState({nombre:event.target.value}, () =>console.log(this.state.nombre))

    // handleChangeApellido = event => this.setState({apellido:event.target.value}, () =>console.log(this.state.apellido))


    render() {
        return (
            <div>
                <Counter
                    number={this.state.number}
                    increment={this.increment}
                    resta={this.resta}
                    reset={this.reset}
                />
                <hr/>
                <br />
                <Inputs
                    nombre={this.state.nombre}
                    apellido={this.state.apellido}
                    handleChange={this.handleChange}
                    sayHi={this.sayHi}
                />

                <Hola
                    saludo="hola"
                    nombre={this.state.saludo}
                    pregunta="¿como estas?"
                />
            </div>
        )
    }
}

export default Container