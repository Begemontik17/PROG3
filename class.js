// let LivingCreature = require('./LivingCreature');
// module.exports = class Grass extends LivingCreature{
//     constructor(x, y, index, multiply) {
//         super(x, y, index, multiply);
//     }
//     mul() {
//         this.multiply++;
//         if (this.multiply >= 5) {
//             let emptyCells = super.chooseCell(0)
        
//             let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
//             if (this.multiply >= 5 && newCell) {
//                 let x = newCell[0]
//                 let y = newCell[1]
//                 var gr = new Grass(x, y, 1)
//                 grassArr.push(gr)
//                 this.multiply = 0;
//             }
//         }
//     }
// }


// class Grass extends LivingCreature {

//     mul() {
//         this.multiply++;
//         var newCell = random(this.chooseCell(0));
//         if (this.multiply >= 8 && newCell) {
//             var newGrass = new Grass(newCell[0], newCell[1], this.index);
//             grassArr.push(newGrass);
//             matrix[newCell[1]][newCell[0]] = this.index;
//             this.multiply = 0;
//         }
//     }
// }

// class GrassEater {
//     constructor(x,y,) {
//         this.x = x;
//         this.y = y;
//         this.energy = 12;
//         this.directions = []; 
//      }

//     getNewCoordinates(){
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x    , this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y    ],
//             [this.x + 1, this.y    ],
//             [this.x - 1, this.y + 1],
//             [this.x    , this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//    }
//     chooseCell(character){
//         this.getNewCoordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
//                 if(matrix[y][x] == character){
//                     found.push(this.directions[i])
//                 }
//             }
//         }
//         return found;

//     }



// class GrassEater extends LivingCreature {
//     constructor(x, y, index) {
//         super(x, y, index);
//         this.energy = 5;
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
    // chooseCell(character) {
    //     this.getNewCoordinates();
    //     return super.chooseCell(ch);

    // }
//     mul() {
//         var found = this.chooseCell(0);
//         var newCell = random(found);
//         if (newCell && this.energy >= 20) {
//             var newX = newCell[0];
//             var newX = newCell[1];
//             matrix[newY][newX] = 2;
//             grassEaterArr.push(new GrassEater(newX, newY));
//             this.energy = 100;
//         }
//     }



//     move() {
//         var found = this.chooseCell(0)
//         var newCell = random(found);
//         if (newCell) {
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = 2;

//             matrix[this.y][this.x] = 0;

//             this.x = newX;
//             this.y = newY;

//             this.energy--;
//             if (this.energy < 0) {
//                 this.die();
//             }
//         }

//     }
//     eat() {
//         var found = this.chooseCell(1);
//         var newCell = random(found);

//         if (newCell) {
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = 2;

//             matrix[this.y][this.x] = 0;

//             this.x = newX;
//             this.y = newY;
//             this.energy++;

//             for (var i = 0; i < grassArr.length; i++) {
//                 if (newX == grassArr[i].x && newY == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                     break;

//                 }
//             }
//             if (this.energy >= 30) {
//                 this.mul();
//             }
//         } else {
//             this.move();
//         }
//     }
//     die() {
//         for (var i in grassEaterArr) {
//             if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
//                 grassEaterArr.splice(i, 1);
//                 break;
//             }

//         }
//         matrix[this.y][this.x] = 0;
//     }



// }
// eat, mul, move, die




