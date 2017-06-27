import React from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from 'material-ui/CircularProgress';


class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state = {user:'',gotUser:false};
        this.id = this.props.match.params.id;
    }

    gotUser(){
        fetch(`http://localhost:3000/api/user/${this.id}`, {
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }).then(response => response.json()).then(data =>this.setState({user: data,gotUser:true})).then(() => console.log("Got user successfully")).then(() => console.log(this.state.user))
    }

    componentDidMount(){
        this.gotUser();
    }

    render(){
        let user = this.state.user;

        return (
            <div className="Profile">
                <div className="col-md-10 text-center col-md-offset-1">
                    <br/><br/>
                    <div className="panel panel-default">
                        <div className="panel-heading"> Welcome {user.firstname}</div>
                        <div className="panel-body">
                            {user.firstname}{user.lastname}
                            <br/>
                            {user.email}
                            <br/><b><Link to={`/user/edit/${user._id}`} >Editar</Link></b>
                        </div>
                    </div>
                </div>
            </div>
        );

        return(
            <div className="Profile">
                <div className="contianer">
                    <div className="row">
                        {this.state.gotUser ? user : <CircularProgress/>}
                    </div>
                </div>
            </div>
        );
    }


}

export default Profile;