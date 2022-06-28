/*
 Tornar menu vertical .menu.nav collapse
 Insere texto anterior e next nos links do carousel
*/

if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

(function ($) {
    Drupal.behaviors.customToggler = {
        attach: function (context, settings) {
                  
			$('#main-wrapper').hover(function () {
              $('#floatmenu-menu1').removeClass('show');
            });	
			
			$('#navbar-main .subheader1').hover(function () {
              $('#floatmenu-menu1').removeClass('show');
            });	
			
			$('#navbar-main .subheader2 .menu--menu-relevancia ').hover(function () {
              $('#floatmenu-menu1').removeClass('show');
            });				
			
			$('#navbar-main .subheader2 .subheader2-right ').hover(function () {
              $('#floatmenu-menu1').removeClass('show');
            });


			
			                  
			$('#barra').hover(function () {
              $('#floatmenu-menu1').removeClass('show');
            });	

			
				  
				  
				  
            $('#show-floatmenu .dropdown-submenu').each(function (i) {
                menu_id = $(this).attr('data-bs-target');
                menu_id = menu_id.replace('#', '');	
				var $parent = $(this).next('ul');
				if ($parent.hasClass('dropdown-menu')) {
					$(this).next('ul').attr("id", menu_id);
					}
            });
			
			// AO CLICAR NO MENU HAMBURGER COLOCA O FOCO O PRIMEIRO ITEM DO PRIMEIRO SUBMENU
				$("button#nivel0item1").click(function () {
				   $('#show-floatmenu .floatmenucol1 button.dropdown-submenu.item-foco').focus();
				});	
				
			/* TRATA CLICK NOS SUBMENUS DO FLOATMENU */
					
			$('#show-floatmenu .dropdown-submenu').on("click", function(e){
				    var $this_id = $(this).next('#show-floatmenu .dropdown-menu').attr('id');
					//Obtem e verifica se UL superior é o raiz do menu
					var $parent = $(this).closest('ul');
					// Navega
					if ($parent.hasClass('nav')) {
						$('#show-floatmenu .dropdown-submenu').each(function (i) {
						   $drop_id = $(this).next().attr('id');
						   $thistemshow = $(this).next('#show-floatmenu .dropdown-menu').hasClass('show');
						   $droptemshow = $('#show-floatmenu .dropdown-menu').hasClass('show');
						   if ($this_id != $drop_id ) {
							   if ($droptemshow) {
								   $('#show-floatmenu #'+$drop_id).removeClass('show');
							   }
						   } else {
							   if ($droptemshow) {
								  $('#show-floatmenu #'+$drop_id).removeClass('show');
							   }
						   }
					    });
					}
			});				
		}
    }
})(jQuery);