const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com:1883', {
    username : process.env.USERNAME,
    password : process.env.PASSWORD 
});


const topic = "/sensor"


client.on("connect", function() {
    setInterval(function(){
        var random = Math.random() * 50;
        console.log(random);
        if (random > 10){
         client.publish(topic, ' ' + random.toString()+".") 
    };
    
}, 1000);
})

