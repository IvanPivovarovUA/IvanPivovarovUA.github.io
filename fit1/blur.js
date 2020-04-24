

var title = document.querySelector("body");

title.style.transition = "2s";
// title.style.opacity = 1;
title.style.filter = "blur(0px)";
setTimeout(satTime, 1000);


function satTime() {
  
  title.style.transition = "0s";
  document.querySelector(".Title") = "0.2s";
}



