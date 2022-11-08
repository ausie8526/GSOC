// Importing events
const EventEmitter = require('events');

// Initializing event emitter instances
var eventEmitter = new EventEmitter();

// Register to error
eventEmitter.on('error', (err) => {
	console.error('Attention! There was an error');
});

// Register to newListener
eventEmitter.on( 'newListener', (event, listener) => {
	console.log(`The listener is added to ${event}`);
});

// Register to removeListener
eventEmitter.on( 'removeListener', (event, listener) => {
	console.log(`The listener is removed from ${event}`);
});

// Declaring listener emit1 to myEvent1
var emit1 = (msg) => {
	console.log("Message from emit1: " + msg);
};

// Declaring listener emit2 to myEvent2
var emit2 = (msg) => {
	console.log("Message from emit2: " + msg);
};

// Listening to myEvent with emit1 and emit2
eventEmitter.on('myEvent', emit1);
eventEmitter.on('myEvent', emit2);

// Removing listener
eventEmitter.off('myEvent', emit1);

// Triggering myEvent
eventEmitter.emit('myEvent', 'Event occurred');

// Triggering error
eventEmitter.emit('error', new Error('Attention!'));
