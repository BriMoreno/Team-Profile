const employee = require("./employee");

class enginner extends employee {
    basicInfo(id, name, email,gitHub) {
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