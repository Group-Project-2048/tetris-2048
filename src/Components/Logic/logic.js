
export function reDrop(obj){
    let {x, y, piece, board, random} = obj
    x = 0
    y = 0
    piece.value = random
    board[0][1] = random
    return obj
}

export function toggle(value){
    if(value === true){
        value = !value
    }
    else if(value === false){
      value = !value
    }
    else {
        value = undefined
    }
    return value
}

export function random(arr){
    let mixed = arr[Math.floor(Math.random() * arr.length)];
    return mixed
}