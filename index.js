import app from './app.js';
import { sequelize } from './database/database.js'

//IMPORTAR MODELS
import './models/producto.models.js';
import './models/Carro.models.js';
import './models/DetalleCarro.models.js';
import './models/Ventas.models.js';
import './models/DetalleVentas.models.js';
import './models/Usuarios.models.js';

//IMPORTAR RELACIONES
import './models/Relaciones.models.js';


const main = async ()=> {
    try {
        await sequelize.authenticate();
        console.log("Nos hemos conectado con exito");
        await sequelize.sync({force: false, alter: true});
        let PORT = 3002;
        app.listen(PORT, ()=> {console.log("SErvidor escuchando en http://localhost:"+PORT);})
        
    } catch (error) {
        console.log('Ha ocurrido un error: ', error);
        
    }
}
main();