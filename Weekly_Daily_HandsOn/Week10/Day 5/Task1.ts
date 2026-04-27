function getFirstElement<T>(items: T[]): T {
    return items[0];
}

interface Repository<T> {
    add(item: T): void;
    getAll(): T[];
}

class DataManager<T> implements Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

interface User {
    id: number;
    name: string;
}

interface Product {
    id: number;
    title: string;
}

const userManager = new DataManager<User>();

userManager.add({ id: 1, name: "John" });
userManager.add({ id: 2, name: "David" });

console.log(userManager.getAll());

const productManager = new DataManager<Product>();

productManager.add({ id: 101, title: "Laptop" });
productManager.add({ id: 102, title: "Mouse" });

console.log(productManager.getAll());

console.log(getFirstElement(userManager.getAll()));
console.log(getFirstElement(productManager.getAll()));