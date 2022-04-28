class Employee {
    name;
    age;
    nationality;
    constructor(name, age, nationality)
    {
        this.name = name;
        this.nationality = nationality;
        this.age = age;
    }

    show_details()
    {
        console.log("Name : " +  this.name);
        console.log("Age : " + this.age);
        console.log("Nationality : " + this.nationality);
    }
}

module.exports = Employee