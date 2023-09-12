const  mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com:1883', {
    username : process.env.USERNAME,
    password : process.env.PASSWORD  
});
//const client = mqtt.connect('127.0.0.1:1883');
const topic = "/sensor";

client.on("connect", function () {
    client.subscribe(topic);
    console.log("Mqtt connected. Client is subscribed to the topic successfully!");

});

client.on('message', (topic, message) => {
    console.log('Topic is: ' + topic);
    console.log('Message is: ' + message.toString());
    
  });