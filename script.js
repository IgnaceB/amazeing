// defining container and styling it
const container = document.querySelector("main")
container.style = 'display: flex;width: 100%;height: 100%;flex-wrap: wrap;'
document.body.style = 'margin:0; width:100vw; height:100vh'

//creating sliders parametre maze
const sliderHeight = document.createElement("input")
const sliderWidth = document.createElement("input")
const sliderPath = document.createElement("input")

sliderHeight.type = "range"
sliderHeight.min = 4
sliderHeight.max = 200
sliderHeight.id = "height"
// sliderHeight.addEventListener("change",creationMaze )

sliderWidth.type = "range"
sliderWidth.min = 4
sliderWidth.max = 200
sliderWidth.id = "width"
// sliderWidth.addEventListener("change",creationMaze )


sliderPath.type = "range"
sliderPath.min = 2
sliderPath.max = 200
sliderPath.id = "path"
// sliderPath.addEventListener("change",creationMaze )

document.body.prepend(sliderHeight)
document.body.prepend(sliderWidth)
document.body.prepend(sliderPath)

// const SliHeight=getElementById("height")
// const SliWidth=getElementById("width")
// const SliPath=getElementById("path")

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
    console.log("pathSize=" + pathSize)
    if (document.getElementById("path") != null) {
        pathSize = document.getElementById("path").value
    }
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
            console.log(previousX, previousY, randomLevel, width)
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

        // random vertical ou horizontal
        else {
            console.log("thisisY")
            console.log(previousY, y, width, x)

            //check previous position and walls and increment new position
            // if (TwoBeforeY - previousY < 0 && previousY + 1 <= height) {
            if (previousY + 1 <= width && randomLevel[previousX][previousY + 1] == "") {
                console.log("thisisY++")
                y = previousY + 1
            }
            else if (previousY - 1 >= 0 && randomLevel[previousX][previousY - 1] == "") {
                console.log("thisisY--")
                y = previousY - 1
            }
            else if (previousX + 1 < height && randomLevel[previousX + 1][previousY] == "") {
                console.log("thisisY->X")
                x = previousX + 1
            }
            else if (previousX - 1 >= 0 && randomLevel[previousX - 1][previousY] == "") {
                console.log("thisisY->X")
                x = previousX - 1
            }
            else {
                console.log("thisisSHIT")
                x = TwoBeforeX
                y = TwoBeforeY
            }
        }
        console.log("X:" + x + " Y:" + y)

        //check if end + update randomLevel with a END
        if (i == pathSize - 1) {
            randomLevel[x][y] = "T"
        }

        // Update randomLevel with a path
        else {
            randomLevel[x][y] = "."
        }

        //////
        //generate alternative paths
        if (Math.random() < (1 / pathSize) * 2) {
            console.log("ALTERNATIVE PATH PATH PATH")
            let pathSizeB = Math.floor(Math.random() * (width + height) + (width + height))
            // init the case where you were / are / will be 
            // previous = slab you are
            // TwoBefore = slab you where
            // X = slab you will be 
            let previousW = previousX
            let previousZ = previousY
            let w = previousW
            let z = previousZ

            //Looping on the pathSize
            for (let i = 0; i < pathSizeB; i++) {

                //update position
                let TwoBeforeW = previousW
                let TwoBeforeZ = previousZ
                previousW = w
                previousZ = z

                // random vertical ou horizontal
                if (Math.random() < 0.5) {
                    console.log("thisisX")
                    console.log(previousW, previousZ, randomLevel, width)
                    //check previous position and walls and increment new position
                    // if (TwoBeforeX - previousW < 0 && previousW + 1 <= width) {
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

                    console.log("thisisY")
                    console.log(previousY, y, width, x)

                    //check previous position and walls and increment new position
                    // if (TwoBeforeY - previousY < 0 && previousY + 1 <= height) {
                    if (Math.random() < 0.5) {
                        if (previousZ + 1 <= width && randomLevel[previousW][previousZ + 1] == "") {
                            console.log("thisisY++")
                            z = previousZ + 1
                        }
                        else if (previousZ - 1 >= 0 && randomLevel[previousW][previousZ - 1] == "") {
                            console.log("thisisZ--")
                            z = previousZ - 1
                        }
                        else if (previousW + 1 < height && randomLevel[previousW + 1][previousZ] == "") {
                            console.log("thisisZ->X")
                            w = previousW + 1
                        }
                        else if (previousW - 1 >= 0 && randomLevel[previousW - 1][previousZ] == "") {
                            console.log("thisisZ->w")
                            w = previousW - 1
                        }
                        else {
                            console.log("thisisSHIT")
                            w = TwoBeforeW
                            z = TwoBeforeZ
                        }
                    }
                    else {
                        if (previousZ - 1 >= 0 && randomLevel[previousW][previousZ - 1] == "") {
                            console.log("thisisZ--")
                            z = previousZ - 1
                        }
                        else if (previousZ + 1 <= width && randomLevel[previousW][previousZ + 1] == "") {
                            console.log("thisisY++")
                            z = previousZ + 1
                        }
                        else if (previousZ - 1 >= 0 && randomLevel[previousW][previousZ - 1] == "") {
                            console.log("thisisZ--")
                            z = previousZ - 1
                        }
                        else if (previousW + 1 < height && randomLevel[previousW + 1][previousZ] == "") {
                            console.log("thisisZ->X")
                            w = previousW + 1
                        }
                        else if (previousW - 1 >= 0 && randomLevel[previousW - 1][previousZ] == "") {
                            console.log("thisisZ->w")
                            w = previousW - 1
                        }
                        else {
                            console.log("thisisSHIT")
                            w = TwoBeforeW
                            z = TwoBeforeZ
                        }
                    }
                }
                console.log("X:" + x + " Y:" + y)

                randomLevel[w][z] = "."

            }
        }
    }
    ///////////
    //filling the rest of the maze
    for (let i = 0; i < randomLevel.length; i++) {
        for (let j = 0; j < randomLevel[i].length; j++) {
            if (randomLevel[i][j] == "") {
                randomLevel[i][j] = "*"
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
let actualLevel =[]

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
                    wall.id = `${i}/${a}`
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
    let selector = IdPrevious.indexOf("/")
    const previousLine = IdPrevious.slice(0, selector)
    const previousBox = IdPrevious.slice(selector + 1)

    
    switch (event.key) {
        case 'ArrowUp':
            // define the ID of the new box to check
            const newIdUp = parseInt(previousLine) - 1 + "/" + previousBox

            console.log("CECI EST MA NOUVELLE ID"+newIdUp)
            console.log(document.getElementById(newIdUp).className)
            // uncheck previous input and check new input
            if (document.getElementById(newIdUp) != null && document.getElementById(newIdUp).className !="wall") {
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
            if (document.getElementById(newIdDown) != null && document.getElementById(newIdDown).className !="wall") {
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
            if (document.getElementById(newIdRight) != null && document.getElementById(newIdRight).className !="wall") {
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
            if (document.getElementById(newIdLeft) != null && document.getElementById(newIdLeft).className !="wall") {
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
    //hidden all children

    for (let i=0; i<actualLevel.length;i++){
        for (let j=0;j<actualLevel[0].length;j++){
        let current=document.getElementById(i+"/"+j)
        current.style.visibility="hidden"
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
 

for (let i=-2; i<3;i++){
    for (let j=-2;j<3;j++){
        let NearbyId = (parseInt(actualLine)+i) + "/" + (parseInt(actualBox) +j)
        console.log(NearbyId)
        if (document.getElementById(NearbyId)!=null){
        document.getElementById(NearbyId).style.visibility="visible"
        }
        else {
            continue
        }
    }
}

}

// add event listener on body, each time you press a key
document.body.addEventListener("keydown", movement)
document.getElementById("height").addEventListener("input", creationMaze)
document.getElementById("width").addEventListener("input", creationMaze)
document.getElementById("path").addEventListener("input", creationMaze)

