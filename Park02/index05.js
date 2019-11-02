//Từ chỉ số của quận có dân số đông nhất và ít nhất,
// in ra tên của quận có số dân lớn nhất và số dân ít nhất
let quan = ["ST","BĐ","BTL","CG","ĐĐ","HBT"]
let dansoQuan = ["150.300","247.100","333.300","266.800","420.900","318.000"]
let max = dansoQuan[0]
let min = dansoQuan[0]
for (let i = 0; i < dansoQuan.length; i++){
    if (max < dansoQuan[i]){
        max = dansoQuan[i]
    }
    else if (min > dansoQuan[i]){
        min = dansoQuan[i]
    }
}
console.log('Dân số quận lớn nhất: ' + max + quan[4])
console.log('Dân số quận lớn nhất: ' + min + quan[0])