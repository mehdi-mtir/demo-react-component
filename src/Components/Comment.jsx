//Déclaration d'une fonction js :
//1. Syntaxe de base :
/*function Comment(){

}*/

//2. fonctions anonymes :
/*const Comment = function(){

}*/

//3. fonctions fléchés (arrow function)
const Comment = (props)=>{
    return <div className="ui comments">
        <div className="comment">
            <a className="avatar">
                <img src={props.avatar} />
            </a>
            <div className="content">
            <a className="author">{props.user}</a>
            <div className="metadata">
                <span className="date">{props.dateComment}</span>
            </div>
            <div className="text">
                {props.message}
            </div>
            
            </div>
        </div>
    </div>
}

export default Comment;