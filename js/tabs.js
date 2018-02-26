var tab;
var tabContent;
window.onload = function() {
	tabContent = document.getElementsByClassName("tabs__content");
	tab = document.getElementsByClassName("menu-tabs__item");
	hideTabsContent(1);
}

function hideTabsContent(a) {
	for (var i = a; i < tabContent.length; i++) {
		tabContent[i].classList.remove("show");
		tabContent[i].classList.add("hide");
		tab[i].classList.remove("menu-tabs__item--active");
	}
}

document.getElementById("tabs").onclick = function (event) {
	var target = event.target;
	if (target.className == "menu-tabs__item") {
		for (var i = 0; i < tab.length; i++) {
			if (target == tab[i]) {
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent(b) {
	if (tabContent[b].classList.contains("hide")) {
		hideTabsContent(0);
		tab[b].classList.add("menu-tabs__item--active");
		tabContent[b].classList.remove("hide");
		tabContent[b].classList.add("show");
	}
}