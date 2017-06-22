import React from 'react';
import TextField from 'material-ui/TextField';


class createUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = {title: '', body: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //try to investigate further about this

    handleInputChange(event){
        let target = event.target;
        let value : target.value;
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
                        <div class="panel-body"><TextField
                            hintText="Hint Text"
                            floatingLabelText="Floating Label Text"/></div>
                    </div>
                </div>
            </form>
        );
    }

}

export default createUser;