import React, { Component } from 'react';

class FetchContainer extends Component {

    componentDidMount(){
        fetch('http://klassi.herokuapp.com/api/alumnos/5d0c05b9e9add9369cbd5ba7')
        .then(response => response.json())
        .then(json => console.log(json))
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default FetchContainer;