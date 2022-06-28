//Start behaviors

(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));
(function ($) {
	// Cookie Functions - Start
	$(document).ready(function () {
	    $('#contrast').click(function(){
	        if ($('body').hasClass('highcontrast')) {
	          $('body').removeClass('highcontrast');
	          setCookie("highcontrast", 0);
	        }
	        else {
	          $('body').addClass('highcontrast');
	          setCookie("highcontrast", 1);
	        }
	
	        return false;
	    });
		$('#cookielgpd').click(function(){
	        if ($('body').hasClass('cookie_lgpd')) {
	          $('body').removeClass('cookie_lgpd');
	          setCookie("cookielgpd", 0);
	        }
	        else {
	          $('body').addClass('cookie_lgpd');
	          setCookie("cookielgpd", 1);
	        }
	        return false;
	    });
		
	
	});
	// Class manipulation based on cookie check - end
		cookie = readCookie("cookielgpd");
		if (cookie == "1") {
			$('body').addClass('cookie_lgpd');
		}
			else {
			$('body').removeClass('cookie_lgpd');
		}
		
	    cookie = readCookie("highcontrast");
		if (cookie == "1") {
			$('body').addClass('highcontrast');
		}
			else {
			$('body').removeClass('highcontrast');
		}

	//Close behaviors	
})(jQuery);

function readCookie(cname) {
  var nameEQ = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
};

// Cookie Functions
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

