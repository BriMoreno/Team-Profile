const employee = require("./employee");

class enginner extends employee {
    constructor(id, name, email,gitHub) {
        super(id,name,email);
        this.gitHub = gitHub;
    }

    returnHub() {
        return this.gitHub;
    }

    role() {
        return 'Engineer';
    }
}

module.exports = enginner;