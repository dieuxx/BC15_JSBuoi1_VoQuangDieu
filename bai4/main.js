document.getElementById("btnTinh").onclick = function(){
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    chieuDai = parseInt(chieuDai);
    chieuRong = parseInt(chieuRong);
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong)*2;
    document.getElementById("divNoti1").innerHTML = "Diện tích hình chữ nhật là: " + dienTich;
    document.getElementById("divNoti2").innerHTML = "Diện tích hình chữ nhật là: " + chuVi;
};