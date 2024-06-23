/* При переводе в сантиметры (не округляя величину) не получается полностью "закрыть" фигуру, данную в примере.
Для того чтобы её закрыть нужно разделить на 100 (перевести в сантиметры) и округлить вверх каждую величину
*/
class Figure {
    constructor(length, angle){
        this.length = length;
        this.angle = angle;
    }
}
let arrayOfFigure = [
    new Figure(1665, 0),
    new Figure(947, 90),
    new Figure(557, 0),
    new Figure(1300, 90),
    new Figure(2225, 180),
    new Figure(2239, 270),

]
class Cords {
    constructor(abs, ord){
        this.abs = abs;
        this.ord = ord;
    }
}
function cordCount(array){
    const currentCord = new Cords(0,0);
    let length;
    let angle;
    let pointNumber = 1;
    for (i of array){
        angle = i.angle * (Math.PI / 180); 
        length = Math.ceil((i.length/100)); // перевожу из мм в см и округляю вверх
        currentCord.abs = currentCord.abs + Math.cos(angle).toFixed(2) * length;
        /* 
        При наклонной линии координата по x - прилежащий катет, для его вычисления нужно
        гипотенузу (данную величину отрезка) умножить на косинус угла наклона этого отрезка
        */
        currentCord.ord = currentCord.ord + Math.sin(angle).toFixed(2) * length; // соответственно синус угла на длину отрезка
        console.log(`Координаты точки ${pointNumber}: ${currentCord.abs}, ${currentCord.ord}`);
        pointNumber++;
    }
}
cordCount(arrayOfFigure);