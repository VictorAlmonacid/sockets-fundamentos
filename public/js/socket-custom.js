var socket = io();
        // escuchar ¿
        socket.on('connect', function(){
            console.log('conectado al servidor');

        });

        socket.on('disconnect', function(){
            console.log('Perdimos conexion con el servidor');

        });

        // emitir informacion
        socket.emit('enviarMensaje', {
            usuario: 'Victor',
            mensaje: 'Hola mundo'
        }, function (resp){
            console.log('respuesta server: ', resp);
        });

        // escuchar informacion
        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor: ', mensaje);

        });