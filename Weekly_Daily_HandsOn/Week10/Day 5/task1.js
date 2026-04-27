"use strict";
function getFirstElement(items) {
    return items[0];
}
class DataManager {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const userManager = new DataManager();
userManager.add({ id: 1, name: "John" });
userManager.add({ id: 2, name: "David" });
console.log(userManager.getAll());
const productManager = new DataManager();
productManager.add({ id: 101, title: "Laptop" });
productManager.add({ id: 102, title: "Mouse" });
console.log(productManager.getAll());
console.log(getFirstElement(userManager.getAll()));
console.log(getFirstElement(productManager.getAll()));
