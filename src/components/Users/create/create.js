import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import LinearProgress from 'material-ui/LinearProgress';


class createUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = {firstname: '', lastname: '', username: '', email:'', educationLevel:''};
        this.items =  [
            <MenuItem key={1} value={"HighSchool"} primaryText="Highschool" />,
            <MenuItem key={2} value={"Middleschool"} primaryText="Middleschool" />,
            <MenuItem key={3} value={"Bachelor's"} primaryText="Bachelor's" />,
            <MenuItem key={4} value={"Master's"} primaryText="Master's" />,
            <MenuItem key={5} value={"PhD"} primaryText="PhD" />,
        ];

        this.maxDate = new Date();
        this.handleEducationLevel = this.handleEducationLevel.bind(this);
        this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //try to investigate further about this
    handleEmailChange(event){
        const email = event.target.value;
        this.setState({email:email});
    }
    handleFirstnameChange(event){
        const firstname = event.target.value;
        this.setState({firstname:firstname});
    }
    handleLastnameChange(event){
        const lastname = event.target.value;
        this.setState({lastname:lastname});
    }
    handleUsernameChange(event){
        const username = event.target.value;
        this.setState({username:username});
    }
    handleEducationLevel(event,index,value){
        const educationLevel = value;
        this.setState({educationLevel:educationLevel});
    }
    handleBirthdayChange(event,date){
        console.log("Event:"+event);
        console.log("Date:"+date);

    }


    handleSubmit(event){

        console.log(this.state);
        fetch('http://localhost:3000/api/users', {
            method: 'POST',
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
                educationLevel : this.state.educationLevel
            })
        }).then(
            function success(response){
                console.log(response);
            },
            function error(response){
                console.log(response);
            }
        );
    }

    render() {
        return (
            <div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="panel panel-default">
                                    <h3 className="text-center" >Register</h3>
                                     <br/>
                                     <div className="panel-body">
                                    <LinearProgress mode="indeterminate"/>
                                <br/>

                                    <form>

                                        <TextField
                                            hintText="Please enter your firstname"
                                            floatingLabelText="Firstname"
                                            fullWidth={true}
                                            value={this.state.firstname}
                                            onChange={this.handleFirstnameChange}
                                        />
                                        <TextField
                                            hintText="Please enter your lastname"
                                            floatingLabelText="Lastname"
                                            fullWidth={true}
                                            value={this.state.lastname}
                                            onChange={this.handleLastnameChange}
                                        />
                                        <TextField
                                            hintText="Please enter your username"
                                            floatingLabelText="Username"
                                            fullWidth={true}
                                            value={this.state.username}
                                            onChange={this.handleUsernameChange}
                                        />
                                        <TextField
                                            hintText="Please enter your email"
                                            floatingLabelText="Email"
                                            fullWidth={true}
                                            value={this.state.email}
                                            onChange={this.handleEmailChange}
                                        />
                                        <br/>
                                        <br/>
                                        <SelectField
                                            value={this.state.educationLevel}
                                            onChange={this.handleEducationLevel}
                                            floatingLabelText="Education Level"
                                            >
                                            {this.items}
                                        </SelectField>
                                        <br/>
                                        <br/>
                                        <DatePicker
                                            onChange={this.handleBirthdayChange}
                                            floatingLabelText="Birthday"
                                            disableYearSelection={false}
                                            shouldDisableDate={this.disabledDates}
                                            maxDate={this.maxDate}
                                        />
                                        <br/>
                                        <br/>
                                        <div className="text-center">
                                            <RaisedButton label="Register" primary={true} onTouchTap={this.handleSubmit}/>
                                        </div>

                                    </form>
                                     </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default createUser;


