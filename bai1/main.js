document.getElementById("btnTinhTien").onclick = function() {
   var soNgayLam = document.getElementById("soNgayLam").value;
   soNgayLam = parseInt(soNgayLam);
   var tongTien = soNgayLam * 100000;
   document.getElementById("divNoti").innerHTML = "Tổng tiền: " + tongTien + "VNĐ";

};

