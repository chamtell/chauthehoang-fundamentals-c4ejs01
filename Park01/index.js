//Tạo 1 list chứa trên 5 số không cách đều.
// Lọc ra tất cả những số chẵn trong dãy này và in ra màn hình
let list = [5,1,8,92,7,30]
let text = ''
for (let i=0; i < list.length; i++){
    even = list[i] % 2
    if (even == 0){
        text = text + list[i]
        text = text + ','
    }
}
console.log('Những số chẵn có trong dãy là: ' + text)