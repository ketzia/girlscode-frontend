import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={posts: [],gotPosts:false};
    }
    getPosts(){
        fetch('http://localhost:3000/api/posts',{
            headers: new Headers({
                'Content-type' : 'application/json'
            })
        }).then(response => response.json()).then(data =>this.setState({posts: data,gotPosts:true})).then(() => console.log("Got users"))
    }

    // componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering
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
            <div className="text-center">
                {this.state.gotPosts ? posts : <CircularProgress/>}
            </div>
            </div>
        );
    }
}