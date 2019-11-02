//Ở bảng trên, tạo ra 1 list chứa diện tích của từng quận, theo thứ tự từ trên xuống dưới
//Từ list chứa diện tích và list chứa dân số của các quận, tạo ra 1 list mới chứa mật độ dân cư 
//của các quận từ trên xuống. Công thức: Mật độ dân cư = Dân số / diện tích
let dsDienTichQuan = [117.43,9.224,43.35,12.04,9.96,10.09]
let dansoQuan = [150.300,247.100,333.300,266.800,420.900,318.000]
let matDoDanSo = new Array()
matDoDanSo[0] = dsDienTichQuan[0] / dansoQuan[0]
matDoDanSo[1] = dsDienTichQuan[1] / dansoQuan[1]
matDoDanSo[2] = dsDienTichQuan[2] / dansoQuan[2]
matDoDanSo[3] = dsDienTichQuan[3] / dansoQuan[3]
matDoDanSo[4] = dsDienTichQuan[4] / dansoQuan[4]
matDoDanSo[5] = dsDienTichQuan[5] / dansoQuan[5]
console.log(matDoDanSo)