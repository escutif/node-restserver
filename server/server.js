require('./config/config');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//get para obtener registros
app.get('/usuario', function(req, res) {
    res.json('get usuario')
});

//post para crear nuevos registros
app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        })
    }


});

//put para actualizar registros
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({ id });
});

//delete para eliminar registros o marcar como no disponible
app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto ', process.env.PORT)
});