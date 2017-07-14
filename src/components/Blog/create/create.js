import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

class createPost extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        // tienes que hacerle bind, al hacerle bind a este mismo elemento puedes acceder a la variable evento y a las variables que trae react (ver mas abajo la explicacion) si no te da un error de que el this.setState no es una funcion
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);

        // Funcion que se manda a llamar en dos casos:
        // 1 = si estas usando formas normales se manda a llamar dentro de el onSubmit, esa funcion checa si algun elemento de tipo submit (osea un <input type=submit>) se presiono, en este caso com oestamos usando la liberia esta no hay ningun elemento tipo submit
        // 2 = por eso mejor lo mande a llamar en el ontouchtap del boton de submit mas abajo, es lo mismo basicamente
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleBodyChange(event) {
        const body = event.target.value;
        this.setState({body: body})
    }

    handleTitleChange(event) {
        const title = event.target.value;
        this.setState({title: title})
    }


    handleSubmit(event) {

        // Aqui puedes ver como se modifico el estado, antes de hacer el post deberias de validar si la informacion es correcta o si tienes algun elemento vacio
        // Osea validar la forma, checa la documentacion de material ui ahi debe de venir como hacerlo, tambien puedes validar cada input en su respectiva funcion ´onEquisElementoChange
        console.log(this.state);


        // hacer el post a tu servidor
        fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
            })

        }).then(
            function success(response){
                // handle error
                console.log(response.body);
            },
            function error(response){
                console.log(response.body);
            }
        );

        // el event.preventDefault() hace que no se ejecute la cosa por default que tienes las formas,
        // la cosa por default que tienen las formas es recargar la pagina, en este caso no quieres hacer eso, por eso lo mandas a llamar
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h3 className="text-center">Create new Blog Post</h3>
                            <br/>
                            <LinearProgress mode="indeterminate"/>
                            <br/>
                            <form>

                                <TextField
                                    hintText="Please give this blog post a title"
                                    floatingLabelText="Title"
                                    fullWidth={true}
                                    value={this.state.title}
                                    onChange={this.handleTitleChange}
                                />

                                <TextField
                                    hintText="Write something interesting"
                                    floatingLabelText="Content"
                                    fullWidth={true}
                                    multiLine={true}
                                    rows={6}
                                    rowsMax={8}
                                    value={this.state.body}
                                    onChange={this.handleBodyChange}
                                />

                                <div className="text-center">
                                    <RaisedButton label="Publish now" primary={true} onTouchTap={this.handleSubmit}/>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default createPost;