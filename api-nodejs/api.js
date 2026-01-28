const express = require('express');
const user = require('./controller/user');
// asignacion de express a una variable = importar dependencias (nombre de dependencia)
const app = express();
const port = 3000;

// Definicion de rutas y metodos HTTP
app.get('/', user.list);
app.post('/', user.create);
app.get('/:id', user.get);
app.put('/:id', user.update);
app.patch('/:id', user.update);
app.delete('/:id', user.delete);

// Manejo de rutas no definidas
app.get('*', (req, res) => {
  res.status(404).send('Ruta no encontrada');
});

app.listen(port, () => {
  console.log("Arrancando la aplicacion");
});