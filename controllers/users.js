const { response, request } = require('express')


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 10, limit = 5 } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const ususariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre: nombre,
        edad: edad
    })
}

const ususariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    })
}

const ususariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    })
}

const ususariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    })
}



module.exports = {
    usuariosGet,
    ususariosPost,
    ususariosPut,
    ususariosPatch,
    ususariosDelete
}