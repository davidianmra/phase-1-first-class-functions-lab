
const returnLastTwoDrivers = function (arr) {const arr2 = arr.slice(-2)
    return arr2}

const returnFirstTwoDrivers = function (arr) {const arr2 = [arr[0], arr[1]]
        return arr2}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]





createFareMultiplier = multiplier => function (fare){return multiplier * fare}


const fareDoubler = fare => fare * 2

const fareTripler = fare => fare * 3


function selectDifferentDrivers(array1, function1) {
    return function1(array1)
}