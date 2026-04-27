class Employee {
    public id: number;
    protected name: string;
    private salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(value: number): void {
        if (value > 0) {
            this.salary = value;
        }
    }

    displayDetails(): void {
        console.log(`Employee ID: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    }
}

class Manager extends Employee {
    teamSize: number;

    constructor(id: number, name: string, salary: number, teamSize: number) {
        super(id, name, salary);
        this.teamSize = teamSize;
    }

    displayDetails(): void {
        console.log(`Employee ID: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);
        console.log(`Salary: ${this.getSalary()}`);
        console.log(`Team Size: ${this.teamSize}`);
    }
}

const emp1 = new Employee(101, "John", 50000);

emp1.displayDetails();

emp1.setSalary(55000);

console.log(emp1.getSalary());

const mgr1 = new Manager(201, "David", 80000, 10);

mgr1.displayDetails();



