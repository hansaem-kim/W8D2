function Cat(name, owner) {
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
    return `${this.owner} loves ${this.name}`
}

cat1 = new Cat("kitty", "jack")
cat2 = new Cat("meow", "mike")
cat3 = new Cat("nitty", "han")

// console.log(cat1.cuteStatement());

Cat.prototype.meow = function() {
    return `${this.name} meow`
}

// console.log(cat1.meow());

cat1.meow = function() {
    return `${this.name} not meow`
}

console.log(cat1.meow())