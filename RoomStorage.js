var nameOfRoom;
var Storage = {

    /** @param {Creep} creep **/
    run: function (currRoom) {
        nameOfRoom = currRoom;
        if(!checkIFRoomWasScanned)
        {
            scanRoomInitally();
        }
        console.log("Room in Storage: ".concat(Game.rooms[currRoom]));
        console.log(calculateMaxEnergyFromSources(currRoom));
    }
};

function checkIFRoomWasScanned()
{
    if(Game.rooms[nameOfRoom].memory.scanned)
    {
        return true;
    }
    return false;
}

function scanRoomInitally() {
    saveRoomEnergyAmountToMemory(calculateMaxEnergyFromSources());
    setRoomScannedToTrue();
}

function saveRoomEnergyAmountToMemory(amountOfEnergy) {
    Game.rooms[nameOfRoom].memory.ress = amountOfEnergy;
}

function setRoomScannedToTrue() {
    Game.rooms[nameOfRoom].memory.scanned = 'true';
}

function checkAmountOfStoragesBuild() {
    /** Muss abfrage ob genügend Speicher gebaut wurden noch implementieren.
    if()
    {
        return true;
    }
    return false;
    **/
}

function calculateMaxEnergyFromSources() {
    var totalAmountofEnergy = 0;
    var availableSources = Game.rooms[nameOfRoom].find(FIND_SOURCES);
    availableSources.forEach(function (source) {
        totalAmountofEnergy += source.energyCapacity;
    });
    return totalAmountofEnergy;
}

module.exports = Storage;