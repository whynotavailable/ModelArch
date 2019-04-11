class Diag
{
    constructor() {
        this.objects = [];
        this.connections = [];
        this.eventer = new Eventer();
        this.on = this.eventer.on.bind(this.eventer);
    }

    init(opts = {}) {
        this.opts = Object.assign(defaults(), opts);

        this.eventer.dispatch("init", "what");
    }
}

function defaults() {
    return {

    }
}

/*
#Modes
- Regular
this is the move/resize/select mode
- Add
This is the add object mode. If you create an object ontop of another one it will make a connection
automatically
- Connect
This is the connection mode, you select one-then another object to make a connection.

#Events
We expose a bunch of events.
- init
- objectSelected
- connectionSelected

*/
