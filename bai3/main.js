document.getElementById("btnTinh").onclick = function(){
    var tienUSD = document.getElementById("tienUSD").value;
    tienUSD = parseInt(tienUSD);
    var tienVND = tienUSD * 23500;
    document.getElementById("divNoti").innerHTML = "Đổi sang VNĐ là: " + tienVND+"VNĐ";
};