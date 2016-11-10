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
                spawnArbeiter('harvester',nameOfRoom)
            }
            if(builder.length < 2 && harvesters.length > 1 && upgrader.length >0) {
              spawnArbeiter('builder',nameOfRoom)
            }    
            if(upgrader.length < 1 && harvesters.length > 1) {
               spawnArbeiter('upgrader',nameOfRoom)
            }  
            //if(builder.length > 0 && harvesters.length > 1 && upgrader.length >0)
            //{
                //baue Erweiterung wenn Level 2 erreicht
            //}
            
        }
}
};

function spawnArbeiter(art,nameOfRoom) {
    var creeps = _.filter(Game.creeps,(creep) => creep.memory.role != null);
    var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE],art+Game.rooms[nameOfRoom].memory.arbeitercount, {role: art});
    Game.rooms[nameOfRoom].memory.arbeitercount = Game.rooms[nameOfRoom].memory.arbeitercount + 1;
   console.log('Spawning neuen: '+art+ ' mit dem Namen ' + newName+'in Raum '+ nameOfRoom );
}


module.exports = spawnmanager;
