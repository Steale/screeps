/**
 * 
 */
var StorageManager = require('StorageManager');
var ScreepCreator = require('ScreepCreator');

var RoomController = {
    run: function(roomName) {
        console.log("RoomController:  ".concat(roomName));
        console.log("Managing Storage at room: ".concat(roomName));
        StorageManager.run(roomName);
        ScreepCreator.run("harvester");
    }
};

module.exports = RoomController;