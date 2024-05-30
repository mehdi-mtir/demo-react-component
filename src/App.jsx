//Création du premier composant React

import Card from "./Components/Card";
import Comment from "./Components/Comment";
import React from "react";
//import Compteur from "./Components/Compteur";

var comments = [
    {
        id : 1,
        user : "Matt",
        avatar : "https://semantic-ui.com/images/avatar/small/matt.jpg",
        dateComment : "28/05/2024",
        message : "How artistic!"
    },
    {
        id : 2,
        user : "Elliot Fu" ,
        avatar : "https://semantic-ui.com/images/avatar/small/elliot.jpg",
        dateComment : "29/05/2024" ,
        message : "Second comment"
    },
    {
        id : 3,
        user : "Jenny Hess",
        avatar : "https://semantic-ui.com/images/avatar/small/jenny.jpg",
        dateComment : "29/05/2024",
        message : "Last comment"
    }
]


//import React from "react";

//Création d'un composant basé sur la classe React.Component (version classique)

class App extends React.Component{

    render(){
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