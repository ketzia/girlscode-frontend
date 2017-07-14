
import auth0 from 'auth0-js';

// se van a utilizar el access token, id:token y el tiempo en el que expira el access token
export default class Auth{
    auth0 = new auth0.WebAuth({
        domain: 'ketzia.auth0.com',
        clientID: 'qLf4CGTakqdjGoFWazg3wRKe1LdasUjP',
        redirectUri: 'http://localhost:3000',
        audience: 'https://ketzia.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });
    constructor(){
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.setSession = this.setSession.bind(this);
    }

    setSession(authResult){

        // expira token
        let expiresAt = JSON.stringigy((authResult.expiresIn *1000)+ new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);

        // ver que es history lol
    }

    handleAuthentication(){
        this.auth0.parseHash((err,authResult)=>{
            // si hay resultados se setea la sesion
            if(authResult && authResult.accessToken && authResult.idToken){
                this.setSession(authResult);
            }
            else if (err){
                console.log(err);
            }
        });
    }
    logout(){
        //se quita el token actual
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        //de nuevo el history
    }

    login(){
        this.auth0.authorize();
    }
}