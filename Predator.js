let LivingCreature = require('./LivingCreature')

module.exports = class Predator extends LivingCreature {
    constructor(x, y, index,) {
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
        var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }
        this.energy--;
        if (this.energy < 0) {
            this.die();
        }


    }
    eat() {
        var grassEaterCells = this.chooseCell(1);
        var newCell = grassEaterCells[Math.floor(Math.random() * grassEaterCells.length)]

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
            this.energy++;

            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;

                }
            }
            if (this.energy >= 4) {
                this.mul();
            }
        } else {
            this.move();
        }
    }
    die() {
        for (var i in PredatorArr) {
            if (this.x == PredatorArr[i].x && this.y == PredatorArr[i].y) {
                PredatorArr.splice(i, 1);
                break;
            }

        }
        matrix[this.y][this.x] = 0;
    }

}
