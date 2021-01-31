let totalSystemChecks = 16
let pointsToPass = 25
let currentPoints = parseInt(prompt("What is the total of your current points?"))
let systemChecksCompleted = parseInt(prompt("How many system checks have you completed?"))

let needToPass = (pointsToPass - currentPoints)
console.log("Needed to pass", needToPass)
let systemChecksRemaining = (totalSystemChecks - systemChecksCompleted)
console.log("System checks remaining", systemChecksRemaining)

let remainingSysChkArray = []
for (let i = 1; i <= systemChecksRemaining; i++) {
    remainingSysChkArray.push(1)
}

let j = 0
let incrementFunction = (array) => {
    if ( needToPass <= systemChecksRemaining || needToPass > systemChecksRemaining * 3 ) {
        return false
    } else if ( array.reduce((a, b) => a + b, 0) === needToPass ) {
        //console.log(remainingSysChkArray.reduce((a, b) => a + b, 0))
        return true
    } else if (array[j] === 3) {
        j++
        incrementFunction(array)
    } else {
        array[j] += 1
        j++
        incrementFunction(array)
    }
}

incrementFunction(remainingSysChkArray)

let tallyFunction = (array) => {
    let tallyArray = []
    let ones = array.filter((number) => {
        return number === 1
    })
    let twos = array.filter((number) => {
        return number === 2
    })
    let threes = array.filter((number) => {
        return number === 3
    })
    tallyArray.push(ones.length, twos.length, threes.length)
    return tallyArray
}

tallyScoresNeeded = tallyFunction(remainingSysChkArray)

if ( needToPass <= systemChecksRemaining ) {
    console.log(`You need to get ONE (makeup point) for ${needToPass} of the remaining ${systemChecksRemaining} system checks.`)
} else if ( needToPass > systemChecksRemaining * 3 ) {
    console.log(`You need ${needToPass} more points to pass which cannot be achieved in the remaining ${systemChecksRemaining} system checks.`)
} else {
    console.log(`The minimum scores you need to pass are: ${tallyScoresNeeded[0]} ONES (makeup), ${tallyScoresNeeded[1]} TWOS (meets expectations) and ${tallyScoresNeeded[2]} THREES (exceeds expectations)`)
}