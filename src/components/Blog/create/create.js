import React from 'react';


class createPost extends React.Component{

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
                <label>
                    Title:
                    <input type="text" value={this.state.title} onChange={this.handleInputChange} />
                </label>
                <label>
                   Body:
                    <input type="text" value={this.state.body} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }

}

export default createPost;