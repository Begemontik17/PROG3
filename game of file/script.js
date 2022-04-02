const matrix = [
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 4, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 3, 0, 0, 1, 2, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 2, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 2, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 3, 0, 4, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],


]
const side = 30;
var grassEaterArr = [];
var grassArr = [];
var predatorArr = [];
var guardianArr = [];
var bombArr = [];
// var granadArr = [];


function generator(matrixSize, grassCount, grassEaterCount, predatorCount, guardianCount) {
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        matrix [i] = [];
        for (let j = 0; j < matrixSize; j++) {
            matrix[i][j] = 0;
            
        }
        
    }
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random(matrixSize))
        let y = Math.floor(Math.random(matrixSize))
            matrix[x][y] = 1;
            
        }
    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random(matrixSize))
        let y = Math.floor(Math.random(matrixSize))
            matrix[x][y] = 2;
                
        }
    for (let i = 0; i < predatorCount; i++) {
         let x = Math.floor(Math.random(matrixSize))
        let y = Math.floor(Math.random(matrixSize))
            matrix[x][y] = 3;
                    
        } 
        for (let i = 0; i < guardianCount; i++) {
            let x = Math.floor(Math.random(matrixSize))
           let y = Math.floor(Math.random(matrixSize))
               matrix[x][y] = 4;
                       
           } 
               
       

    }
    
       
           
   

    


function setup() {
    generator(10,15,3)
    frameRate(10)
    createCanvas(matrix[0].length * side, matrix.length * side)
    background('#acacac')
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y))

            }else if (matrix[y][x] == 2) {
                grassEaterArr.push(new GrassEater(x, y))
            
            }else if (matrix[y][x] == 3) {
                predatorArr.push(new Predator(x, y))
            
            }
            else if (matrix[y][x] == 4) {
                guardianArr.push(new Guardian(x, y))
            
            }
            else if (matrix[y][x] == 5) {
                bombArr.push(new Bomb(x, y))
            
            }
            // else if (matrix[y][x] == 6) {
            //     granadArr.push(new Granad(x, y))
            
            // }
            
            }

        }

        
    }

  


    function draw() {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 0) {
                    fill('#acacac')
                } else if (matrix[y][x] == 1) {
                    fill("#00ff00")
                }else if (matrix[y][x] == 2) {
                              fill("#FFF323")
                }else if (matrix[y][x] == 3) {
                    fill("red")
                }else if (matrix[y][x] == 4) {
                    fill("black")
                }
                else if (matrix[y][x] == 5) {
                    fill("blue")
                }   
                // else if (matrix[y][x] == 6) {
                //     fill("orange")
                // } 
                

                    rect(x * side, y * side, side, side)

                    
            }
           

            }
            for (const g in grassArr) {
                grassArr[g].mul()

            }
            for (const g in grassEaterArr) {
                grassEaterArr[g].eat()
            }
            for(const g in predatorArr){
                predatorArr[g].eat()
            }
            for(const g in guardianArr){
                guardianArr[g].eat()
            }
            for(const g in bombArr){
                bombArr[g].eat()
            }
            // for(const g in granadArr){
            //     granadArr[g].eat()
            // }
            


        }
        console.log(grassArr);
        console.log(grassEaterArr);
        console.log(predatorArr);
        console.log(guardianArr);
        
    

