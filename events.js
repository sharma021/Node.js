var events = require('events');
var util = require('util');
var Person = function(name){
    this.name=name;
};
util.inherits(Person,events.EventEmitter)

var james= new Person('james');
var vidya= new Person('vidya');
var shar= new Person('shar');
var people=[james,vidya,shar];
people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name+' said '+mssg);
    });
});
james.emit('speak',' hey dudes');
vidya.emit('speak',' hello man!');
shar.emit('speak',' yo broo');
//var myemitter = new events.EventEmitter();
//myemitter.on('someEvent',function(msg){
   // console.log(msg);
//});
//myemitter.emit('someEvent','the event was emitted');