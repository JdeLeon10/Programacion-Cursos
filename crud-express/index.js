import express from 'express';
import { engine } from 'express-handlebars'; // motor de plantillas
import morgan from 'morgan';
import {join, dirname} from 'path'; // nos permite unir rutas de archivos automaticamente 
import { fileURLToPath } from 'url'; // nos permite obtener la ruta absoluta del proyecto

// Initializations
const app = express(); // instanciar el servidor de express
const __dirname = dirname(fileURLToPath(import.meta.url)); // nos permite obtener la ruta absoluta del proyecto

// settings
app.set('port', process.env.PORT || 3000); // "En mi variable port, ejecuta el puerto de la variable de entorno, si no existe abrelo en el puerto 3000"
app.set('views', join(__dirname, 'src', 'views')); // le decimos donde van a estar las vistas
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs'); // le decimos que motor de plantillas vamos a usar

// Middlewares
app.use(morgan('dev')); // nos muestra las peticiones por consola
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Public files
app.use(express.static(join(__dirname, 'public')));

// Run server
app.listen(app.get('port'), () => {
  console.log(`Server running on http://localhost:${app.get('port')}`);
});