class Eventer
{
    constructor() {
        this.events = {};
    }

    on(event, func) {
        this.validateEvent(event);

        this.events[event].push(func);
    }

    dispatch(event, data) {
        this.validateEvent(event);

        for(let func of this.events[event]) {
            func(data);
        }
    }

    validateEvent(event) {
        if(this.events[event] === void 0) {
            this.events[event] = [];
        }
    }
}
