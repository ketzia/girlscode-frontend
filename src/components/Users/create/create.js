import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


class createUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = {firstname: '', lastname: '', username: '', email:'', educationLevel:''};
        this.items =  [
            <MenuItem key={1} value={1} primaryText="Highschool" />,
            <MenuItem key={2} value={2} primaryText="Middleschool" />,
            <MenuItem key={3} value={3} primaryText="Bachelor's" />,
            <MenuItem key={4} value={4} primaryText="Master's" />,
            <MenuItem key={5} value={5} primaryText="PhD" />,
        ];
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //try to investigate further about this

    handleInputChange(event){
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name] :value
        });
    }

    handleSubmit(event){
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class = "form-group">

                    <div class="panel panel-default">
                        <div class="panel-body">
                            <TextField input="text" hintText="Name" floatingLabelText="Name" value={this.state.firstname} />
                             <br />
                            <TextField input="text" hintText="Lastname" floatingLabelText="Lastname" value={this.state.lastname}/>
                            <br />
                            <TextField input="text" hintText="Username" floatingLabelText="Username" value={this.state.username}/>
                            <br/>
                            <TextField input="text" hintText="Email" floatingLabelText="Email" value={this.state.username}/>
                            <br/>
                            <SelectField value={this.state.educationLevel} onChange={this.handleChange} floatingLabelText="Education Level" floatingLabelFixed={true} hintText="Bachelor's">
                                {this.items}
                            </SelectField>
                        </div>
                    </div>
                    <RaisedButton label="Register" secondary={true}  />
                </div>

            </form>
        );
    }

}

export default createUser;