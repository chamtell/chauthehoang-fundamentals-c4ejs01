//Hiện ra danh sách điểm cao (chưa cần phải đúng thứ tự từ trên xuống dưới ngay):
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



