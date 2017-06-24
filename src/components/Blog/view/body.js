import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
class Body extends React.Component{
    constructor(props){
        super(props);
        this.state ={post: [],gotPost:false};
        this.id = props.match.params.id;
        //console.log(props.match.params.id);


    }
    gotPost(){
        console.log(this.id);
        fetch(`http://localhost:3000/api/post/${this.id}`, {
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }).then(response => response.json()).then(data =>this.setState({post: data,gotPost:true})).then(() => console.log("Got post successfully")).then(() => console.log(this.state.posts))
    }
    //remeber to put thi every time i make a call to an endpoint(when loading page)
    componentDidMount() {
        this.gotPost();
    }
    render(){
        let post = this.state.post;
            return (
                <div className="Body">
                    <div className="col-md-10 text-center col-md-offset-1">
                        <br/><br/>
                        <div className="panel panel-default">
                            <div className="panel-heading"> {post.title}</div>
                            <div className="panel-body">{post.body}
                            </div>
                        </div>
                    </div>
                </div>
            );

        return(
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.gotPost ? post : <CircularProgress/>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;