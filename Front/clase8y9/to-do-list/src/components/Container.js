import React, { Component } from 'react';
import Inputs from './Inputs.js';
import AllToDo from './AllToDo.js'


class Container extends Component {
    state = {
        item: {
            text: '',
            id: 0
        },
        allItems: [],
        inputEdit:''
    }

    //High Order Function => funcion que retorna otra funcion
    handleChange = event => {
        const itemText = event.target.value
        const addItem = { text: itemText, id: this.state.item.id }
        console.log(addItem)
        this.setState({
            item: addItem,
        })
    }

    addItem = () => {
        const newItem = [...this.state.allItems, this.state.item]
        this.setState({
            item: { text: '', id: this.state.item.id + 1 },
            allItems: newItem,
        })
        console.log(this.state.item.id)
    }

    removeItem = id => {
        const newArray = this.state.allItems.filter(itemId => itemId.id !== id)
        this.setState({ allItems: newArray })
    }   

    render() {
        return (
            <div>
                <Inputs
                    items={this.state.item}
                    handleChange={this.handleChange}
                    addItem={this.addItem}
                />
                <hr />
                <AllToDo
                    allItems={this.state.allItems}
                    removeItem={this.removeItem}
                />
            </div>
        );
    }
}

export default Container;