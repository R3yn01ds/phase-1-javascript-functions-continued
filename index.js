// code your solution here

function wrapAdjective(flair = "*") {
    return function (adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}


