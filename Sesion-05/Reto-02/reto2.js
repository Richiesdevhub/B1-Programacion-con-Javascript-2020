var Group = function() {
    this.elements = [];
}
Group.prototype.has = function(number) {
    return this.elements.includes(number);
}
Group.prototype.add = function(number) {
    if (!this.has(number)) {
        this.elements.push(number);
    }
}

Group.from = function(collection) { //Como no esta "prototype" quiere decir que lo declara como valor "static"
    var group = new Group();

    for (var i = 0; i < collection.length; i++) {
        group.add(collection[i]);
    }
    return group;
}
const group = Group.from([1, 2, 3, 4, 5]);
group.add(5);
console.log(group);
console.log(group.has(7));