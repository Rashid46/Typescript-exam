var list = ['Rashid', 'Shahariar', 'Ratul'];
function add(args) {
    list.push(args);
    return list;
}
function remove(args) {
    var index;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === args)
            index = i;
    }
    list.splice(index, 1);
    return list;
}
function find(args) {
    var index;
    var flag = true;
    for (var i = 0; i < list.length && flag; i++) {
        if (list[i] === args) {
            index = i;
            flag = false;
            var message = args + ' is present at index no: ' + index;
            console.log(message);
        }
    }
    if (flag === true) {
        var message = args + ' is not present in the list';
        console.log(message);
    }
}
console.log(add(40));
console.log(remove(40));
find('Rashid');
find('Selise');
