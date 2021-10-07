const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  
  const {nombre,apellido,edad = 0} = req.query;
  
  res.json({
    msj: "peticion get API - Controlador",
    nombre,
    apellido,
    edad
  });
};

const usuariosPut = (req, res) => {

  const {id} = req.params;

  res.json({
    msj: "peticion put API - Controlador",
    id
  });
};

const usuariosPost = (req, res) => {

  const{nombre, edad} = req.body;

  res.json({
    msj: "peticion post API - Controlador -- x",
    nombre,
    edad
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msj: "peticion delete API - Controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete
};
