//Composant React créé pour la démonstration de la notion de state :
//Exemple de gestion de state avec un composant React à base de classe

import React from "react";

class Compteur extends React.Component{
    constructor(props){
        super(props);
        //L'objet state est immutable => pour modifier la valeur de l'objet state, il faut remplcer tout l'objet à l'aide de setState
        this.state = {
            x : 1
        }
    }

    increment = ()=>{
        //Changer la valeur de l'objet state
        //this.state.x ++; ===> Interdit de changer les valeur du state directement
        //Toute modification du state doit passer par la méthode setState
        this.setState({x : this.state.x + 1});
        //Dès que le state est modifié, React va veiller à mettre à jour l'UI de façon à refléter la nouvelle valeur du state
        //==>Programmation déclarative 
    }

    decrement = ()=>{
        this.setState({x : this.state.x - 1});
    }

    render(){
        return <div>
            <p>
                Compteur : {this.state.x} 
                <button type="button" onClick={this.increment} > + </button>
                <button type="button" onClick={this.decrement} > - </button>
            </p>
            <br/><br/><br/>
            
        </div>
    }
}

export default Compteur;
