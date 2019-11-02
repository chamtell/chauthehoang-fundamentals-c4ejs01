//Từ list ở bài 15, tính mật độ dân cư trung bình của các quận
//. Công thức: Mật độ dân cư trung bình = Tổng mật độ dân cư /  tổng số quận
let dsDienTichQuan = [117.43,9.224,43.35,12.04,9.96,10.09]
let dansoQuan = [150.300,247.100,333.300,266.800,420.900,318.000]
let matDoDanSo = new Array()
matDoDanSo[0] = dsDienTichQuan[0] / dansoQuan[0]
matDoDanSo[1] = dsDienTichQuan[1] / dansoQuan[1]
matDoDanSo[2] = dsDienTichQuan[2] / dansoQuan[2]
matDoDanSo[3] = dsDienTichQuan[3] / dansoQuan[3]
matDoDanSo[4] = dsDienTichQuan[4] / dansoQuan[4]
matDoDanSo[5] = dsDienTichQuan[5] / dansoQuan[5]
let TongMatDanSo = 0
for (let i = 0; i <matDoDanSo.length; i++){
    TongMatDanSo = TongMatDanSo + matDoDanSo[i]
}
console.log('Tổng mật độ dân cư: '+ TongMatDanSo)

let TongSoQuan = 6
let MatDoDanCuTrungBinh = TongMatDanSo / TongSoQuan
console.log('Mật độ dân cư trung bình là: '+ MatDoDanCuTrungBinh)