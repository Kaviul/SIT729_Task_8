const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com:1883', {
    username : process.env.USERNAME,
    password : process.env.PASSWORD 
});
//const client = mqtt.connect('127.0.0.1:1883');

const topic = "/sensor"


client.on("connect", function() {
    setInterval(function(){
        var random = Math.random() * 50;
        console.log(random);
        if (random > 10){
         client.publish(topic, ' ' + random.toString()+".") 
    };
    
}, 5000);
})

