import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { Link } from 'react-router-dom';

export default class Blog extends React.Component{

    constructor(props) {
        super(props);
        this.state={posts: [],gotPosts:false};
    }

    getPosts() {
        fetch('http://localhost:8080/api/posts',{
            headers: new Headers({
                'Content-type' : 'application/json'
            })
        }).then(response => response.json()).then(data =>this.setState({posts: data,gotPosts:true})).then(() => console.log("Got posts")).then(() => console.log(this.state.posts))
    }

    // componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering
    componentDidMount() {
        this.getPosts();
    }

    render() {

        // en el link to = {} etc se usa otra manera de imprimir strings en javascript, es muy parecida a python
        // basicamente usas las comillas esas raras y si quieres imprimir una variable tienes que poner ${} y dentro pones el nombre de la variable
        // osea es lo mismo hacer esto: console.log("/blog/view/"+post.id)
        let posts = this.state.posts.map(function(post,index){
            return(
                <div className="col-md-4 text-center" key={index}>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <b><Link to={`/blog/view/${post._id}`} >{post.title}</Link></b>
                        </div>
                        <div className="panel-body">
                            Author: {post.user_id}
                            <hr/>
                            {post.date}
                        </div>
                    </div>
                </div>
            );
        });

        // aqui va lo obtenido
        return(
            <div>
                <div className="container">
                    <h3 className="text-center">Welcome to the blog</h3>
                    <hr/>
                    <div className="row">
                        {this.state.gotPosts ? posts : <CircularProgress/>}
                    </div>
                </div>
            </div>
        );
    }
}