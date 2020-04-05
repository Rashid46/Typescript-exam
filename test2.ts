var list: any = ['Rashid', 'Shahariar', 'Ratul'];

function add<T>(args: T): T {
    list.push(args);
    return list;
}

function remove<T>(args: T): T {
    let index;
    for(var i = 0; i<list.length; i++) {
        if(list[i] === args) index = i;
    }
    list.splice(index, 1);
    return list;
}

function find<T>(args: T) {
    let index: number;
    let flag: boolean = true;
    for(var i = 0; i<list.length && flag; i++) {
        if(list[i] === args) {
            index = i;
            flag = false;
            let message: string = args + ' is present at index no: ' + index;
            console.log(message);
        }
    }
    if(flag === true) {
        let message: string = args + ' is not present in the list';
            console.log(message);
    }
}

console.log(add(40));
console.log(remove(40));
find('Rashid');
find('Selise');

