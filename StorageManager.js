var Storage = require('RoomStorage');


var storageManager = {

    run: function(roomName) {
        var room = roomName;
        console.log("RoomName: ".concat(room));
            Storage.run(room);
    }

};

module.exports = storageManager;