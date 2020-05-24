var MenuPage = document.querySelector(".MenuPage");
function MenuPageOpen() {
	MenuPage.style.zIndex = "10";
	MenuPage.style.opacity = "1";
	
}
function MenuPageClose() {
	MenuPage.style.zIndex = "-10";
	MenuPage.style.opacity = "0";

}


// var MenuPageButton = document.querySelector(".Header-MenuPageButton");
// window.addEventListener("resize", clearManuPage);
// function clearManuPage() {
// 	if (window.innerWidth > 750 && MenuPageButton.style.display == "none") {

// 	}
// }
