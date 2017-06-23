import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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

    // El handle body change es una funcion que se manda a llamar cuando se modifica el textfield de body
    // puedes ver que tiene el evento haciendole un console.log al evento
    // basicamente el evento trae informacion sobre que elemento esta mandando ese evento, entre todas las cosas que trae, trae un ´target´
    // El target es el elemento que estas modificando (osea el elemento que esta mandando a ejecutar un "evento") por eso tienes que hacer dos funciones diferentes (una para cada elemento, por que quieres dos eventos diferentes)
    // En este caso el target es el input que tiene el titulo (puedes hacerle un console.log al target y vas a ver que te va a dar un <input type=text> etc... en la consola
    // el .value es el valor literal dentro de ese input, por eso se lo asignas aqui, y tienes que hacer lo mismo para el title y cualqueir elemento que tengas, ya ves por que es importante reciclar componentes?
    handleBodyChange(event) {
        const body = event.target.value;
        this.setState({body: body})
    }

    handleTitleChange(event) {
        const title = event.target.value;
        this.setState({title: title})
    }

    // Aqui harias tu post al servidor, pasandole los parametros de la forma como argumento
    handleSubmit(event) {

        // Aqui puedes ver como se modifico el estado, antes de hacer el post deberias de validar si la informacion es correcta o si tienes algun elemento vacio
        // Osea validar la forma, checa la documentacion de material ui ahi debe de venir como hacerlo, tambien puedes validar cada input en su respectiva funcion ´onEquisElementoChange
        console.log(this.state);

        // hacer el post a tu servidor
        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
            })
            // teoricamente tambien deberia de funcionar si escribes esto ==>> body: this.state
        }).then(
            function success(response){
                // handle error
            },
            function error(response){
                // handle success
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
                        <div className="col-md-6 col-md-offset-3">
                            <h3 className="text-center">Create new Blog Post</h3>
                            <hr/>
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