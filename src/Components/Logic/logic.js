
export function reDrop(obj){
    let {x, y, piece, board, random} = obj
    x = 0
    y = 0
    piece.value = random
    board[0][1] = random
    return obj
}