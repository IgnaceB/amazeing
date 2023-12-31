// DEFINING global variables

// defining container and styling it
const container = document.querySelector("main")
container.style = 'display: flex;width: 100%;flex-wrap: wrap;'
document.body.style = 'margin:0; width:100vw;background-color:black;'

//defining my array fill with my enemy object
let initEnemy = []

//creating sliders parametre maze
const sliderHeight = document.createElement("input")
const sliderWidth = document.createElement("input")
const sliderPath = document.createElement("input")

sliderHeight.type = "range"
sliderHeight.min = 4
sliderHeight.max = 150
sliderHeight.defaultValue = "50"
sliderHeight.id = "height"

sliderWidth.type = "range"
sliderWidth.min = 4
sliderWidth.max = 150
sliderWidth.defaultValue = "50"
sliderWidth.id = "width"

sliderPath.type = "range"
sliderPath.min = 2
sliderPath.max = 400
sliderPath.defaultValue = "100"
sliderPath.id = "path"

document.body.prepend(sliderHeight)
document.body.prepend(sliderWidth)
document.body.prepend(sliderPath)



//Creating a random pattern for the maze
const randomMaze = () => {
    // Randomize size and setting parametre for possible slabs
    let height = Math.floor((Math.random() * 200)) + 5
    let width = Math.floor((Math.random() * 200)) + 5
    if (document.getElementById("height") != null) {
        height = document.getElementById("height").value
        width = document.getElementById("width").value
    }
    const TypeOfSlab = ["*", ".", "S", "T"]
    let randomLevel = []

    //Looping on the height, to create each array inside randomLevel
    for (let i = 0; i < height; i++) {
        randomLevel[i] = new Array
        // Looping on the width, to create each box inside randomLevel[i]
        for (let j = 0; j < width; j++) {
            randomLevel[i][j] = 0
        }
    }

    // setting a start
    let x = Math.floor(Math.random() * height / 10)
    let y = Math.floor(Math.random() * width / 10)
    console.log(x, y, randomLevel)
    randomLevel[x][y] = "S"
    console.log(x + "/" + y)

    // setting the path from the start
    // how long should be the main path : 
    let pathSize = Math.floor(Math.random() * (width + height) * 2 + (width + height))

    if (document.getElementById("path") != null) {
        pathSize = document.getElementById("path").value
    }
    console.log("pathSize=" + pathSize)
    // init the case where you were / are / will be 
    // previous = slab you are
    // TwoBefore = slab you where
    // X = slab you will be 
    let previousX = 0
    let previousY = 0

    //Looping on the pathSize
    for (let i = 0; i < pathSize; i++) {

        //update position
        let TwoBeforeX = previousX
        let TwoBeforeY = previousY
        previousX = x
        previousY = y

        // random vertical ou horizontal
        if (Math.random() < 0.5) {
            if (Math.random() < 0.65) {
                //check previous position and walls and increment new position
                // if (TwoBeforeX - previousX < 0 && previousX + 1 <= width) {
                if (previousX + 1 < height && randomLevel[previousX + 1][previousY] == "") {
                    x = previousX + 1
                }
                else if (previousX - 1 >= 0 && randomLevel[previousX - 1][previousY] == "") {
                    x = previousX - 1
                }
                else if (previousY + 1 <= width && randomLevel[previousX][previousY + 1] == "") {
                    y = previousY + 1
                }
                else if (previousY - 1 <= width && randomLevel[previousX][previousY + 1] == "") {
                    y = previousY - 1
                }
                else {
                    x = TwoBeforeX
                    y = TwoBeforeY
                }
            }
            else {
                //check previous position and walls and increment new position
                // if (TwoBeforeX - previousX < 0 && previousX + 1 <= width) {
                if (previousX - 1 >= 0 && randomLevel[previousX - 1][previousY] == "") {
                    x = previousX - 1
                }
                else if (previousX + 1 < height && randomLevel[previousX + 1][previousY] == "") {
                    x = previousX + 1
                }
                else if (previousY + 1 <= width && randomLevel[previousX][previousY + 1] == "") {
                    y = previousY + 1
                }
                else if (previousY - 1 <= width && randomLevel[previousX][previousY + 1] == "") {
                    y = previousY - 1
                }
                else {
                    x = TwoBeforeX
                    y = TwoBeforeY
                }
            }
        }

        // random vertical ou horizontal
        else {
            if (Math.random() < 0.8) {
                //check previous position and walls and increment new position
                // if (TwoBeforeY - previousY < 0 && previousY + 1 <= height) {
                if (previousY + 1 <= width && randomLevel[previousX][previousY + 1] == "") {

                    y = previousY + 1
                }
                else if (previousY - 1 >= 0 && randomLevel[previousX][previousY - 1] == "") {

                    y = previousY - 1
                }
                else if (previousX + 1 < height && randomLevel[previousX + 1][previousY] == "") {

                    x = previousX + 1
                }
                else if (previousX - 1 >= 0 && randomLevel[previousX - 1][previousY] == "") {

                    x = previousX - 1
                }
                else {

                    x = TwoBeforeX
                    y = TwoBeforeY
                }
            }
            else {
                //check previous position and walls and increment new position
                // if (TwoBeforeY - previousY < 0 && previousY + 1 <= height) {
                if (previousY - 1 >= 0 && randomLevel[previousX][previousY - 1] == "") {

                    y = previousY - 1
                }
                else if (previousY + 1 <= width && randomLevel[previousX][previousY + 1] == "") {

                    y = previousY + 1
                }
                else if (previousX + 1 < height && randomLevel[previousX + 1][previousY] == "") {

                    x = previousX + 1
                }
                else if (previousX - 1 >= 0 && randomLevel[previousX - 1][previousY] == "") {

                    x = previousX - 1
                }
                else {

                    x = TwoBeforeX
                    y = TwoBeforeY
                }
            }
        }
            // pushing the value path inside the array
        randomLevel[x][y] = "."
    }

    for (let i = 0; i < randomLevel.length; i++) {
        console.log("alternative path row" + i)
        console.log(randomLevel.length)
        for (let j = 0; j < randomLevel[0].length; j++) {
            console.log("analye cellule")
            if (randomLevel[i][j] == "." && Math.random() < (0.1)) {
                console.log("ALTERNATIVE PATH PATH PATH" + i + "" + j)
                let pathSizeB = Math.floor(Math.random() * (pathSize) / 3)
                console.log("PathSizeB" + pathSizeB)
                // init the case where you were / are / will be 
                // previous = slab you are
                // TwoBefore = slab you where
                // X = slab you will be 
                let previousW = i
                let previousZ = j
                let w = previousW
                let z = previousZ

                //Looping on the pathSize
                for (let k = 0; k < pathSizeB; k++) {

                    //update position
                    let TwoBeforeW = previousW
                    let TwoBeforeZ = previousZ
                    previousW = w
                    previousZ = z

                    // random vertical ou horizontal
                    if (i > (randomLevel.length / 2)) {

                        if (Math.random() < 0.5) {
                            if (previousW - 1 >= 0 && randomLevel[previousW - 1][previousZ] == "") {
                                w = previousW - 1
                            }
                            else if (previousW + 1 < height && randomLevel[previousW + 1][previousZ] == "") {
                                w = previousW + 1
                            }
                            else if (previousZ + 1 <= width && randomLevel[previousW][previousZ + 1] == "") {
                                z = previousZ + 1
                            }
                            else if (previousZ - 1 <= width && randomLevel[previousW][previousZ + 1] == "") {
                                z = previousZ - 1
                            }
                            else {
                                w = TwoBeforeW
                                z = TwoBeforeZ
                            }
                        }
                        else {
                            if (previousZ + 1 <= width && randomLevel[previousW][previousZ + 1] == "") {

                                z = previousZ + 1
                            }
                            else if (previousZ - 1 >= 0 && randomLevel[previousW][previousZ - 1] == "") {

                                z = previousZ - 1
                            }
                            else if (previousW + 1 < height && randomLevel[previousW + 1][previousZ] == "") {

                                w = previousW + 1
                            }
                            else if (previousW - 1 >= 0 && randomLevel[previousW - 1][previousZ] == "") {

                                w = previousW - 1
                            }
                            else {

                                w = TwoBeforeW
                                z = TwoBeforeZ
                            }

                        }
                    }



                    else if (Math.random() < 0.5) {

                        //check previous position and walls and increment new position

                        if (Math.random() < 0.5) {
                            if (previousW + 1 < height && randomLevel[previousW + 1][previousZ] == "") {
                                w = previousW + 1
                            }
                            else if (previousW - 1 >= 0 && randomLevel[previousW - 1][previousZ] == "") {
                                w = previousW - 1
                            }
                            else if (previousZ + 1 <= width && randomLevel[previousW][previousZ + 1] == "") {
                                z = previousZ + 1
                            }
                            else if (previousZ - 1 <= width && randomLevel[previousW][previousZ + 1] == "") {
                                z = previousZ - 1
                            }
                            else {
                                w = TwoBeforeW
                                z = TwoBeforeZ
                            }
                        }
                        else {

                            if (previousW - 1 >= 0 && randomLevel[previousW - 1][previousZ] == "") {
                                w = previousW - 1
                            }
                            else if (previousW + 1 < height && randomLevel[previousW + 1][previousZ] == "") {
                                w = previousW + 1
                            }
                            else if (previousZ + 1 <= width && randomLevel[previousW][previousZ + 1] == "") {
                                z = previousZ + 1
                            }
                            else if (previousZ - 1 <= width && randomLevel[previousW][previousZ + 1] == "") {
                                z = previousZ - 1
                            }
                            else {
                                w = TwoBeforeW
                                z = TwoBeforeZ
                            }
                        }
                    }
                    // random vertical ou horizontal
                    else {

                        //check previous position and walls and increment new position
                        // if (TwoBeforeY - previousY < 0 && previousY + 1 <= height) {
                        if (Math.random() < 0.5) {
                            if (previousZ + 1 <= width && randomLevel[previousW][previousZ + 1] == "") {

                                z = previousZ + 1
                            }
                            else if (previousZ - 1 >= 0 && randomLevel[previousW][previousZ - 1] == "") {

                                z = previousZ - 1
                            }
                            else if (previousW + 1 < height && randomLevel[previousW + 1][previousZ] == "") {

                                w = previousW + 1
                            }
                            else if (previousW - 1 >= 0 && randomLevel[previousW - 1][previousZ] == "") {

                                w = previousW - 1
                            }
                            else {

                                w = TwoBeforeW
                                z = TwoBeforeZ
                            }
                        }
                        else {
                            if (previousZ - 1 >= 0 && randomLevel[previousW][previousZ - 1] == "") {

                                z = previousZ - 1
                            }
                            else if (previousZ + 1 <= width && randomLevel[previousW][previousZ + 1] == "") {

                                z = previousZ + 1
                            }
                            else if (previousZ - 1 >= 0 && randomLevel[previousW][previousZ - 1] == "") {

                                z = previousZ - 1
                            }
                            else if (previousW + 1 < height && randomLevel[previousW + 1][previousZ] == "") {

                                w = previousW + 1
                            }
                            else if (previousW - 1 >= 0 && randomLevel[previousW - 1][previousZ] == "") {

                                w = previousW - 1
                            }
                            else {

                                w = TwoBeforeW
                                z = TwoBeforeZ
                            }
                        }
                    }
                    randomLevel[w][z] = "."

                }
            }
            else {
                continue
            }
        }

    }
    // setting up end on the deeper point

    loop1:
    for (let i = randomLevel.length - 1; i >= 0; i--) {
        for (let j = randomLevel[0].length - 1; j >= 0; j--) {
            if (randomLevel[i][j] == ".") {
                randomLevel[i][j] = "T"
                break loop1
            }
            else {
                continue
            }
        }
    }

    ///////////
    //filling the rest of the maze
    let enoughPlace = 0
    for (let i = 0; i < randomLevel.length; i++) {
        for (let j = 0; j < randomLevel[i].length; j++) {
            if (randomLevel[i][j] == "") {
                randomLevel[i][j] = "*"
            }

            //spawning enemys check if path + random 
            else if (randomLevel[i][j] == "." && Math.random() < 0.1 && i > 0 && j > 0) {
                enoughPlace = 0
                //check if there is enough place to spawn

                for (let k = i - 1; k < i + 1; k++) {
                    console.log(k)
                    for (let l = j - 1; l < j + 1; l++) {
                        if (randomLevel[k][l] == ".") {
                            enoughPlace++

                        }
                        else {

                        }
                    }
                }
                if (enoughPlace == 4) {
                    randomLevel[i][j] = "e"

                }
                else { }
            }

        }

    }

    return randomLevel
}




