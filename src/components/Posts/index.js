import React from 'react';

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={posts: [],gotPosts:false}
    }
    getPosts(){
        fetch('http:://localhost:3000/api/posts',{
            headers: new Headers({
                'Content-type' : 'application/json'
            })
        }).then(response => response.json()).then(data =>this.setState({posts: data,gotPosts:true})).then(() => console.log("Got users"))
    }
    componentDidMount(){
        this.getPosts();
    }

    render(){

        //aqui se obtienen
        let posts = this.state.posts.map(function(post){
           return(
               <li key={post.title}>
                   {post.title}
               </li>
           );
        });
        // aqui va lo obtenido
        return(
            <div>
                <p>{this.state.gotPosts ? posts : <h1>Aqui no hay nada lol</h1>}</p>
            </div>
        );
    }
}