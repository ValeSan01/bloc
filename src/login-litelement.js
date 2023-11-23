import { LitElement, html, css } from 'lit-element';

export class LoginLitelement extends LitElement {

    static get styles() {
        return css`
            .container {
                border: solid 3px #ff00bb;
                border-radius: 10px;
                width: 350px;
                height: 600px;
                text-align: center;
            }

            input {
                width: 90%;
                height: 30px;
                margin-top: 8vh;
                border: solid 1px #414141; 
                border-radius: 5px;
            }

            button {
                width: 60%;
                height: 40px;
                background: #5eff6c;
                color: #414141;
                border: none;
                border-radius: 6px;
                margin-top: 8vh;
            }

            button:hover {
                background: #ff00bb;
                cursor: pointer;
            }


    .fbtn {  
                
      color: white;
      padding: 1px;
      margin: 8px 0;
      border: none;
    border-radius: 12px;
      background: #1B9EEB;
   

            }
          



    .ggbtn {
        color: white;
      padding: 1px ;
      margin: 8px 0;
      border: none;
      border-radius: 12px;
      background: white;
            }
            

h2{
    text-align: center;
    color: white;
}
P{
    text-align:center;
    color:white;
}
            
        `;
    }

    render() {
        return html`
            <div class="container">
           
                <h2>INGRESAR DATOS</h2>
                <p>BIENVENIDOS A MI BLOG</p>
                
                <input id="email" type="email" placeholder="Usuario o Correo">
                <input id="password" type="password" placeholder="Contraseña"> 
                <button class='btn_enviar' @click="${this._login}">Ingresar</button>




                <h2>Iniciar sesión con:</h2>



            <buttonn class="ggbtn" onclick="location.href='https://accounts.google.com/v3/signin/identifier?authuser=0&continue=http%3A%2F%2Fsupport.google.com%2Fmail%2Fanswer%2F8494%3Fhl%3Den%26co%3DGENIE.Platform%253DDesktop&ec=GAlAdQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S2080508850%3A1699383725172640&theme=glif'">                
            <img class="img" src='inicio de sesion.png' style="height:40px;  width: 150px;">
                    </buttonn>

          <buttonnn class="fbtn" onclick="location.href='https://es-la.facebook.com/login/device-based/regular/login/'">  
          <img class="img" src='fb.png' style="height:40px; width:150px;">
                </buttonnn>      
    

            </div>

    

        `;

        function onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
            var id_token = googleUser.getAuthResponse().id_token;
            console.log(id_token);
            function signOut() {
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function () {
                  console.log('User signed out.');
                });
              }
            
                
          }
    }

    _login() {
        const email = this.shadowRoot.querySelector("#email").value;
        const pass = this.shadowRoot.querySelector("#password").value;

        if(!!email && !!pass) {
            this.dispatchEvent(new CustomEvent('signin', {
                detail: { login: true },
                bubbles: true, composed: true
            }));
        }
    }
}


customElements.define('login-litelement', LoginLitelement);