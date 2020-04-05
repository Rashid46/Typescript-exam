enum Colors {
    Red = 100,
    Green = 200,
    Blue = 300,
    Yellow = 400
}

function getColorName(value: number) {
    if(value === Colors.Red) return 'Red';
    else if(value === Colors.Green) return 'Green';
    else if(value === Colors.Blue) return 'Blue';
    else if(value === Colors.Yellow) return 'Yellow';
    else return "Undefined"
}

let colorName: any = getColorName(150);
console.log(colorName);