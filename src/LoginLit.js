import { LitElement, html, css } from 'lit-element';
import './login-litelement';

export class LoginLit extends LitElement {
  static get properties() {
    return {
      login: { type: Boolean }
    };
  }

  static get styles() {
    return css`
        login-litelement {
            display: flex;
            position: absolute;
            right: 38%;
            top: 10%;
        }
    `;
  }

  render() {
    return html`
        ${ this.login 
          ? html` <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body{
    font-family: Arial, Helvetica, sans-serif;
    background-color: #E66CDF;
  }
  .contenedorPrincipal{
    max-width: 1000px;
    margin: 0 auto;
     
  }
  header{
    background-color: #eeeeee;
    width: 100%;
    height: 48px;
  }
  header nav ul li{
    list-style-type: none;
    float: left;
  }
  header nav ul li a{
    text-decoration: none;
    padding: 15px 20px 15px 20px;
    display: inline-block;
    color: #E66CDF;
  }
  header nav ul li a:hover{
    background-color: #e52f6e;
    color: black;
  }
  main{
    background-color: white;
    margin-left: 217px;
    margin-top: 61px;
   
  }
  main img{
    max-width: 100%;
  
  }
  main section{
    padding: 30px;
  }
  main section p{
    text-align: justify;
    margin-bottom: 16px;
    line-height: 1.5em;
  }
  main h1{
    margin-bottom: 20px;
    font-size: 1.6em;
  }
  aside{
    position: absolute;
    top: 109px;
    left: 80;
    width: 217px;
    height: 271px;
    float: left;
    background-color:#E66CDF;
    padding: 30px;
  }
  aside ul li{
    text-decoration: none;
    color: black;
  }
  aside ul li:hover{
    color: #425067;
  }
  aside ul li{
    list-style-type: none;
    margin-bottom: 16px;
    border-bottom: 1px solid black;
  }
  aside h2{
    color: black;
    margin-bottom: 20px;
    font-size: 1.4em;
  }
  footer{
    width: 1000px;
    clear: both;
    padding: 60px;
    background-color: #e52f6e;

    height: 42px;
        bottom: 0;
        z-index: 1;
        text-align: center;
  }
  footer p{
    color: white;
    text-align: center;
    
  }
  @media screen and (max-width: 800px) {
    main{
      width:100%;
      display:block;
    }
    aside{
      width: 100%;
      display:block;
    }
    footer{
      width: 100%;
      display: block;
    }
  }
  

  </style>
</head>
<body>
  <div class="contenedorPrincipal">
    <header>
      <nav>
        <ul>
          <li><a href="https://www.google.com/search?q=canciones+de+lana+del+rey&oq=canciones&gs_lcrp=EgZjaHJvbWUqDAgBEAAYFBiHAhiABDIMCAAQRRg5GLEDGIAEMgwIARAAGBQYhwIYgAQyDQgCEC4YgwEYsQMYgAQyBwgDEAAYgAQyCggEEAAYsQMYgAQyBwgFEAAYgAQyCggGEAAYsQMYgAQyCggHEAAYsQMYgAQyBwgIEAAYgAQyCggJEAAYsQMYgATSAQg3OTkyajBqOagCALACAA&sourceid=chrome&ie=UTF-8">Canciones</a></li>
          <li><a href="https://www.vogue.mx/estilo-de-vida/articulo/lana-del-rey-biografia-frases-y-canciones">Servicios</a></li>
          <li><a href="publi.html">Blog</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <img src="https://m.media-amazon.com/images/I/51oHVPxaiDL._UF1000,1000_QL80_.jpg" alt="imagen">
      <section>
        <h1>Biografía de Lana del Rey</h1>
        <p>Elizabeth Woolridge Grant (Nueva York, 1985), de nombre artístico Lana Del Rey, es una cantante y compositora cuyo estilo ha sido definido por los críticos como ‘Vintage’ dada la temática y estilo de sus letras, que versan sobre el romance trágico con toques melancólicos y referencias a la cultura pop de las décadas 50 y 60.</p>
        <P>Tras una temprana adolescencia marcada por su adicción al alcohol, completamente superada tras pasar por un internado privado en Connecticut, con 18 años volvió a Nueva York y, tras recibir clases de guitarra por parte de su tío, comenzó a presentarse en clubes del condado de Brooklyn, al tiempo que estudiaba Metafísica en la Universidad de Fordham.</p>
        <p>Entre los años 2005-2006 registró un álbum de 7 temas titulado Elizabeth Woolridge Grant en la Oficina de Derechos de Autor estadounidense y también publicó el disco  Sirens. Tras actuar para el Williamsburg Live Songwriting Competition conoció a Van Wilson, del sello independiente A&R rep for 5 Points Records, y realizó algún trabajo de descarga digital.</p>
        <p>En 2009 adquirió su nombre artístico actual y lanzó a la venta en descarga digital Lana del Ray a.k.a. Lizzy Grant que poco después pidió retirar del mercado por su insatisfacción tanto en número de canciones como en nombre, pues se publicó como Ray y no Rey.</p>


        
      </section>
      <section>
        <h1>Curiosidades sobre Lana del Rey</h1>
        <h2>¿Quién es la pareja de Lana del Rey?</h2>
        <p>La diva del pop ha mantenido breves relaciones
           con James Franco, Bradley Soileau y Axl Rose. 
           Fue pareja de Barrie-James O'Neill (2011-2014) 
           y Francesco Carrozzini (2014-2015). En diciembre
            de 2020, anunció que se había comprometido con el
             músico Clayton Johnson.</p>
       
        <h1>¿Qué le gusta a Lana del Rey?</h1>
        <p>Es muy cinéfila, aficionada al cine clásico
           hollywoodiense, y una gran lectora.</p>


      <h1>¿Qué dicen los tatuajes de Lana del Rey?</h1>
      <p>La cantante tiene varios tatuajes en su cuerpo,
         con mensajes importantes para ella. ‘Trust No One’ 
         y “M” (en honor de su abuela Madeleine) en la mano 
         derecha; ‘Paradise’ y el signo de infinito en la
          mano izquierda; ‘Nina & Billie’, en el cuello, 
          recordando a sus ídolos Nina Richie y Billie 
          Holiday; ‘Life Is Beautiful’ en la muñeca derecha; 
          ‘Nabokov Whitman’, sus dos escritores favoritos en 
          el antebrazo derecho; y ‘Chateau Marmont’ en el
           brazo izquierdo.</p>
      </section>
    </main>
    <aside>
      <h2>Nueva Informacion</h2>
      
      <ul>
        <li>Comentarios</li>
        <li>Tragedias</li>
        <li>Chismes</li>
      </ul>
    </aside>
    
  </div>
  </body>
</html> ` 
          : html` <login-litelement @signin="${ this._hiddenLogin }"></login-litelement> ` }
    `;
  }

  _hiddenLogin() {
    this.login = true;
  }
}
