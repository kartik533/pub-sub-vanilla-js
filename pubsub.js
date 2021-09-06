export const pubsub = {
    events: {},
    subscribe: function(evName, fn) {
        console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
        //add an event with a name as new or to existing list
        this.events[evName] = this.events[evName] || []; // checking events[evName] exists or not
        this.events[evName].push(fn);
    },
    publish: function(evName, data) {
        console.log(`PUBSUB: Making an broadcast about ${evName} with ${data}`);
        //emit|publish|announce the event to anyone who is subscribed
        if (this.events[evName]) {
            for (let callback of this.events[evName]) {
                callback(data)
            }
        }
    }
};
