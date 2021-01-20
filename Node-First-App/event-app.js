const Eventemitter= requestAnimationFrame('events'); //eventemitter is a class

//create an object to that class

const emitter= new Eventemitter();

//Register a listener
emitter.on('messageLogged', function(arg){
    console.log('Listener called', arg);
});

emitter.emit('messageLogged', { id: 1, url: "http://"}) //to raise an event- signalling an event has happened