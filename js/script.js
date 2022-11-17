// 헤더 조정
var currentMenu;
var menuLinks = document.querySelectorAll('.menu-link');
var dg = document.getElementsByClassName("menu-link")

function clickMenuHandler() {
	for (var i = 0; i < menuLinks.length; i++) {
	    menuLinks.item(i).style.color = "white"; // 선택된 모든 요소의 텍스트 색상을 변경함.
	}
	this.style.color = "gold";
}

for (var i = 0; i < menuLinks.length; i++) {
	menuLinks[i].addEventListener('click', clickMenuHandler);
}