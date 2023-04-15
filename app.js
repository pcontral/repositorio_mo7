import express from 'express';
import cors from 'cors';
import { create } from 'express-handlebars';

import * as path from "path";
import { fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import viewsRoutes from './routes/views.routes.js'
import productsRoutes from './routes/productos.routes.js';
const app = express();


// Midelwrare

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


//servidor
app.listen(3000, () => { console.log('Servidor en http://localhost:3000'); });
    
//RUTAS CARPETAS, IMAGENES, CSS, JS.
app.use("/imagenes", express.static(__dirname+"/public/imagenes")); 
app.use("/css", express.static(__dirname+"/public/css")); 
app.use("/js", express.static(__dirname + "/assets/js"));
// app.use(viewsRoutes)


//Handlebars

const hbs = create({
    partialsDisr:[
        "views/partials/"
    ]
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

export default app;