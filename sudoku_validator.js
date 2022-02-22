function isValidSudoku(board) { 

    // check rows
    if(validateNumbers(board) == false) {
        return 'Try again!'
    }

    // check cols
    let cols = getArrayCols(board)
    if(validateNumbers(cols) == false) {
        return 'Try again!'
    }

    // // check 3 x 3 grid
    let grids = getArrayGrids(board)
    if(validateNumbers(grids) == false) {
        return 'Try again!'
    }
    
    return "Succeed!"

}

validateNumbers = (board) => {
    const numbers = [1,2,3,4,5,6,7,8,9]

    return board.every(arrnum => {
        return numbers.every(x => arrnum.indexOf(x) >= 0)
    })
}

getArrayCols = (board) => {
    let cols = []
    for(let i=0; i<9; i++){
        col = board.map(b => b[i])
        cols.push(col)
    }
    return cols
}

getArrayGrids = (board) => {
    let grids = [[],[],[],[],[],[],[],[],[]]
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            gridIdx = (Math.floor(i / 3)) * 3 + (Math.floor(j / 3))
            grids[gridIdx].push(board[i][j])
        }

    }
    return grids

}

const board_1 = [
    [4,7,6,5,3,2,8,1,9],
    [2,5,8,1,4,9,7,3,6],
    [1,9,3,7,6,8,4,2,5],
    [6,4,7,8,2,5,1,9,3],
    [5,1,9,3,7,6,2,8,4],
    [3,8,2,9,1,4,5,6,7],
    [9,2,4,6,8,7,3,5,1],
    [7,6,1,2,5,3,9,4,8],
    [8,3,5,4,9,1,6,7,2]
]

const board_2 = [
    [4,7,6,5,3,2,8,1,9],
    [2,5,8,1,4,9,7,3,6],
    [1,9,3,7,6,8,4,2,5],
    [6,4,7,8,2,5,1,9,3],
    [5,1,9,3,7,6,2,8,4],
    [3,8,2,9,1,4,5,6,7],
    [9,2,7,6,8,4,3,5,1],
    [7,6,1,2,5,3,9,4,8],
    [8,3,5,4,9,1,6,7,2]
]

const board_3 = [
    [2,4,9,5,7,1,6,3,8],
    [8,6,1,4,3,2,9,7,5],
    [5,7,3,9,8,6,1,4,2],
    [7,2,5,6,9,8,4,1,3],
    [6,9,7,1,4,3,2,5,7],
    [3,1,4,7,2,5,8,6,9],
    [9,3,7,8,1,4,2,5,6],
    [1,5,2,3,6,9,7,8,4],
    [4,8,6,2,5,7,3,9,1]
]

console.log(isValidSudoku(board_1))
console.log(isValidSudoku(board_2))
console.log(isValidSudoku(board_3))