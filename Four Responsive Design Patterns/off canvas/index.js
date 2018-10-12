var lb = document.getElementById("lb");
var lsb = document.getElementById("lsb");

var clb = document.getElementById("clb");

lb.addEventListener("click", function(){
	lsb.style.display = "block";
});

clb.addEventListener("click", function(){
	lsb.style.display = "none";
});
