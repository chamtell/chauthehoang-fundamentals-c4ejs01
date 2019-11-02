//Thực hiện lại bài số 9 và 10 với các điểm được hiện từ cao đến thấp
let scores = [45,67,56,78]
console.log('High scores:')
for (let i = 0; i <scores.length;i++){
    console.log(i + 1 + ':' + scores[i])
}
let scoresAdd = prompt('Nhập vào một điểm')
console.log('Enter your new score: ' + scoresAdd)
let add = scores.push(Number(scoresAdd))
console.log('High scores: ')
for(let j =0; j < scores.length;j++){
    console.log(j + 1 + ':' + scores[j])
}
scores.sort().reverse()
console.log('High scores: ')
for(let k = 0; k < scores.length;k++){
    console.log(k + 1 + ':' + scores[k])
}
