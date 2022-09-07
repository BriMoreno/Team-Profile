const employee = require("./employee");

class manager extends employee {
    constructor(id, name, email, office) {
        super(id, name, email);
        this.office = office;
    }
    returnOffice() {
        return this.office;
    }

    role() {
        return 'Manager';
    }
}

module.exports = manager;