window.onload = function () {
    var a, b = $("#scroll-spy"),
        c = b.outerHeight() + 15,
        d = b.find("a"),
        e = d.map(function () {
            var f = $($(this).attr("href"));
            if (f.length) return f
        });
    $(window).scroll(function () {
        var f = $(this).scrollTop() + c,
            g = e.map(function () {
                if ($(this).offset().top < f) return this
            });
        g = g[g.length - 1];
        var h = g && g.length ? g[0].id : "";
        a !== h && (a = h, d.parent().removeClass("active").end().filter("[href='#" + h + "']").parent().addClass("active"))
    })
  
    $("a").on("click", function (d) {
      if ("" !== this.hash) {
          d.preventDefault();
          var e = this.hash;
          $("html, body").animate({
              scrollTop: $(e).offset().top
          }, 800, function () {
              window.location.hash = e;
          })
      }
  })

  $(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
  
  };
  