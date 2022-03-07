class Predator {
    constructor(x,y,) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.directions = []; 
     }

    NewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
   }
    chooseCell(character){
        this.NewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == character){
                    found.push(this.directions[i])
                }
            }
        }
        return found;

    }
    mul(){
        var found = this.chooseCell(0);
        var newCell = random(found);
        if(newCell && this.energy >= 10){
            var newX = newCell[0];
            var newX = newCell[1];
            matrix[newY][newX] = 3;
            predatorArr.push(new Predator(newX, newY));
            this.energy = 5;
        }
    }

    

    move(){
        var found = this.chooseCell(0)
        var newCell = random(found);
        if (newCell){
             var newX = newCell[0];
             var newY = newCell[1];
             matrix[newY][newX] = 3;  

             matrix [this.y][this.x] = 0;

             this.x = newX;
             this.y = newY;
        }
        this.energy--;
        if(this.energy < 0){
            this.die();
        }
       

    }
    eat(){
        var found = this.chooseCell(1);
        var newCell = random(found);

        if(newCell){
            var newX = newCell[0];
             var newY = newCell[1];
             matrix[newY][newX] = 3;

             matrix [this.y][this.x] = 0;

             this.x = newX;
             this.y = newY;
             this.energy++;

             for (var i in grassEaterArr) {
                 if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                     
                 }
             }
             if(this.energy >= 30){
                 this.mul();
             }
            }else{
                this.move();
            }
    }
    die(){
        for (var i in predatorArr) {
            if(this.x ==  predatorArr[i].x && this.y ==  predatorArr[i].y){
                predatorArr.splice(i,1);
                break;
            }
            
        }
        matrix[this.y][this.x] = 0;
    }

}
class Guardian {
    constructor(x, y) {
        this.x = x;

        this.y = y;
        this.energy = 15;
        this.multiplay = 0
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        this.energy--
        var emptyCells = this.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.energy >= 0) {

            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }
    eat() {
        var found = this.chooseCell(1);
        var newCell = random(found);
       
        if(newCell){
            // var newX = newCell[0];
            //  var newY = newCell[1];
            //  matrix[newY][newX] = 3;

            //  matrix [this.y][this.x] = 0;

            //  this.x = newX;
            //  this.y = newY;
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY


            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break
                }
            }
        }

  


        else {

            this.move()

        }
        // this.mul()
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in guardianArr) {
            if (this.x == guardianArr[i].x && this.y == guardianArr[i].y) {
                guardianArr.splice(i, 1);
                break;
            }
        }
    }

}


// class Bomb {
//     constructor(x,y,) {
//         this.x = x;
//         this.y = y;
//         this.directions = []; 
//      }
    
//     NewCoordinates(){
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
//         this.NewCoordinates();
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
//     mul() {
//         var found = this.chooseCell(0);
//         var newCell = random(found);
//         if(newCell && this.energy >= 10){
//             var newX = newCell[0];
//             var newX = newCell[1];
//             matrix[newY][newX] = 3;
//             predatorArr.push(new Bomb(newX, newY));
//             this.energy = 5;
//         }
//     }
//     eat(){
//         var found = this.chooseCell(1);
//         var newCell = random(found);

//         if(newCell){
//             var newX = newCell[0];
//              var newY = newCell[1];
//              matrix[newY][newX] = 3;

//              matrix [this.y][this.x] = 0;

//              this.x = newX;
//              this.y = newY;
             
             

            
//             }
//         }
    
// }