const pet = { species: "dog", name: "Fido", age: 1}

function getTriangleArea(a,b){
    return (a*b) /2;
}

function getTriangleHypotenuse(a,b) {
    return Math.sqrt(a ** 2 + b ** 2);
}

//Creating it as a class instead
//We often do validation in the constructor
class Triangle {
    constructor(a, b) {
        //validation
        if (!Number.isFinite(a) || a <= 0)
        throw new Error(`Invalid a: ${a}`)
        if (!Number.isFinite(b) || b <= 0)
        throw new Error(`Invalid b: ${b}; must be a number larger than 0 `)

        this.a = a; 
        this.b = b;
    }
    getArea() {
        return (this.a * this.b) /2;
    }
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
}

//Then create an instance
const myTri = new Triangle(3, 4);


myTri.getArea();    //this does the same as the above

class BankAccount {
    constructor(name, accountNumber, balance =0) {  //set default balance to 0

        if (!isFinite(accountNumber)) {
            throw new Error(`Account number ${accountNumber} is invalid`)
        }

        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    makeDeposit(amt) {
        if(amt > 0){ //You can't deposit a negative amount
          this.balance += amt
          console.log(`Your balance is ${this.balance}`)
        } else {
            console.log('You cannot deposit a negative amount')
        }
    }
    makeWithdraw(amt){
        if (amt > this.balance) { 
            console.log(`You do not have enough funds`)
        }  else {
            this.balance -= amt
            console.log(`Your balance is ${this.balance}`)
        }
    }
}

