const { v4: uuidV4 } = require('uuid')

class Band {
    constructor(name = 'no-name') {
        this.id = uuidV4(); // Id único
        this.name = name;
        this.vote = 0;
    }
}

module.exports = Band;