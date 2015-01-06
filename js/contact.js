function loadJagdish(clicked) {
	document.getElementById("contactName").innerHTML = "Jagdish Balwani";
	document.getElementById("contactInfo").innerHTML = "Mobile : +919810044417";
	document.getElementById("contactLink").href = "tel:+919810044417";
	document.getElementById("contactButton").innerHTML = "Call";
	document.getElementById("contactPic").style.background = "url(img/dad.png) no-repeat";
	document.getElementById("contactPic").style.backgroundSize = "contain";
	$(".contactList ul li").css("background","rgba(255,255,255,0.8");
	$(clicked).css("background","rgba(255,255,255,1");
}

function loadAdi(clicked) {
	document.getElementById("contactName").innerHTML = "Aditya Balwani";
	document.getElementById("contactInfo").innerHTML = "Mobile : +919818244417";
	document.getElementById("contactLink").href = "tel:+919818244417";
	document.getElementById("contactButton").innerHTML = "Call";
	document.getElementById("contactPic").style.background = "url(img/adi.png) no-repeat";
	document.getElementById("contactPic").style.backgroundSize = "contain";
	$(".contactList ul li").css("background","rgba(255,255,255,0.8");
	$(clicked).css("background","rgba(255,255,255,1");
}

function loadShobha(clicked) {
	document.getElementById("contactName").innerHTML = "Shobha Balwani";
	document.getElementById("contactInfo").innerHTML = "Email : shobhabalwani23@gmail.com";
	document.getElementById("contactLink").href = "mailto:shobhabalwani23@gmail.com";
	document.getElementById("contactButton").innerHTML = "Email";
	document.getElementById("contactPic").style.background = "url(img/mom.png) no-repeat";
	document.getElementById("contactPic").style.backgroundSize = "contain";
	$(".contactList ul li").css("background","rgba(255,255,255,0.8");
	$(clicked).css("background","rgba(255,255,255,1");
}

function loadManohar(clicked) {
	document.getElementById("contactName").innerHTML = "Manohar Rajdev";
	document.getElementById("contactInfo").innerHTML = "Mobile : +919811070666";
	document.getElementById("contactLink").href = "tel:+919811070666";
	document.getElementById("contactButton").innerHTML = "Call";
	document.getElementById("contactPic").style.background = "url(img/star-2.png) no-repeat";
	document.getElementById("contactPic").style.backgroundSize = "contain";
	$(".contactList ul li").css("background","rgba(255,255,255,0.8");
	$(clicked).css("background","rgba(255,255,255,1");
}

function loadAmit(clicked) {
	document.getElementById("contactName").innerHTML = "Amit Agarwal";
	document.getElementById("contactInfo").innerHTML = "Mobile : +919958135000";
	document.getElementById("contactLink").href = "tel:+919958135000";
	document.getElementById("contactButton").innerHTML = "Call";
	document.getElementById("contactPic").style.background = "url(img/star-2.png) no-repeat";
	document.getElementById("contactPic").style.backgroundSize = "contain";
	$(".contactList ul li").css("background","rgba(255,255,255,0.8");
	$(clicked).css("background","rgba(255,255,255,1");
}


function loadMalvika(clicked) {
	document.getElementById("contactName").innerHTML = "Malvika Agarwal";
	document.getElementById("contactInfo").innerHTML = "Mobile : +918860085434";
	document.getElementById("contactLink").href = "tel:+918860085434";
	document.getElementById("contactButton").innerHTML = "Call";
	document.getElementById("contactPic").style.background = "url(img/star-2.png) no-repeat";
	document.getElementById("contactPic").style.backgroundSize = "contain";
	$(".contactList ul li").css("background","rgba(255,255,255,0.8");
	$(clicked).css("background","rgba(255,255,255,1");
}


function bride() {
	$("#brideList").fadeIn(300);
	$("#groomsList").fadeOut(300);
}

function groom() {
	$("#brideList").fadeOut(300);
	$("#groomsList").fadeIn(300);
}