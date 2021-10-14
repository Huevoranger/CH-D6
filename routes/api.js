/*Coder House
Curso backend
Grupo: 22885
Nombre: Erick Omar Sandoval Báez
DESAFIO 5*/
const { application } = require("express");
const express = require("express");
const handlebars= require("express-handlebars")

//Inicialización a router
const { Router } = express;
const router = new Router();


router.get("/", (req, res) => {
  console.log(req.body)
  res.render("index");
});

//Valores iniciales solamente para prueba
const arr = [
  {
    name: "Avengers",
    price: 3000,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/geek-3/24/Avengers_marvel_movie_comic_book_action-128.png",
    id:0
  },
  {    
    name: "Flash",
    price: 2000,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/geek-3/24/Flash_dc_comic_book_movie-128.png",
    id:1
  },
  {    
    name: "Pi",
    price: 1000,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/geek-3/24/Pi_math_mathematics-256.png",
    id:2
  },
];

router.get("/productos",(req,res)=>{
  res.redirect("/")
})

// //Agregar un producto
router.post("/productos", (req, res) => {
  let { name, price, thumbnail } = req.body; //Se estructura la forma deseada que debe de tener un artículo nuevo
  //console.log(req.body)
  let id= arr.length  //Se le agrega el id correspondiente a la posición siguiente con respecto al tamaño del array
  let obj = { //Se le da estructura al nuevo objeto
    name,
    price,
    thumbnail, 
    id
  };
  arr.push(obj) 
  console.log(arr)//Se agrega el objeto al final del array
  res.render("form",{data:arr})

});


module.exports = router;