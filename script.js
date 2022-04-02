var socket = io()
var side =20
function setup() {
    
    createCanvas(50 * side, 50 * side)
    background('#acacac')
}
    function drw(matrix) {
        for (let y = 0; y < matrix[0].length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 0) {
                    fill('#acacac')
                } else if (matrix[y][x] == 1) {
                    fill("#00ff00")
                } else if (matrix[y][x] == 2) {
                    fill("#FFF323")
                } else if (matrix[y][x] == 3) {
                    fill("red")
                }else if (matrix[y][x] == 4) {
                    fill("orange")
                }

                rect(x * side, y * side, side, side)


            }


        }
        

    }
socket.on("send matrix", drw)
   

    // console.log(grassArr);
    // console.log(grassEaterArr);
    // // console.log(predatorArr);
    // console.log(guardianArr);


 function kill() {
        socket.emit("kill")
    }
    function addGrass() {
        socket.emit("add grass")
    }
    function addGrassEater() {
        socket.emit("add grassEater")
    }
    function addPredator() {
        socket.emit("add Predator")
    }
    function addGuardian() {
        socket.emit("add Guardian")
    }

