
export function reDrop(obj){
    let {x, y, piece, board, random} = obj
    x = 0
    y = 0
    piece.value = random
    board[0][1] = random
    return obj
}

export function handleDayBtn(array) {
    //This btn will display the highest scores of the day
    let dayScores = [];

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth(); //January is 0!
    let yyyy = today.getFullYear();

    for (let i = 0; i < array.length; i++) {

        let timeStamp = array[i].time_stamp;
        let oldScore = array[i].score;

        if (timeStamp !== null && oldScore !== 0) {
            let arrayDate = timeStamp.substring(0, 10)

            if (arrayDate === yyyy + '-' + (mm + 1) + '-' + dd) {
                dayScores.push(array[i])
            }
        }
    }
    let dayScores2 = dayScores


    return dayScores2

}

export function handleLast7Days() {

    return '0123456'.split('').map(function (n) {
        var d = new Date();
        d.setDate(d.getDate() - n);

        return (function (day, month, year) {
            return [day < 10 ? '0' + day : day, month < 10 ? '0' + month : month, year].join('-');
        })(d.getFullYear(), (d.getMonth() + 1), d.getDate());
    });
}

export function handleWeekBtn(array) {
    let weekScores = [];
    let thisWeek = handleLast7Days()
    

    for (let i = 0; i < array.length; i++) {
        let timeStamp = array[i].time_stamp;
        
        let oldScore = array[i].score;

        if (timeStamp !== null && oldScore !== 0) {
            let arrayDate = timeStamp.substring(0, 10)
            for (let j = 0; j < thisWeek.length; j++) {
                
                if (thisWeek[j] === arrayDate) {
                    weekScores.push(array[i])
                }
            }

        }

    }

    let weekScore2 = weekScores

    return weekScore2

}

export function handleLast30Days() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map(function (n) {
        var d = new Date();
        d.setDate(d.getDate() - n);

        return (function (day, month, year) {
            return [day < 10 ? '0' + day : day, month < 10 ? '0' + month : month, year].join('-');
        })(d.getFullYear(), (d.getMonth() + 1), d.getDate());
    });
}

export function handleMonthBtn(array) {
    //This button will display the highest scores of the month
    let monthScores = [];
    let thisMonth = handleLast30Days()

    for (let i = 0; i < array.length; i++) {
        let timeStamp = array[i].time_stamp;
        let oldScore = array[i].score;

        if (timeStamp !== null && oldScore !== 0) {
            let arrayDate = timeStamp.substring(0, 10)
            for (let j = 0; j < thisMonth.length; j++) {
                if (thisMonth[j] === arrayDate) {
                    monthScores.push(array[i])
                }
            }
        }

    }
    let monthScores2 = monthScores

    return monthScores2

}

