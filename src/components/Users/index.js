import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default class User extends React.Component{

    constructor(props){
        super(props);
        this.state ={users:[],gotUsers:false};
    }
    gotUsers(){
        fetch('http://localhost:3000/api/users',{
            headers: new Headers({
                'Content-type' :'application/json'
            })
        }).then(response => response.json()).then(data =>this.setState({users: data,gotUsers:true})).then(() => console.log("Got users"))
    }
    componentDidMount(){
        this.gotUsers();
    }

    render(){

        //aqui se obtienen
        //aqui se obtienen
        let users = this.state.users.map(function(user){
            return(
                <li key={user.firstname} >
                    {user.firstname}{user.lastname}{user._id}
                </li>
            );
        });
        // aqui va lo obtenido
        return(
            <div>
                <div className="text-center">
                    {this.state.gotUsers ? users : <CircularProgress/>}
                </div>
            </div>
        );
    }

}