// Template of the Maze
const LEVEL = [
    [
        ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
        ["*", "S", ".", ".", ".", ".", ".", "*", "*", ".", "*", ".", "T"],
        ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", "*", ".", "*"],
        ["*", "*", "*", "*", "*", ".", "*", "*", "*", ".", "*", ".", "*"],
        ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
        ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
        ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", "*"],
        ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", "*", "*"],
        ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*"],
        ["*", ".", "*", "*", "*", "*", "*", "*", ".", ".", ".", "*", "*"],
        ["*", ".", ".", ".", ".", "*", "*", "*", "*", "*", "*", "*", "*"],
        ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
    ],
    [
        ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
        ["*", ".", ".", "S", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
        ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
        ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
        ["*", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
        ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "T"],
        ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
    ]
    ,
    [

        ["*", "*", "*", "*", "*", "*", "*", "*"],
        ["*", "*", "*", "*", "S", "*", "*", "*"],
        ["*", "*", "*", "*", ".", "*", "*", "*"],
        ["*", "*", "*", "*", ".", "*", "*", "*"],
        ["*", "*", "*", "*", ".", "*", "*", "*"],
        ["*", ".", ".", ".", ".", ".", ".", "*"],
        ["*", ".", "*", "*", "*", "*", ".", "*"],
        ["*", ".", ".", "*", "*", "*", ".", "*"],
        ["*", ".", ".", "*", "*", "*", ".", "*"],
        ["*", "*", ".", "*", "*", "*", "*", "*"],
        ["*", "T", ".", "*", "*", "*", "*", "*"],
        ["*", "*", "*", "*", "*", "*", "*", "*"]

    ]
]
// const wich lvl am I loading + initialising height and width
let lvl = 1
let actualLevel = []

let heightCase = 1
let widthCase = 1

// calculation of the height of each box of the maze
const mazeSize = () => {
    let mazeWidth = actualLevel[1].length
    let mazeHeight = actualLevel.length
    console.log(mazeWidth)
    console.log(mazeHeight)
    heightCase = 100 / mazeHeight
    widthCase = 100 / mazeWidth
    widthCase = 4
}


// Loop on each array inside [actualLevel] Creating one Div class "Line" 
// number of line=mazeHeight and number of line.children=mazeWidth
const creationMaze = () => {

    // delete all the divs
    container.replaceChildren()

    // actualLevel = LEVEL[lvl - 1]
    actualLevel = randomMaze()
    console.log(actualLevel)
    mazeSize()
    for (let i = 0; i < actualLevel.length; i++) {
        const createLine = document.createElement("div")
        const line = container.appendChild(createLine)
        line.className = "line"
        line.style = `height:${widthCase}vw;  display:flex`

        // calling what's inside the array [i]   
        let arrayoflevel = actualLevel[i]

        // loop on the array inside the array[i] and creating one Div class "wall", "Path", "Start" or "End"
        // for each value
        for (let a = 0; a < arrayoflevel.length; a++) {
            switch (arrayoflevel[a]) {
                case 'e': console.log("ENEMY")
                    const createEnemy = document.createElement("input")
                    const enemy = line.appendChild(createEnemy)
                    enemy.type = "checkbox"
                    enemy.className = 'enemy'
                    enemy.id = `${i}/${a}`
                    enemy.style = `margin:0; padding:0;height: 100%;width:${widthCase}vw; background-image:url("assets/GLUON.webp");background-size:cover;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;`
                    break
                case '*':
                    const createWall = document.createElement("div")
                    const wall = line.appendChild(createWall)
                    wall.className = 'wall'
                    wall.id = `${i}/${a}`
                    wall.style = `height: 100%;width:${widthCase}vw; background-image:url("assets/Stone_(texture)_JE5_BE3.webp");background-size:cover;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;`
                    break
                case '.':
                    const createPath = document.createElement("input")
                    const path = line.appendChild(createPath)
                    path.id = `${i}/${a}`
                    path.type = "checkbox"
                    path.className = 'path'
                    path.style = `margin: 0; padding:0;height: 100%;width:${widthCase}vw; background-image:url("assets/Coarse_Dirt_(texture)_JE1_BE1.webp");background-size:cover;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;`
                    break
                case 'S':
                    const createStart = document.createElement("input")
                    const start = line.appendChild(createStart)
                    start.id = `${i}/${a}`
                    start.className = 'start'
                    start.type = "checkbox"
                    start.checked = "true"
                    start.style = `margin: 0; padding:0;height: 100%;width:${widthCase}vw; background-color:red;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;background-image:url("assets/Nouveau projet.webp"); background-size:cover`
                    break
                case 'T':
                    const createEnd = document.createElement("input")
                    const end = line.appendChild(createEnd)
                    end.id = `${i}/${a}`
                    end.className = 'end'
                    end.type = "checkbox"
                    end.style = `margin: 0; padding:0;height: 100%;width:${widthCase}vw; background-color:yellow;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;background-image:url("assets/end.png"); background-size:cover;visibility:visible`
                    break
            }
        }

    }
    //Creating object for each enemy
    let enemy = {
        nr: "",
        IdOrigin: [],
        IdActual: [],
        Idsecurity: [],
        PreviousDeplacement: ""
    }
    let a = 0

    for (let i = 0; i < actualLevel.length; i++) {
        for (let j = 0; j < actualLevel[i].length; j++) {
            if (actualLevel[i][j] == "e") {

                const newEnemy = Object.create(enemy)
                newEnemy.nr = a
                newEnemy.IdOrigin = [i, j]
                newEnemy.IdActual = [i, j]
                initEnemy.push(newEnemy)
                a++
            }
        }
    }

}

creationMaze()


// Making ennemy move
const moveEnemy = () => {

    console.log(initEnemy)

    initEnemy.forEach(element => {

        if (element.IdActual[0] == element.IdOrigin[0] && element.IdActual[1] == element.IdOrigin[1]) {
            if (Math.random() < 0.5) {
                if (Math.random() < 0.5) {
                    element.Idsecurity = element.IdOrigin
                    newID = element.IdOrigin[0] + 1
                    element.IdActual = [newID, element.IdOrigin[1]]
                    element.PreviousDeplacement = "+y"
                }
                else {
                    element.Idsecurity = element.IdOrigin
                    newID = element.IdOrigin[0] - 1
                    element.IdActual = [newID, element.IdOrigin[1]]
                    element.PreviousDeplacement = "-y"

                }
            }
            else {
                if (Math.random < 0.5) {
                    element.Idsecurity = element.IdOrigin
                    newID = element.IdOrigin[1] + 1
                    element.IdActual = [element.IdOrigin[0], newID]
                    element.PreviousDeplacement = "+x"
                }
                else {
                    element.Idsecurity = element.IdOrigin
                    newID = element.IdOrigin[1] - 1
                    element.IdActual = [element.IdOrigin[0], newID]
                    element.PreviousDeplacement = "-x"
                }
            }
        }
        else {
            console.log("CAFAITPLUSQUUN")
            switch (element.PreviousDeplacement) {
                case '+y':
                    if (element.IdActual[0] < (element.IdOrigin[0] + 3)) {
                        console.log(element.IdOrigin[0] + 3)
                        element.Idsecurity = element.IdActual
                        newID = element.IdActual[0] + 1
                        element.IdActual = [newID, element.IdActual[1]]
                        console.log("THIS IS THE PREVIOUS ID: " + element.Idsecurity + "THIS IS THE NEXT ID: " + element.IdActual + "THIS IS ORIGIN :" + element.IdOrigin)
                    }
                    else {
                        element.Idsecurity = element.IdActual
                        newID = element.IdActual[0] - 1
                        element.IdActual = [newID, element.IdActual[1]]
                        element.PreviousDeplacement = "-y"
                    }
                    break
                case '-y':
                    if (element.IdActual[0] > element.IdOrigin[0] - 3) {
                        element.Idsecurity = element.IdActual
                        newID = element.IdActual[0] - 1
                        element.IdActual = [newID, element.IdActual[1]]
                    }
                    else {
                        element.Idsecurity = element.IdActual
                        newID = element.IdActual[0] + 1
                        element.IdActual = [newID, element.IdActual[1]]
                        element.PreviousDeplacement = "+y"
                    }
                    break
                case '+x':
                    if (element.IdActual[1] < element.IdOrigin[1] + 3) {
                        element.Idsecurity = element.IdActual
                        newID = element.IdActual[1] + 1
                        element.IdActual = [element.IdActual[0], newID]

                    }
                    else {
                        element.Idsecurity = element.IdActual
                        newID = element.IdActual[1] - 1
                        element.IdActual = [element.IdActual[0], newID]
                        element.PreviousDeplacement = "-x"
                    }
                    break
                case '-x':
                    if (element.IdActual[0] > element.IdOrigin[1] - 3) {
                        element.Idsecurity = element.IdActual
                        newID = element.IdActual[1] - 1
                        element.IdActual = [element.IdActual[0], newID]

                    }
                    else {
                        element.Idsecurity = element.IdActual
                        newID = element.IdActual[1] + 1
                        element.IdActual = [element.IdActual[0], newID]
                        element.PreviousDeplacement = "+x"
                    }
                    break
            }
        }
        if (document.getElementById(element.IdActual[0] + "/" + element.IdActual[1]) != null) {
            let newPosition = document.getElementById(element.IdActual[0] + "/" + element.IdActual[1])
            let oldPosition = document.getElementById(element.Idsecurity[0] + "/" + element.Idsecurity[1])

            if (newPosition.className == "path") {
                if (newPosition.checked==true){
                    console.log("DIe ?")
            alert("You died")
                creationMaze()
                }
                else {
                console.log("CA BOUUUUUUUGE" + element.IdOrigin)
                newPosition.className = "enemy"
                oldPosition.className = "path"
                newPosition.style.backgroundImage = 'url("assets/GLUON.webp")'
                oldPosition.style.backgroundImage = `url("assets/Coarse_Dirt_(texture)_JE1_BE1.webp")`
            }
            }
            else {
                element.IdActual[1] = element.Idsecurity[1]
                element.IdActual[0] = element.Idsecurity[0]
                switch (element.PreviousDeplacement) {
                    case '+x':
                        element.PreviousDeplacement = '-x'
                        break
                    case '-x':
                        element.PreviousDeplacement = '+x'
                        break
                    case '+y':
                        element.PreviousDeplacement = '-y'
                        break
                    case '-y':
                        element.PreviousDeplacement = '+y'
                        break
                }
                console.log(element)
            }
            
        }
        else {
            element.IdActual[1] = element.Idsecurity[1]
            element.IdActual[0] = element.Idsecurity[0]
            switch (element.PreviousDeplacement) {
                case '+x':
                    element.PreviousDeplacement = '-x'
                    break
                case '-x':
                    element.PreviousDeplacement = '+x'
                    break
                case '+y':
                    element.PreviousDeplacement = '-y'
                    break
                case '-y':
                    element.PreviousDeplacement = '+y'
                    break
            }
            console.log(element)
        }
    }
    );
}



// create the movement function, call the id of the previous selected box, and check if 
// the box in the direction you press is an input.
// if so, dechecked previous box, and check next one, otherwise nothing happend.
const movement = (event) => {
    //retrieving ID of previous box
    const previous = document.querySelector("input:checked")
    const IdPrevious = previous.id
    previous.replaceChildren()
    // treating ID so I can select next box
    let selector = IdPrevious.indexOf("/")
    const previousLine = IdPrevious.slice(0, selector)
    const previousBox = IdPrevious.slice(selector + 1)

    previous.style.backgroundImage = 'url("assets/Coarse_Dirt_(texture)_JE1_BE1.webp")'
    switch (event.key) {
        case 'ArrowUp':
            event.preventDefault()
            // define the ID of the new box to check
            const newIdUp = parseInt(previousLine) - 1 + "/" + previousBox


            // uncheck previous input and check new input
            if (document.getElementById(newIdUp) != null
                && document.getElementById(newIdUp).className != "wall"
                && document.getElementById(newIdUp).className != "enemy") {
                previous.checked = false
                document.getElementById(newIdUp).checked = true
            }
            else if (document.getElementById(newIdUp).className == "enemy") {
                alert("You died")
                creationMaze()
            }
            else {
                alert("BONG")
            }
            break
        case 'ArrowDown':
            event.preventDefault()
            // define the ID of the new box to check
            const newIdDown = (parseInt(previousLine) + parseInt(1)) + "/" + previousBox


            // uncheck previous input and check new input
            if (document.getElementById(newIdDown) != null
                && document.getElementById(newIdDown).className != "wall"
                && document.getElementById(newIdDown).className != "enemy") {
                previous.checked = false
                document.getElementById(newIdDown).checked = true
            }
            else if (document.getElementById(newIdDown).className == "enemy") {
                alert("You died")
                creationMaze()
            }
            else {
                alert("BONG")
            }
            break
        case 'ArrowRight':
            event.preventDefault()
            // define the ID of the new box to check
            const newIdRight = previousLine + "/" + (parseInt(previousBox) + parseInt(1))


            // uncheck previous input and check new input
            if (document.getElementById(newIdRight) != null
                && document.getElementById(newIdRight).className != "wall"
                && document.getElementById(newIdRight).className != "enemy") {
                console.log(newIdRight)
                previous.checked = false
                document.getElementById(newIdRight).checked = true
            }
            else if (document.getElementById(newIdRight).className == "enemy") {
                alert("You died")
                creationMaze()
            }
            else {
                alert("BONG")
            }
            break
        case 'ArrowLeft':
            event.preventDefault()
            // define the ID of the new box to check
            const newIdLeft = previousLine + "/" + (parseInt(previousBox) - 1)

            // uncheck previous input and check new input
            if (document.getElementById(newIdLeft) != null
                && document.getElementById(newIdLeft).className != "wall"
                && document.getElementById(newIdLeft).className != "enemy") {
                previous.checked = false
                document.getElementById(newIdLeft).checked = true
            }
            else if (document.getElementById(newIdLeft).className == "enemy") {
                alert("You died")
                creationMaze()
            }
            else {
                alert("BONG")
            }
            break

    }

    // styling new position
    actualpath = document.querySelector("input:checked")
    actualpath.style.backgroundImage = 'url("assets/Nouveau projet.webp")'

    // //managing camera
    actualpath.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    })

    //Hidding all divs
    for (let i = 0; i < actualLevel.length; i++) {
        for (let j = 0; j < actualLevel[0].length; j++) {
            let current = document.getElementById(i + "/" + j)
            current.style.visibility = "hidden"
            console.log("CACHE-CACHE")
        }
    }

    //retrieving ID of actual box
    let actual = document.querySelector("input:checked")
    const Idactual = actual.id

    // treating ID so I can select next box
    selector = Idactual.indexOf("/")
    let actualLine = Idactual.slice(0, selector)
    let actualBox = Idactual.slice(selector + 1)
    console.log(actualLine)
    console.log(actualBox)

    //showing slab neraby far away


    for (let i = -4; i < 5; i++) {
        for (let j = -4; j < 5; j++) {
            let NearbyId = (parseInt(actualLine) + i) + "/" + (parseInt(actualBox) + j)

            if (document.getElementById(NearbyId) != null) {
                document.getElementById(NearbyId).style.visibility = "visible"
            }
            else {
                continue
            }
        }
    }
    // making a blur effect with a div absolute
    let dimension = widthCase * 9
    let margin = -widthCase * 4
    const createBlur = document.createElement("div")
    createBlur.style = `position:absolute; height:${dimension}vw; width:${dimension}vw;margin-top:${margin}vw;margin-left:${margin}vw; z-index:1000; background: rgb(0,0,0);background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 85%);`
    actual.appendChild(createBlur)


    //Display won message when arrived

    const end = document.getElementsByClassName("end")
    if (end[0].checked == true) {
        alert("YOU WIN")

        // increment lvl 
        lvl++
        console.log(lvl)

        // delete all the divs
        container.replaceChildren()


        // calling function creation new maze
        creationMaze()
    }

}

let intervalId = window.setInterval(function(){
    moveEnemy()
  }, 1000);
  

// add event listener on body, each time you press a key
document.body.addEventListener("keydown", movement)
document.getElementById("height").addEventListener("input", creationMaze)
document.getElementById("width").addEventListener("input", creationMaze)
document.getElementById("path").addEventListener("input", creationMaze)

