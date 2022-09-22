class employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    returnId() {
        return this.id;
    }
    returnName() {
        return this.name;
    }
    returnEmail() {
        return this.email;
    }
    role() {
        return 'Employee';
    }
}

module.exports = employee;