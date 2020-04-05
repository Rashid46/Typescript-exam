var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 100] = "Red";
    Colors[Colors["Green"] = 200] = "Green";
    Colors[Colors["Blue"] = 300] = "Blue";
    Colors[Colors["Yellow"] = 400] = "Yellow";
})(Colors || (Colors = {}));
function getColorName(value) {
    if (value === Colors.Red)
        return 'Red';
    else if (value === Colors.Green)
        return 'Green';
    else if (value === Colors.Blue)
        return 'Blue';
    else if (value === Colors.Yellow)
        return 'Yellow';
    else
        return "Undefined";
}
var colorName = getColorName(150);
console.log(colorName);
