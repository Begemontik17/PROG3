let LivingCreature = require('./LivingCreature')

module.exports = class Guardian extends LivingCreature {
    constructor(x, y, index, multi) {
        super(x, y, index);
        this.energy = 18
    }
    mul() {
        var emptyCells = super.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2
            PredatorArr.push(new Predator(newX, newY, 2))
            this.energy = 6;
        }
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
        var PredatorCells = this.chooseCell(1);
        var newCell = PredatorCells[Math.floor(Math.random() * PredatorCells.length)]

        if (newCell) {

            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 4
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
        for (var i in GuardianArr) {
            if (this.x == GuardianArr[i].x && this.y == GuardianArr[i].y) {
                GuardianArr.splice(i, 1);
                break;
            }
        }
    }

}