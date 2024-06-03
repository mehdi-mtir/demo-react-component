//Création du premier composant React

import Card from "./Components/Card";
import Comment from "./Components/Comment";
import React from "react";
//import Compteur from "./Components/Compteur";

//import React from "react";

//Création d'un composant basé sur la classe React.Component (version classique)

class App extends React.Component{

    state = {
        comments : [
            {
                id : 1,
                user : "Matt",
                avatar : "https://semantic-ui.com/images/avatar/small/matt.jpg",
                dateComment : "28/05/2024",
                message : "How artistic!",
                approved : false
            },
            {
                id : 2,
                user : "Elliot Fu" ,
                avatar : "https://semantic-ui.com/images/avatar/small/elliot.jpg",
                dateComment : "29/05/2024" ,
                message : "Second comment",
                approved : false
            },
            {
                id : 3,
                user : "Jenny Hess",
                avatar : "https://semantic-ui.com/images/avatar/small/jenny.jpg",
                dateComment : "29/05/2024",
                message : "Last comment",
                approved : false
            }
        ]
        
    }

    declineComment= (id)=>{
        this.setState(
            {comments : this.state.comments.filter(c=>c.id !== id)}
        )
    }

    //Ajouter une méthode approveComment
    //Challenge 1 : Lorsque le bouton approve est cliqué, on affiche un message avec l'id du comment approuvé!
    //Challenge 2 : Mettre à jour l'objet state de sorte que l'attribut approuved de l'objet comment sélectionné soit mis à true
    //Challenge 3 : Afficher les boutons du cards uniquement lorsque l'attribut approuved est à false
    approveComment = (id)=>{
        //console.log("Le commentaire d'id : " + id + " est approuvé!");
        this.setState(
            {
                comments : this.state.comments.map(
                    comment=>{
                        if(comment.id === id)
                            return {...comment, approved : true}
                        else
                            return comment
                    }
                )
            }
        );

        //setTimeout(()=>{console.log(this.state.comments)}, 10);
    }


    addComment = ()=>{
        const newComment = {
            id : this.state.comments[this.state.comments.length - 1].id + 1,
            //id : 4,
            user : "Stevie Feliciano",
            avatar : "https://semantic-ui.com/images/avatar/small/stevie.jpg",
            dateComment : "30/05/2024",
            message : "Hey guys, I hope this example comment is helping you read this documentation.",
            approved : false
        }

        //mettre à jour l'objet state
        this.setState(
            {comments : [...this.state.comments, newComment]}
        );
    }

    render(){
        return <div>

        <h1>Commentaires :</h1>
        {

            this.state.comments.map(
                comment=> <Card 
                    key={comment.id} 
                    id={comment.id} 
                    approuved={comment.approved}
                    declineCommentHandler={this.declineComment}  
                    approveCommentHandler={this.approveComment}
                    >
                        <Comment 
                        user={comment.user} 
                        avatar={comment.avatar}
                        dateComment = {comment.dateComment}
                        message = {comment.message}
                        />
                </Card>
            )
        
        }

        <button type="button" onClick={this.addComment}>Ajouter un commentaire</button>
    </div>

    }

}
/*
function App(){
    return <div>

        <h1>Commentaires :</h1>
    
        {

            comments.map(
                comment=> <Card key={comment.id} >
                    <Comment 
                    user={comment.user} 
                    avatar={comment.avatar}
                    dateComment = {comment.dateComment}
                    message = {comment.message}
                    />
                </Card>
            )
        }

        <h1>Compteur :</h1>
        <Compteur />

    </div>;
}
*/

export default App;