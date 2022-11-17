// window.addEventListener("wheel", function (e) {
// 	e.preventDefault();
// }, { passive: false });

// var $html = $("html");
// var page = 1;
// var lastPage = $(".section").length;
// $html.animate({ scrollTop: 0 }, 10);

// $(window).on("wheel", function (e) {
// 	if ($html
// 	.is(":animated")) return;
// 	if (e.originalEvent.deltaY > 0) {
// 		if (page == lastPage) return;
// 		page++;
// 	} else if (e.originalEvent.deltaY < 0) {
// 		if (page == 1) return;
// 		page--;
// 	}
// 	var posTop = (page - 1) * $(window).height();
// 	$html
// .animate({ scrollTop: posTop });

// });

// $('#icon_customer').on("click", function (e) {
// 	$('#customer').css('display', 'block');
// });

// $('#icon_login').on("click", function (e) {
// 	$('#popup_login').css('display', 'block');
// });
