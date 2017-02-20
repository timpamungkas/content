(function(window, undefined) {
	$(document).ready(function() {
		$('.category-tabs .category-tab-link').click(function(e) {
			var tab_id = $(this).attr('rel');
			$('.category-tabs .category-tab-link').removeClass('current');
			$('.category-tab-content').removeClass('current');
			$(this).addClass('current');
			$("#" + tab_id).addClass('current');
		});
		$('#beauty-logo-page1 #other-brands').click(function() {
			$('#beauty-logo-page1').addClass('hide');
			$('#beauty-logo-page2').removeClass('hide');
		});
		$('#beauty-logo-page2 #other-brands').click(function() {
			$('#beauty-logo-page1').removeClass('hide');
			$('#beauty-logo-page2').addClass('hide');
		});
	});
})(window);