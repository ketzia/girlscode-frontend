
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';


class EditProfile extends React.Component{
//dummmy id 593f57ec4f81133b74ab2748
    constructor(props){
        super(props);
        this.state = {user:'',gotUser:false,firstname:'',lastname:'', email:'', username:''};

        this.id = this.props.match.params.id;
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    gotUser(){
        fetch(`http://localhost:3000/api/user/${this.id}`, {
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }).then(response => response.json()).then(data =>this.setState({user: data,gotUser:true})).then(() => console.log("Got user successfully")).then(() => console.log(this.state.user))
    }

    handleFirstNameChange(event){
        const value = event.target.value;
        this.setState({firstname:value});
    }
    handleLastNameChange(event){
        const lastname = event.target.value;
        this.setState({lastname:lastname});
    }
    handleEmailChange(event){
        const email = event.target.value;
        this.setState({email:email});
    }
    handleUsernameChange(event){
        const usern = event.target.value;
        this.setState({username:usern});
    }
    componentDidMount(){
        this.gotUser();
    }
    handleSubmit(event) {

        if(this.state.firstname ==''){
            let first = this.state.user.firstname;
            this.setState({firstname:first});
        }
        if(this.state.lastname ==''){
            let last = this.state.user.lastname;
            this.setState({lastname:last});
        }
        if(this.state.email ==''){
            let email = this.state.user.email;
            this.setState({email:email});
        }
        if(this.state.username ==''){
            let usern = this.state.user.username;
            this.setState({username:usern});
        }
     //   else {
       //     console.log(this.id);
        //}

        fetch('http://localhost/3000/api/user', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: this.id,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email : this.state.email,
                username : this.state.username,
            })
        }).then(
            function success(response){
                console.log("put succeeded");
            },
            function error(response){
                console.log("error");
            }
        );
    }


    render(){
        let user = this.state.user;

        return (
            <div className="Profile">
                <div className="col-md-6 text-center col-md-offset-3">
                    <br/><br/>
                    <div className="panel panel-default">
                        <div className="panel-heading"> Edit Profile Information </div>
                        <div className="panel-body">
                            <form>
                                <br/>
                                <TextField
                                    floatingLabelText="Firstname"
                                    value={this.state.firstname}
                                    onChange={this.handleFirstNameChange}
                                    fullWidth={true}
                                />
                                <br/>
                                <TextField
                                    floatingLabelText="Lastname"
                                    defaultValue={this.state.user.lastname}
                                    value={this.state.lastname}
                                    onChange={this.handleLastNameChange}
                                    fullWidth={true}
                                />
                                <br/>
                                <TextField
                                    floatingLabelText="Email"
                                    defaultValue={this.state.user.email}
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                    fullWidth={true}
                                />
                                <br/>
                                <TextField
                                    floatingLabelText="Username"
                                    defaultValue={this.state.user.username}
                                    value={this.state.username}
                                    onChange={this.handleUsernameChange}
                                    fullWidth={true}
                                />
                                <br/>
                                <br/>
                                <div className="text-center">
                                    <RaisedButton label="Edit" primary={true} onTouchTap={this.handleSubmit}/>
                                </div>
                            </form>
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


export default EditProfile;