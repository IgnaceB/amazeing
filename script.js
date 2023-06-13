// defining container and styling it
const container = document.querySelector("main")
container.style = 'display: flex;width: 100%;height: 100%;flex-wrap: wrap;'
document.body.style = 'margin:0; width:100vw; height:100vh'


//Creating a random pattern for the maze
const randomMaze = () => {
    // Randomize size and setting parametre for possible slabs
    const height = Math.floor((Math.random() * 50))
    const width = Math.floor((Math.random() * 50))
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
    let x = Math.floor(Math.random() * height)
    let y = Math.floor(Math.random() * width)
    randomLevel[x][y] = "S"
    console.log(x + "/" + y)

    // setting the path from the start
    // how long should be the main path : 
    let pathSize = Math.floor(Math.random() * (width + height)*1/2 + (width + height) / 10)
    console.log("pathSize="+pathSize)

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
            console.log("thisisX")

            //check previous position and walls and increment new position
            // if (TwoBeforeX - previousX < 0 && previousX + 1 <= width) {
                if (previousX + 1 <= width) {
                x = previousX + 1
            }
            else if (previousX - 1 >= 0) {
                x = previousX - 1
            }
            else if (TwoBeforeY - previousY < 0 && previousY + 1 <= height) {
                y = previousY + 1
            }
            else if (previousY - 1 >= 0) {
                y = previousY - 1
            }
            else {
                x = TwoBeforeX
                y = TwoBeforeY
            }
        }

        // random vertical ou horizontal
        if (Math.random() > 0.5) {
            console.log("thisisY")
            console.log(TwoBeforeY, previousY, y, height)

            //check previous position and walls and increment new position
            // if (TwoBeforeY - previousY < 0 && previousY + 1 <= height) {
                if (previousY + 1 <= height) {
                console.log("thisisY++")
                y = previousY + 1
            }
            else if (previousY - 1 >= 0) {
                console.log("thisisY--")
                y = previousY - 1
            }
            else if (TwoBeforeX - previousX < 0 && previousX + 1 <= width) {
                console.log("thisisY->X")
                x = previousX + 1
            }
            else if (previousX - 1 >= 0) {
                console.log("thisisY->X")
                x = previousX - 1
            }
            else {
                console.log("thisisSHIT")
                x = TwoBeforeX
                y = TwoBeforeY
            }
        }
    console.log("X:"+x+" Y:"+y)

    //check if end + update randomLevel with a END
    if(i==pathSize-1){
    randomLevel[x][y] = "T"
    }

    // Update randomLevel with a path
    else {
        randomLevel[x][y] = "."
    }
    }

    //filling the rest of the maze
    for (let i=0; i<randomLevel.length; i++){
        for (let j=0; j<randomLevel[i].length;j++){
            if (randomLevel[i][j]==""){
                randomLevel[i][j]="*"
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
let actualLevel = LEVEL[lvl - 1]

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
}


// Loop on each array inside [actualLevel] Creating one Div class "Line" 
// number of line=mazeHeight and number of line.children=mazeWidth
const creationMaze = () => {
    // actualLevel = LEVEL[lvl - 1]
    actualLevel=randomMaze()
    console.log(actualLevel)
    mazeSize()
    for (let i = 0; i < actualLevel.length; i++) {
        const createLine = document.createElement("div")
        const line = container.appendChild(createLine)
        line.className = "line"
        line.style = `height:${heightCase}vh; width:100%; display:flex`

        // calling what's inside the array [i]   
        let arrayoflevel = actualLevel[i]

        // loop on the array inside the array[i] and creating one Div class "wall", "Path", "Start" or "End"
        // for each value
        for (let a = 0; a < arrayoflevel.length; a++) {
            switch (arrayoflevel[a]) {
                case '*':
                    const createWall = document.createElement("div")
                    const wall = line.appendChild(createWall)
                    wall.className = 'wall'
                    wall.style = `height: 100%;width:${widthCase}vw; background-color:black`
                    break
                case '.':
                    const createPath = document.createElement("input")
                    const path = line.appendChild(createPath)
                    path.id = `${i}/${a}`
                    path.type = "checkbox"
                    path.className = 'path'
                    path.style = `margin: 0; padding:0;height: 100%;width:${widthCase}vw; background-color:white`
                    break
                case 'S':
                    const createStart = document.createElement("input")
                    const start = line.appendChild(createStart)
                    start.id = `${i}/${a}`
                    start.className = 'start'
                    start.type = "checkbox"
                    start.checked = "true"
                    start.style = `margin: 0; padding:0;height: 100%;width:${widthCase}vw; background-color:red;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;`
                    break
                case 'T':
                    const createEnd = document.createElement("input")
                    const end = line.appendChild(createEnd)
                    end.id = `${i}/${a}`
                    end.className = 'end'
                    end.type = "checkbox"
                    end.style = `margin: 0; padding:0;height: 100%;width:${widthCase}vw; background-color:yellow;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;`
                    break
            }
        }
    }
}

creationMaze()


// create the movement function, call the id of the previous selected box, and check if 
// the box in the direction you press is an input.
// if so, dechecked previous box, and check next one, otherwise nothing happend.
const movement = (event) => {

    //retrieving ID of previous box
    const previous = document.querySelector("input:checked")
    const IdPrevious = previous.id

    // treating ID so I can select next box
    const selector = IdPrevious.indexOf("/")
    const previousLine = IdPrevious.slice(0, selector)
    const previousBox = IdPrevious.slice(selector + 1)


    switch (event.key) {
        case 'ArrowUp':
            // define the ID of the new box to check
            const newIdUp = parseInt(previousLine) - 1 + "/" + previousBox


            // uncheck previous input and check new input
            if (document.getElementById(newIdUp) != null) {
                previous.checked = false
                document.getElementById(newIdUp).checked = true
            }
            else {
                alert("BONG")
            }
            break
        case 'ArrowDown':
            // define the ID of the new box to check
            const newIdDown = (parseInt(previousLine) + parseInt(1)) + "/" + previousBox


            // uncheck previous input and check new input
            if (document.getElementById(newIdDown) != null) {
                previous.checked = false
                document.getElementById(newIdDown).checked = true
            }
            else {
                alert("BONG")
            }
            break
        case 'ArrowRight':
            // define the ID of the new box to check
            const newIdRight = previousLine + "/" + (parseInt(previousBox) + parseInt(1))


            // uncheck previous input and check new input
            if (document.getElementById(newIdRight) != null) {
                console.log(newIdRight)
                previous.checked = false
                document.getElementById(newIdRight).checked = true
            }
            else {
                alert("BONG")
            }
            break
        case 'ArrowLeft':
            // define the ID of the new box to check
            const newIdLeft = previousLine + "/" + (parseInt(previousBox) - 1)

            // uncheck previous input and check new input
            if (document.getElementById(newIdLeft) != null) {
                previous.checked = false
                document.getElementById(newIdLeft).checked = true
            }
            else {
                alert("BONG")
            }
            break

    }

    //Display won message when arrived

    const end = document.getElementsByClassName("end")
    if (end[0].checked == true) {
        console.log("ca marche")
        alert("YOU WIN")

        // increment lvl 
        lvl++
        console.log(lvl)

        // delete all the divs
        container.replaceChildren()


        // calling function creation new maze
        creationMaze()
    }
    else {
        console.log("not yet")

    }

}

// add event listener on body, each time you press a key
document.body.addEventListener("keydown", movement)


