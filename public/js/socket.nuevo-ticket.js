
//comando establecer comunicacion

var socket = io();

var label = $('#lblNuevoTicket')

socket.on('connect', function() {
    console.log('conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('desconectado al servidor');
})


socket.on('estadoActual', function (resp) {
   label.text(resp.actual) 
})

$('button').on('click', function () {
  socket.emit('siguienteTicket', null, function (siguienteticket) {
      label.text(siguienteticket)
  })
})
