var storageManager = {

run: function(nameOfRoom) {
    //console.log(nameOfRoom);

      
      if (!Game.rooms[nameOfRoom].memory.scanned)  // wird nur ausgeführt wenn "scanned" == "false"
      {
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
      
      
      // Entsheidung ob Storage gebaut werden muss
      
      
}
};

module.exports = storageManager;