import { Producto } from "../models/producto.models.js";

export const controllerHome = async (req, res) => {
  let productos = await Producto.findAll({
    raw: true, 
    order: [
      ["nombre","ASC"]
    ]
  });
  console.log(productos)
  res.render("home", {
    productos
  });
  }

  export const controllerProductos = async (req, res) => {
    let productos = await Producto.findAll({
      order: [
        ["nameProduct","ASC"]
      ]
    })
    res.render("productos", {
      productos
    })
  }

  export const controllerInventario = async (req, res) => {
    let productos = await Producto.findAll({
      raw: true,
      order: [
        ["nameProduct","ASC"]
      ]
    })
    res.render("inventario", {
      id_modal : 'modal_inventario',
      productos :productos
    })
  }
  
  export const controllerCarro = async (req, res) => {
    res.render("carro");
  }