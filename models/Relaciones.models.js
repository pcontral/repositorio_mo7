// IMPORTAR LOS MODELOS

import { Producto } from "./producto.models.js";
import { Carro } from "./Carro.models.js";
import { DetalleCarro } from "./DetalleCarro.models.js";
import { Usuario } from "./Usuarios.models.js";
import { Venta } from "./Ventas.models.js";
import { DetalleVenta } from "./DetalleVentas.models.js";

//RELACION CARRO A DETALLE
Carro.hasMany(DetalleCarro);
DetalleCarro.belongsTo(Carro);

//RELACION CARRO A USUARIO
Usuario.hasMany(Carro)
Carro.belongsTo(Usuario)

//RELACION DETALLE CARRO CON PRODUCTOS
Producto.hasMany(DetalleCarro);
DetalleCarro.belongsTo(Producto); 

//RELACION VENTA A DETALLE
Venta.hasMany(DetalleVenta);
DetalleVenta.belongsTo(Venta);

//RELACION VENTA A USUARIO
Usuario.hasMany(Venta)
Venta.belongsTo(Usuario)

//RELACION DETALLE VENTA CON PRODUCTOS
Producto.hasMany(DetalleVenta);
DetalleVenta.belongsTo(Producto);