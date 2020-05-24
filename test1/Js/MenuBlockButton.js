function MenuBlockOpen() {
	
	document.querySelector(".Header-MenuButton_MenuSmallBlock").style.display = "block";
	document.querySelector(".Header-MenuPageButton").style.color = "#f05f40";
	clearTimeout(t);
}

function MenuBlockClose() {
	// document.querySelector(".Header-MenuButton_MenuSmallBlock").style.display = "none";
	t = setTimeout(sayHi, 10);
}

var t = "";
function sayHi() {
 	// alert('Привет');
 	document.querySelector(".Header-MenuButton_MenuSmallBlock").style.display = "none";
 	document.querySelector(".Header-MenuPageButton").style.color = "white";
}




// function MenuBlockOpen() {
// 	// alert(1);
// 	document.querySelector(".Header-MenuButton_MenuSmallBlock").style.display = "block";
// 	clearTimeout(t);
// }
// var t = "";
// function MenuBlockClose() {


// 	document.querySelector(".Header-MenuButton_MenuSmallBlock").style.display = "none";
	
// 	t = setTimeout(sayHi, 1000);



	
// }

// function sayHi() {
//  	alert('Привет');
 
// }




// function clickButton(x) {

// 	if (x == 1) {
// 		if (document.getElementById("MenuSmallBlock").style.display != "block"){
// 			document.getElementById("MenuSmallBlock").style.display = "block";
// 		}else {
// 			document.getElementById("MenuSmallBlock").style.display = "none";
// 		}	
// 	}
// 	// if (x == 2) {
// 	// 	document.getElementById("MenuSmallBlock").style.display = "none";
// 	// }

// }