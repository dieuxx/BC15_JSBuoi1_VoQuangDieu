document.getElementById("btnTinh").onclick = function(){
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so3 = document.getElementById("so3").value;
    var so4 = document.getElementById("so4").value;
    var so5 = document.getElementById("so5").value;
    so1 = parseInt(so1)
    so2 = parseInt(so2)
    so3 = parseInt(so3)
    so4 = parseInt(so4)
    so5 = parseInt(so5)
    var giaTriTB = (so1 + so2 + so3 + so4 + so5)/5;
    document.getElementById("divNoti").innerHTML = "Giá trị trung bình là: " + giaTriTB;
};