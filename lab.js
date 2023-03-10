const person = {
    firstName: 'Naruto',
    lastName: 'Uzumaki',
    id: 500,
    today: new Date(),
    myArr: ['A', 'B', 'C'],
    fullName: function () {
        let fullName = `${this.firstName} ${this.lastName}`;
        return fullName.toUpperCase();
    }
}
console.log(JSON.stringify(person));

