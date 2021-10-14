/*Coder House
  Curso de Programación Backend
  Grupo:22885
  Desafio 6
  Erick Omar Sandoval Báez
*/
const express= require("express")

const app= express()

const router = require("./routes/api");
const handlebars = require("express-handlebars");

const msn = [];

const http= require("http");
const server= http.createServer(app)

const port= process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/views'))

const path = require('path')

app.use(express.json());

//routeo a carpeta api
app.use("/api", router);

const {Server}= require("socket.io");
const io= new Server(server);

app.set("views", "./views");
app.set("view engine", "hbs");


app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "main",
    partialsDir:__dirname + "/views/partials"
  })
);


io.on("connection", (socket)=>{
  
  console.log("Usuario conectado")
  socket.emit("message_back", msn)
 // socket.emit("productos",arr)
  socket.on("message_client", (data)=>{
    console.log(data)
  })

  socket.on("data_client", (data)=>{
    
    console.log(data);
    msn.push(data)
    console.log(msn)
    io.sockets.emit("message_back", msn)
  })
})





app.get("/",(req,res)=>{
  res.render("form", msn)
})

// app.post("/", (req,res,socket)=>{

//   let { name, price, thumbnail } = req.body; //Se estructura la forma deseada que debe de tener un artículo nuevo
//   console.log(req.body)
//   let id= arr.length  //Se le agrega el id correspondiente a la posición siguiente con respecto al tamaño del array
//   let prod = { //Se le da estructura al nuevo objeto
//     name,
//     price,
//     thumbnail, 
//     id
//   };
//   arr.push(prod) //Se agrega el objeto al final del array
//   socket.emit("productos", prod)
//   //res.render("form",prod)
// })


//inicialización del servidor
server.listen(port, () => {
    console.log("Server running on port: "+port);
  });