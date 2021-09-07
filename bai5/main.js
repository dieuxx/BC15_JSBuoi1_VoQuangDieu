document.getElementById("btnTinh").onclick = function(){
    var soN = document.getElementById("soN").value;
    soN = parseInt(soN);
    var chuc = Math.floor(soN/10);
    var donVi = soN%10;
    var tong = chuc + donVi;
    document.getElementById("divNoti").innerHTML = "Tổng 2 ký số là: " + tong;
};