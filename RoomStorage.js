var Storage = {

    /** @param {Creep} creep **/
    run: function(currRoom) {
       console.log("Room in Storage: ".concat(Game.rooms[currRoom]));
       console.log(calculateMaxEnergyFromSources(currRoom));
    } 
    
    
    
};

function checkAmountOfStoragesBuild(aRoom)
{
    /** Muss abfrage ob genügend Speicher gebaut wurden noch implementieren.
    if()
    {
        return true;
    }
    return false;
    **/
}

function calculateMaxEnergyFromSources(aRoom)
    {
        var totalAmountofEnergy = 0;
        var availableSources = Game.rooms[aRoom].find(FIND_SOURCES);
        availableSources.forEach(function(source){
            totalAmountofEnergy+=source.energyCapacity;
        });
        return totalAmountofEnergy;
    }

module.exports = Storage;