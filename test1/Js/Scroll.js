function scrollPage(){
	if (document.getElementsByTagName("html")[0].scrollTop > 0){
 		console.log('Scrolling...');
 		document.getElementById("Header").style.height = "70px";
 		document.getElementById("Header").style.background = "black";
 		document.getElementById("Header").style.borderBottom = "1px #f05f40 solid";
 	
 		document.querySelector(".Header-Logo").style.height = "35px";
 		
	}else {
		document.getElementById("Header").style.height = "90px";
		document.getElementById("Header").style.background = "none";
		document.getElementById("Header").style.borderBottom = "1px rgba(240,95,64,0.1) solid";

		document.querySelector(".Header-Logo").style.height = "45px";
		
	}
}
scrollPage();




window.addEventListener('scroll',(event) => {
	scrollPage();

});


