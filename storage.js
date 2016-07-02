var storageManager = {

run: function(nameOfRoom) {
    //console.log(nameOfRoom);
var avsources = Game.rooms[nameOfRoom].find(FIND_SOURCES);
       var totalAmountOFEnergy = 0;
       avsources.forEach(function(source){
        totalAmountOFEnergy+= source.energyCapacity;
        });
       
       var maxCargoEnergy = totalAmountOFEnergy/4;
       //console.log("Max Cargo: ".concat(maxCargoEnergy));
       //console.log("ENERGY AMOUNT ".concat(totalAmountOFEnergy));
       
       Game.rooms[nameOfRoom].memory.ress = totalAmountOFEnergy;
       Game.rooms[nameOfRoom].memory.scanned = 'true';
}
};

module.exports = storageManager;