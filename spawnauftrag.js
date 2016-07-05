/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawnauftrag');
 * mod.thing == 'a thing'; // true
 */

var spawnmanager = {

run: function(nameOfRoom) {
 if (Game.rooms[nameOfRoom].energyAvailable >= 300)
        {
            var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
            var upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
            var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
            if(harvesters.length < 2) {
                var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE],'Sammler'+(harvesters.length+1).toString(), {role: 'harvester'});
                console.log('Spawning new harvester: ' + newName);
            }
            
           
            if(builder.length < 1 && harvesters.length > 1 && upgrader.length >0) {
                var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE],'Arbeiter'+(builder.length+1).toString(), {role: 'builder'});
                console.log('Spawning new builder: ' + newName);
            }    
           
            if(upgrader.length < 1 && harvesters.length > 1) {
                var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], 'Upgrader'+(upgrader.length+1).toString(), {role: 'upgrader'});
                console.log('Spawning new upgrader: ' + newName);
            }  
            //if(builder.length > 0 && harvesters.length > 1 && upgrader.length >0)
            //{
                //baue Erweiterung wenn Level 2 erreicht
            //}
            
        }
}
};

module.exports = spawnmanager;
