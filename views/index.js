/*Coder House
  Curso de Programación Backend
  Grupo:22885
  Desafio 6
  Erick Omar Sandoval Báez
*/
const socket = io();
let fecha= new Date()

//Inicialización de chat
socket.on("message_back", (data) => {
  alert("Profe, funciona el chat y la lista por separados pero no juntos :(")
  console.log(data);
  let fecha_dis= fecha.getFullYear()+'/'+(fecha.getMonth()+1)+'/'+fecha.getDate()+" "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
  render(data,fecha_dis);
  socket.emit("message_client", "Hola servidor!");
});

//render del chat
const render = (data,fecha_disp,arr) => {
  
  let html = data

    .map((x) => {
      return `
            <p style="color: #5555FF">  <strong>${x.nombre} </strong> <a style="color:#CCD2BF" "font-size: 8px"> ${fecha_disp}</a>:  <a style="color:white">${x.msn}</a></p> 
                    `;
    })
    .join(" ");

  document.querySelector("#caja").innerHTML = html;
};

//Agregar recepción del mensaje de chat
const addMsn = () => {
    console.log("Hola")

    let obj = {
        nombre : document.querySelector("#nb").value,
        msn : document.querySelector("#msn").value
    }
    socket.emit("data_client", obj)

    document.querySelector("#msn").value = ""

    return false
}
