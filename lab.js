const person = {
    firstName: 'Naruto',
    lastName: 'Uzumaki',
    id: 500,

    fullName: function () {
        let fullName = `${this.firstName} ${this.lastName}`;
        return fullName.toUpperCase();
    }
}
console.log(person.fullName());