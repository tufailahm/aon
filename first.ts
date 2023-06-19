const log = <T>(originalConstructor: new (...args: Employee[]) => T) => {
    function newConstructor(...args) {
        console.log("Arguments: ", args.join(", "));
        document.body.innerHTML ="Arguments: ", args.join(", ")
        new originalConstructor(args);
    }
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
}

@log
class Employee
{
    employeeName:string = "Tufail"
    salary:number = 96000
    department :string

    constructor(eName:string,salary:number){
        this.employeeName = eName
        this.salary = salary
    }
}

let emp= new Employee("Uday","PP")

@log
class Customer {
     cName : string ;
     billAmount : number;
     constructor(n,b){
        this.cName = n;
        this.billAmount = b;
     }
}

let c = new Customer("Pra",89);