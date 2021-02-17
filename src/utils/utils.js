export const getRandomInt = (minNum, maxNum) => {
    let min = Math.ceil(minNum)
    let max = Math.floor(maxNum)
    return Math.floor(Math.random() * (max - min)) + min
}