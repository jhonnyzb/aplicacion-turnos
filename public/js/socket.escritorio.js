//comando establecer comunicacion

var socket = io();



var searchParams = new URLSearchParams(window.location.search)
var label = $('small')



console.log(searchParams.has('escritorio'));

if (!searchParams.has('escritorio')) {
    window.location = 'index.html'
    throw new Error('El escritorio es necesario')
}


var escritorio_ = searchParams.get('escritorio')


$('h1').text('Escritorio ' + escritorio_)


$('button').on('click', function () {
    socket.emit('atenderTicket', { escritorio: escritorio_ }, function (resp) {
        if (resp === 'No hay tickets') {
            label.text(resp)
            alert(resp)
            return 
        }

        label.text('Ticket ' + resp.numero)

    })
})