const express = require("express");
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //Middlewares
    this.middlewares();

    //rutas de mi app
    this.routes();
  }

  middlewares() {

    //CORS
    this.app.use(cors());

    //Lectura y Parseo del Body (lo que llega por parametros en la petición) 
    //lo intenta serializar a Json de una
    this.app.use(express.json());

    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/usuarios'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en puerto: ", this.port);
    });
  }
}

module.exports = Server;
