//import mqtt from 'mqtt';
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com:1883', {
    username : process.env.USERNAME,
    password : process.env.PASSWORD 
});
const topic = "/sensor"

//const clientURL = "https://f1dbe2876e3e4e4081714e42c9216f74.s1.eu.hivemq.cloud"


client.on("connect", function() {
    setInterval(function(){
        var random = Math.random() * 50;
        console.log(random);
        if (random > 10){
         client.publish(topic, "The data is : "+random.toString()+".") 
    };
    
}), 1000
})

