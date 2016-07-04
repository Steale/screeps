var RoomController = require('RoomController');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function() {

            //RoomLoop
	for ( var name in Game.rooms) {
		RoomController.run(name);
	}


	  for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

for(var name in Game.rooms) {
        if (Game.rooms[name].energyAvailable >= 300)
        {
            var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
            if(harvesters.length < 2) {
                var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE],'Sammler'+(harvesters.length+1).toString(), {role: 'harvester'});
                console.log('Spawning new harvester: ' + newName);
            }
            
            var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
            if(builder.length < 1 && harvesters.length > 1) {
                var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE],'Arbeiter'+(builder.length+1).toString(), {role: 'builder'});
                console.log('Spawning new builder: ' + newName);
            }    
            var upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
            if(upgrader.length < 1 && harvesters.length > 1) {
                var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], 'Upgrader'+(upgrader.length+1).toString(), {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
            }  
        }
}
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }

}