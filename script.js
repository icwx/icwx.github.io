$(function() {
	!location.hash && setTimeout(function () {
		if (!window.pageYOffset) window.scrollTo(0, 1);
	}, 500);

	if ($("#gallery").length) {
		$("#gallery li a").attr('rel', 'gallery').fancybox({
			openEffect: 'none',
			closeEffect: 'none',
			nextEffect: 'none',
			prevEffect: 'none',
			openSpeed: 0,
			closeSpeed: 0,
			nextSpeed: 0,
			prevSpeed: 0,
			helpers: {
				overlay: {
					speedOut: 0
				},
				title: null
			}
		});
	}

	if ($("#vidfeat").length) {
		$(".feature, .inset").fitVids();

		var iframe = $('#vidfeat')[0],
			player = $f(iframe),
			ready;

		player.addEvent('ready', function() {
			player.addEvent('play', function(data) {
				$("#video_thumb").hide();
				$("#vidfeat").parent().show();
			});

			if (ready === false) {
				player.api('play');
			}

			ready = true;
		});

		$('#video_thumb').click(function() {
			if (ready) {
				player.api('play');
			} else {
				ready = false;
				$("#video_thumb").hide();
				$("#vidfeat").parent().show();
			}
		});
	}

	if ($(".flexslider").length && $(".flexslider .slides li").length > 1) {
		$(".flexslider").flexslider({
			animationSpeed: 250,
			slideshowSpeed: 5000,
			controlNav: false,
			directionNav: false,
			touch: false
		});
	} else if ($(".flexslider").length) {
		$(".flexslider .slides li").show();
	}
});
