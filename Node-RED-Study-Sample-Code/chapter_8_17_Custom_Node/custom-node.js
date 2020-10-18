module.exports = function(RED) {
    function DateTrans(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var timestamp = msg.payload;
            msg.payload = new Date(timestamp).toString();
            node.send(msg);
        });
    }
    RED.nodes.registerType("timestamp-to-date", DateTrans );
}