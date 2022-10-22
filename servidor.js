const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const TareaSchema = require('./modelos/Tarea.js');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);
mongoose.connect('mongodb+srv://Daniela123:daniela123@misiontic.cjh40cd.mongodb.net/express?retryWrites=true&w=majority')

app.listen(3000, () => {

    console.log('Escuchando por puerto 3000');
    
});

router.get('/', (req, res) => {
    res.send('Inicio de la API');
    
});

router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
    
    idTarea: req.body.id,
    nombreTarea: req.body.nombre,
    detalleTarea: req.body.detalle
    });
    nuevaTarea.save(function(err, datos){

        if (err) {
        console.log(err);
        }
        else{
        res.send('Tarea almacenada correctamente');
        }
    });
        
});

router.get('/tarea', (req, res) => {
    TareaSchema.find(function(err, datos){
        if (err) {
            console.log("Error leyendo las tareas");
        }else{
            res.send(datos);
        }
    });
});
