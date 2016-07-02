/**
 * 
 */
var screepCreator = {

    run: function(screepType) {
       console.log(screepType);
       if (screepType == "Harvester") {
         
       }
    }

};

module.exports = screepCreator;

function createCreep(ScreepSpawn, ScreepType , ScreepName)
{
    if(ScreepType == "harvester")
    {
        Game.spawns.ScreepSpawn.createCreep( [WORK, CARRY, MOVE], ScreepName);
    }
}